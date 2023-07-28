let firstNum = 0;
let operator = 0;
let secNum = 0;

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

function operate (firstNum, operator, secNum) {
  add (a,b);
  subtract (a,b);
  multiply (a,b);
  divide (a,b);
};

const numBtn = document.querySelectorAll(".numBtn");
const display = document.querySelector(".display");


numBtn.forEach(button => button.addEventListener('click', function() {
  display.innerHTML="";
  let numDisplay = document.createElement('p');
    numDisplay.textContent = button.innerText;
  display.appendChild(numDisplay);
}));

// 5. create function that populates display, store variable for use
// 6. make calculator work > store first number and operator chosen then operate when equal is pressed
// 7. be able to string together several operations 12 + 7 - 5 * 3 = should yield 42
 // test if operates in pairs
 // round answers with decimals
 // pressing = before entering can cause problems  (wait for second number)
 // start fresh with clear button
 // divide by 0 = infinity / NAN
// 8. Add a decimal button
// 9. Add css / ui / decorations
// 10. undo button
// 11. keyboard support
