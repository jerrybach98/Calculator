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

//Takes string inputs from variables, sets themn to numbers, then operates on them
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
const del = document.getElementById("delete");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("product");
const division = document.getElementById("division");

numBtn.forEach(button => button.addEventListener('click', function(result) {
  // If operator value is empty, store number inputs into second number variable
  let populate = document.createElement('p');
  if (operateVal === "") {
    if (firstNum.includes(".") && button.innerText ===".") {
      return
    }
    currentDisplay.innerHTML="";
    firstNum += button.innerText;
    populate.textContent = firstNum;
    currentDisplay.appendChild(populate);
    console.log(firstNum)
    
  //Else if operator value is pressed/has value, store data into second number variable
  } else if (operateVal !== "") {
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


//Toggle background color of operator button to indicate second variable is being recorded
operator.forEach(button => button.addEventListener('click', function(event, populate) {
  if (secNum !== "" && operateVal !== "") {
    operate();
  }
  resetToggle();
  operateVal = button.innerText;
  button.style.backgroundColor="lightBlue";
  console.log(operateVal)
}));

//Clear button to reset calculator variables and button toggles
allClear.addEventListener('click', function() {
  currentDisplay.innerHTML="0";
  firstNum = "";
  secNum = "";
  operateVal = "";
  resetToggle();
});

// operator button toggle
function resetToggle() {
  plus.style.backgroundColor="white";
  minus.style.backgroundColor="white";
  product.style.backgroundColor="white";
  division.style.backgroundColor="white";
}

//del.addEventListener('click', function() {

//});

//Clicks equal button and calls operate function
equals.addEventListener('click', operate);


// tasks: string together calculations without equals button
// clicking a new number starts a new calculation instead of adding to result string
