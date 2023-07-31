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

function operate () {
  const a = Number(firstNum);
  const b = Number(secNum);
  let result = 0;
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
  currentDisplay.textContent = result;
  console.log(result);
  firstNum = result;
  secNum = "";
  operateVal = ""; 
}


const numBtn = document.querySelectorAll(".numBtn");
const currentDisplay = document.querySelector(".currentDisplay");
const operator = document.querySelectorAll(".operator");
const allClear = document.getElementById("allClear");
const equals = document.querySelector("#equals");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("product");
const division = document.getElementById("division");

numBtn.forEach(button => button.addEventListener('click', function() {
  if (operateVal === "") {
    let populate = document.createElement('p');
    currentDisplay.innerHTML="";
    firstNum += button.innerText;
    populate.textContent = firstNum;
    currentDisplay.appendChild(populate);
  } else {
    let populate = document.createElement('p');
    currentDisplay.innerHTML="";
    secNum += button.innerText;
    populate.textContent = secNum;
    currentDisplay.appendChild(populate);
    plus.style.backgroundColor="white";
    minus.style.backgroundColor="white";
    product.style.backgroundColor="white";
    division.style.backgroundColor="white";
  }
}));

operator.forEach(button => button.addEventListener('click', function() {
  operateVal = button.innerText;
  button.style.backgroundColor="lightBlue";
}));

allClear.addEventListener('click', function() {
  currentDisplay.innerHTML="0";
  firstNum = "";
  secNum = "";
  operateVal = ""; 
  plus.style.backgroundColor="white";
  minus.style.backgroundColor="white";
  product.style.backgroundColor="white";
  division.style.backgroundColor="white";
});

equals.addEventListener('click', operate);
