#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", name: "first_number", type: "number" },
    { message: "Enter second number", name: "second_number", type: "number" },
    {
        message: "Select one of the following operator to perform operation.",
        name: "operator",
        type: "list",
        choices: ["+", "-", "*", "/"], //select one from this list.
    },
]);
// Conditional statements
if (answer.operator === "+") {
    console.log(`Your value is ${answer.first_number + answer.second_number}`);
}
else if (answer.operator === "-") {
    console.log(`Your value is ${answer.first_number - answer.second_number}`);
}
else if (answer.operator === "*") {
    console.log(`Your value is ${answer.first_number * answer.second_number}`);
}
else if (answer.operator === "/") {
    console.log(`Your value is ${answer.first_number / answer.second_number}`);
}
else {
    console.log(`Some error occured.`);
}
;
