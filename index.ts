#! /usr/bin/env node
//The above line defines this whenever this code will run it will run on node. 
//SHABANG : the above line is called SHABANG . used to publish your ts file or ts project on npm which can be used by whole world then.

// "." represents your current directory .
import inquirer from "inquirer";


const answer = await inquirer.prompt([
    { message: "Enter first number", name: "first_number", type: "number" },
    { message: "Enter second number", name: "second_number", type: "number" },
    {  
      message: "Select one of the following operator to perform operation.",
      name: "operator",
      type: "list",
      choices: ["+", "-", "*", "/"],//select one from this list.
    },
  ]);
  
  // Conditional statements
  if (answer.operator === "+") {
    console.log(`Your value is ${answer.first_number + answer.second_number}`);
  }
  else if(answer.operator==="-"){
      console.log(`Your value is ${answer.first_number-answer.second_number}`);
  }
  else if(answer.operator==="*"){
      console.log(`Your value is ${answer.first_number*answer.second_number}`);
  
  }
  else if(answer.operator==="/") {
      console.log(`Your value is ${answer.first_number/answer.second_number}`);
  
  }
  else{
      console.log(`Some error occured.`);
  };