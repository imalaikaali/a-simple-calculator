//A simple calculator using TypeScript, Node.js and Inquirer

//!#/user/bin/env node
//SHABANG

import inquirer from "inquirer";

const answer: any = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select an operator to perform an operation",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Exponenetiation",
      "Modulus",
    ],
  },
]);

//Conditional statement
if (answer.operator === "Addition") {
  console.log("The answer is", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log("The answer is", answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log("The answer is", answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("The answer is", answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Exponenetiation") {
  console.log("The answer is", answer.firstNumber ** answer.secondNumber);
} else if (answer.operator === "Modulus") {
  console.log("The answer is", answer.firstNumber % answer.secondNumber);
} else {
  console.log("Invalid Operator selected. Try again.");
}
