#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select operator to perform calculation",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    }
]);
// CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumer);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber - answer.secondNumer);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber - answer.secondNumer);
}
else {
    "Please Select Correct Operator";
}
