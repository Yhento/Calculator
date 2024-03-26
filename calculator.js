const add = (num1, num2) => {

  return num1 + num2;

}

const subtract = (num1, num2) => {

  return num1 - num2;

}

const multiply = (num1, num2) => {

  return num1 * num2;

}

const divide = (num1, num2) => {

  return num1 / num2;

}

let number_one = 0;
let number_two = 0;
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

console.log(operate("multiply", 5, 5));