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
  else if (operateVal === "x") {
    result = multiply (a,b);
  } 
  else if (operateVal === "÷") {
    result = divide (a,b);
  } 
  // Display result 
  currentDisplay.textContent = result;
  //Resets variables for further string calculations after equal is pressed
  firstNum = result.toString();
  secNum = "";
  operateVal = ""; 
  console.log(firstNum)
}

//DOM selectors
const numBtn = document.querySelectorAll(".numBtn");
const currentDisplay = document.querySelector(".currentDisplay");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const allClear = document.getElementById("allClear");
const del = document.getElementById("del");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("product");
const division = document.getElementById("division");

numBtn.forEach(button => button.addEventListener('click', function(result) {
  // If operator value is empty, store number inputs into first number variable
  let populate = document.createElement('p');
  if (operateVal === "") {
    //Prevents multiple decimals
    if (firstNum.includes(".") && button.innerText ===".") {
      return
    }
    //Display on button press
    currentDisplay.innerHTML="";
    firstNum += button.innerText;
    populate.textContent = firstNum;
    currentDisplay.appendChild(populate);
    console.log(firstNum)

  //If operator value is pressed and has value, store data into second number variable
  } 
  else if (operateVal !== "") {
    if (secNum.includes(".") && button.innerText ===".") {
      return
    }
    currentDisplay.innerHTML="";
    secNum += button.innerText;
    populate.textContent = secNum;
    currentDisplay.appendChild(populate);
    resetToggle();

  };
  console.log(secNum)
}));


//Toggle background color of selected operator button
operator.forEach(button => button.addEventListener('click', function(event, populate) {
  if (secNum !== "" && operateVal !== "") {
    operate();
  }
  resetToggle();
  operateVal = button.innerText;
  operatorToggle ();
  console.log(operateVal);
}));

//Clear button to reset calculator variables and button toggles
allClear.addEventListener('click', function() {
  currentDisplay.innerHTML="0";
  firstNum = "";
  secNum = "";
  operateVal = "";
  resetToggle();
});

//Operator button toggle effect reset
function resetToggle () {
  plus.style.backgroundColor="white";
  minus.style.backgroundColor="white";
  product.style.backgroundColor="white";
  division.style.backgroundColor="white";
}

// Toggles operator button
function operatorToggle () {
  if (operateVal === "+") {
    plus.style.backgroundColor="lightBlue";
  } 
  else if (operateVal === "-") {
    minus.style.backgroundColor="lightBlue";
  } 
  else if (operateVal === "x") {
    product.style.backgroundColor="lightBlue";
  } 
  else if (operateVal === "÷") {
    division.style.backgroundColor="lightBlue";
  } 
}

// Delete button functionality
del.addEventListener('click', function(populate) {
  // if first number is not empty and operator is empty, slice last character in string and display
  if (firstNum !== "" && operateVal === "") {
    currentDisplay.innerHTML=""
    firstNum = firstNum.slice(0,-1);
    currentDisplay.textContent = firstNum;
    // if sliced to empty from one character, display 0
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
// delete button
// positive negative buttons (multiply by -1)
// Devide by 0 interactions
// Round?
// sync to keyboard
// make grid even
// decorate css


// equal buttons interactions
// Clear button