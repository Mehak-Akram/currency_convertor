#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBD: 0.76,
    INR: 74.57,
    PKR: 280,
    UAE: 3.67,
    JYP: 113,
};
let user_answer = await inquirer.prompt([{ name: "from", message: "enter from currency", type: "list", choices: ["USD", "EUR", "GBD", "INR", "PKR", "UAE", "JYP"] },
    { name: "to", message: "enter To currency", type: "list", choices: ["USD", "EUR", "GBD", "INR", "PKR", "UAE", "JYP"] },
    { name: "amount", message: "enter your amount", type: "number" }]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(chalk.green(Math.round(convertAmount)));
