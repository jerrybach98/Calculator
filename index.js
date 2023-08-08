//storage variables
let firstNum = "";
let secNum = "";
let operateVal = ""; 

//operator functions
function add (a,b) {
	return a + b;
};
function subtract (a,b) {
	return a - b;
};
function multiply (a,b) {
  return a * b;
};
function divide (a,b) {
  return a / b;
};

//Takes string inputs from variables, sets themn to numbers, then operates on the two given numbers
function operate () {
  const a = Number(firstNum);
  const b = Number(secNum);
  let result = "";
  if (operateVal === "+") {
    result = add (a,b);
  } 
  else if (operateVal === "-") {
    result = subtract (a,b);
  } 
  else if (operateVal === "×") {
    result = multiply (a,b);
  } 
  else if (operateVal === "÷") {
    result = divide (a,b);
  } 
  // Display result 
  
  //Resets variables for further string calculations after equal is pressed
  if (isNaN(result)) {
    currentDisplay.textContent = "Error"
    firstNum="0"
    secNum = "";
    operateVal = ""; 
  }  else {
  currentDisplay.textContent = result.toLocaleString("en-US");
  firstNum = result.toString();
  secNum = "";
  operateVal = ""; 
  console.log(firstNum);
  };
}

//DOM selectors
const numBtn = document.querySelectorAll(".numBtn");
const currentDisplay = document.querySelector(".currentDisplay");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const allClear = document.getElementById("allClear");
const del = document.getElementById("del");
const sign = document.getElementById("sign");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("product");
const division = document.getElementById("division");

//Function to set simulate mouse click on buttons when using keyboard
function simulateClick (element) {
  if (element===equals) {
    element.classList.add('simulateEquals');
    setTimeout(() => {
      element.classList.remove('simulateEquals');
  }, 200);
  } 
  else {
    element.classList.add('simulateClick');
    setTimeout(() => {
      element.classList.remove('simulateClick');
  }, 200)};
}

//Handle keyboard inputs
window.addEventListener('keydown', function(e) {
    const keyboard = document.querySelector(`.key[data-key="${e.key}"]`);
    if (keyboard) {
      keyboard.click();
      simulateClick (keyboard);
    } 
    else if (e.key === "Enter") {
      equals.click(); 
      simulateClick (equals);
    } else if (e.key === "Delete") {
      del.click(); 
      simulateClick (del);
    } 
    else if (e.key === "Shift") {
      shift = true;
    } 
    else if (shift === true && e.key ==="*") {
      product.click(); 
      simulateClick (product);
    } 
    else if (shift === true && e.key ==="+") {
      plus.click(); 
      simulateClick (plus);
    } 
});

//Shift keyboard press check for operators
window.addEventListener('keyup', function(e) {
  if (e.key === "Shift") {
    shift = false;
  }
});

numBtn.forEach(button => button.addEventListener('click', function(result) {
  // If operator value is empty, store number inputs into first number variable
  let populate = document.createElement('p');
  if (operateVal === "") {
    //Prevents multiple decimals
    if (firstNum.includes(".") && button.innerText ===".") {
      return
    } else if (firstNum==="" && button.innerText ===".") {
      firstNum = "0";
    }
    //Prevent 0's at beginning
    else if ((firstNum==="" || firstNum==="0") && button.innerText ==="0"){
      return
    } else if (firstNum==="0") {
      firstNum = firstNum.substring(1);
    }
    //Display on button press
    currentDisplay.innerHTML="";
    //Stores button presses into variable as string
    firstNum += button.innerText;
    populate.textContent = firstNum;
    currentDisplay.appendChild(populate);
    populate.style.margin = "0"
    console.log(firstNum);


  //If operator value is pressed and has value, store data into second number variable
  } 
  //Prevent decimals
  else if (operateVal !== "") {
    if (secNum.includes(".") && button.innerText ===".") {
      return
    }
    else if (secNum==="" && button.innerText ===".") {
      secNum = "0";
    }
    //Prevent 0 in beginning
    else if ((secNum==="" || secNum==="0") && button.innerText ==="0"){
      return
    }
    currentDisplay.innerHTML="";
    secNum += button.innerText;
    populate.textContent = secNum;
    currentDisplay.appendChild(populate);
    populate.style.margin = "0"
    resetToggle();

  };
}));

//Toggle background color of selected operator button
operator.forEach(button => button.addEventListener('click', function(event, populate) {
  if (secNum !== "" && operateVal !== "") {
    operate();
  }
  resetToggle();
  operateVal = button.innerText;
  operatorToggle ();
}));

//Clear button to reset calculator variables and button toggles
allClear.addEventListener('click', function() {
  currentDisplay.innerHTML="0";
  firstNum = "";
  secNum = "";
  operateVal = "";
  resetToggle();
});

//Sign button
sign.addEventListener('click', function() {
  if (firstNum !== "" && operateVal === "") {
    firstNum = (Number(firstNum) * -1).toString();
     currentDisplay.textContent = firstNum;
  } 
 else if (secNum !== "" && operateVal !== "") {
    secNum = (Number(secNum) * -1).toString();
    currentDisplay.textContent = secNum;
  }
});

//Operator button toggle effect reset
function resetToggle () {
  plus.classList.remove('hovered')
  minus.classList.remove('hovered')
  product.classList.remove('hovered')
  division.classList.remove('hovered')
}

// Toggles operator button
function operatorToggle () {
  if (operateVal === "+") {
    plus.classList.add('hovered')
  } 
  else if (operateVal === "-") {
    minus.classList.add('hovered')
  } 
  else if (operateVal === "×") {
    product.classList.add('hovered')
  } 
  else if (operateVal === "÷") {
    division.classList.add('hovered')
  } 
}

// Delete button functionality
del.addEventListener('click', function(populate) {
  // if first number is not empty and operator is empty, slice last character in string and display
  if (firstNum !== "" && operateVal === "") {
    currentDisplay.innerHTML=""
    firstNum = firstNum.slice(0,-1);
    currentDisplay.textContent = firstNum;
    // if sliced/delete to empty from one character, display 0
    if (firstNum === "") {
      currentDisplay.textContent = "0";
    }
  } 
  // if operator value is not empty and second value is, display first number and reset toggle
  else if (operateVal !== "" && secNum === "") {
    operateVal="";
    currentDisplay.textContent = firstNum;
    resetToggle();
  // second number
  } else if (operateVal !== "" && secNum !== "" ) {
    currentDisplay.innerHTML=""
    secNum = secNum.slice(0,-1);
    currentDisplay.textContent = secNum;
    // if second number is empty, go back a step to display first num and toggled operator
    if (secNum === "") {
      currentDisplay.textContent = firstNum;
      operatorToggle();
    }
  }
});

//Clicks equal button and calls operate function
equals.addEventListener('click', function () {
  if (operateVal ==="" || secNum==="") {
    return;
  } 
  else operate ();
  } 
);

// next steps
// Prevent number overflow
// Don't allow number to start with 0 
// 


// Don't allow number to start with 0 
// Operator CSS adjustments sizing
// Mapped additionaL KEYBOARD buttons to calculator