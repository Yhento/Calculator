const add = (num1, num2) => {
  console.log(num1, num2)
  return num1 + num2;

}

const subtract = (num1, num2) => {

  return num1 - num2;

}

const multiply = (num1, num2) => {

  return num1 * num2;

}

const divide = (num1, num2) => {
  if (num2 == 0){
    return "lmao";
  } else {
  return (num1 / num2);
  }

}

let number_one = "";
let number_two = "";
let user_input = 0;
let operator = "";


const operate = (operator, number_one, number_two) => {

  switch(operator) {

    case "add":
      return add(number_one, number_two);
      break;
    
    case "subtract":
     return subtract(number_one, number_two);
      break;

    case "multiply":
      return multiply(number_one, number_two);
      break;

    case "divide":
      return divide(number_one, number_two);
      break;

  }

}

var calculator = document.querySelector(".calculator");
var calculator_display = document.querySelector(".display");
var history = document.querySelector(".history span");
calculator_display.value = 0;

const populateDisplay = (text) => {
  
  if (user_input == 0 && text == 0 && !user_input.toString().includes(".")) {
    user_input = text;
    calculator_display.value = text;
    
  }
  else if (user_input == 0 && text !== "." && !user_input.toString().includes(".")) {
    user_input = text;
    calculator_display.value = user_input;
  }
  else {
    user_input += text;
    calculator_display.value = user_input;
  }

}

calculator.addEventListener('click', (e) => {
  target = e.target;
  target_button = target.className;
  
  switch(target_button) {
    case "number-button":
      populateDisplay(target.textContent);
      break;
  }








});










