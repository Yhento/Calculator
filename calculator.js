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
var decimal_button = document.querySelector("#decimal_button");
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

const findOperator = (math_symbol) => {

  switch(math_symbol){
    case "+":
      operator = "add";
      break;
    case "-":
      operator = "subtract";
      break;
    case "*":
      operator = "multiply";
      break;
    case "/":
      operator = "divide";
      break;
  }
  
}

const clear_All = () => {
  number_one = "";
  number_two = "";
  operator = "";
  user_input = 0;
  calculator_display.value = 0;
  
  decimal_button.classList.add("number-button");


}

calculator.addEventListener('click', (e) => {
  target = e.target;
  target_button = target.className;
  
  switch(target_button) {
    case "number-button":
      populateDisplay(target.textContent);
      if (calculator_display.value.includes('.')){
        decimal_button.classList.remove("number-button");
      }
      else {
        decimal_button.classList.add("number-button");
      }
      break;

    case "operator-button":
      
      if (number_one == "") {
        number_one = parseFloat(user_input);
        console.log("Number 1", number_one);
        user_input = 0;
      }
      else if (number_two == "") {
        number_two = parseFloat(user_input);
        console.log("Number 2", number_two);
        
        number_one = operate(operator, number_one, number_two);
        if (number_one.toString().includes('.')){
          number_one = parseFloat(number_one.toFixed(2));
        }
        user_input = 0;
        populateDisplay(number_one);
        if(number_one == "lmao") {
          number_one = "";
          console.log("Redo number one");
        }
        user_input = 0;
        console.log("Number 1 is now", number_one);
        number_two = "";
        
        
      }
      findOperator(target.textContent);
      
      break;

    case "equal-button":
      if(number_one !== "" && operator !== "" && number_two == "") {
        number_two = parseFloat(user_input);
        console.log("Number 2", number_two);
        
        number_one = operate(operator, number_one, number_two);
        user_input = 0;
        populateDisplay(number_one);
        if(number_one == "lmao") {
          number_one = "";
          console.log("Redo number one");
        }
        user_input = 0;
        console.log("Number 1 is now", number_one);
        number_two = "";

      }
      break;
    
    case "clear-button":
      clear_All();
      break;
  }








});










