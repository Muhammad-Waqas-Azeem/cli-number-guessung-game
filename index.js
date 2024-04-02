#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.round(Math.random() * 10);
let userNumber;
do {
    userNumber = await inquirer.prompt([{ message: "Enter Your Guess B/W 1-100", type: "number", name: "userNum" }]);
    if (userNumber.userNum > randomNumber) {
        console.log("Lower Number Please");
    }
    else if (userNumber.userNum < randomNumber) {
        console.log("Greater Number Please");
    }
    else if (userNumber.userNum == randomNumber) {
        console.log("Great You Won");
    }
    else {
        console.log("invalid choice");
    }
} while (userNumber.userNum !== randomNumber);
