#!usr/bin/env node

    // Constructs the readline module
const readline = require('readline').createInterface( { 
	input: process.stdin,
	output: process.stdout
});

    // Declares the variable "total" that holds the current calc total
let total = 0;

    // Declares the variable "symbol" that holds the operand the user inputs
let symbol;

    // Prints out welcome message
console.log("Welcome to Running Calc.js");

    // Runs the function that asks user to input a symbol
enterOperand()


/**
 * Takes the value inputted by the user and adds it to the total if the input is a valid number
 *
 * @param value The number to be added to the running total
 */
function addUpdateTotal(value){
    if (isNaN(value) == false) {
        total = parseFloat(total) + parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else{
        console.log("Value must be an integer!")
        operand();
    }
} 

/**
 * Takes the value inputted by the user and subtracts it from the total if the input is a valid number
 *
 * @param value The number to be subtracted from the running total
 */
function subtractUpdateTotal(value){
    if (isNaN(value) == false) {
        total = parseFloat(total) - parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else{
        console.log("Value must be an integer!")
        operand();
    }
} 

/**
 * Takes the value inputted by the user and multiplies it to the total if the input is a valid number
 *
 * @param value The number to be multiplied by the running total
 */
function multiplyUpdateTotal(value){
    if (isNaN(value) == false) {
        total = parseFloat(total) * parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else{
        console.log("Value must be an integer!")
        operand();
    }
} 

/**
 * Takes the value inputted by the user and divides it by the total if the input is a valid number
 *
 * @param value The number to be divided by the running total
 */
function divideUpdateTotal(value){
    if (value == 0) {
        console.log("Cannot divide by zero!")
        operand();
    }
    else if (isNaN(value) == false) {
        total = parseFloat(total) / parseFloat(value);
        console.log("Current Total: " + total);
        enterOperand(symbol)
    }
    else{
        console.log("Value must be an integer!")
        operand();
    }
} 

/**
 * Prompts the user to input an operand then reads input and sends it to the "operand" function to decide what to do with input
 */
function enterOperand(){
    readline.question("Enter the operation (+-*/, q to quit):", (symbol) => {operand(symbol)});
}

/**
 * Reads the input and decides what to do with it depending on the symbol inputted
 *
 * @param symbol The operand beind passed that is used to determine what operation to be used
 */
function operand(symbol) {
    if (symbol == "q") {
        console.log("Final Value: " + total)
        readline.close()
    }
    else if (symbol == "+") {
        readline.question("Enter the value: ", (value) => {addUpdateTotal(value)} );
    }
    else if (symbol == "-") {
        readline.question("Enter the value: ", (value) => {subtractUpdateTotal(value)} );
    }
    else if (symbol == "/") {
        readline.question("Enter the value: ", (value) => {divideUpdateTotal(value)} );
    }
    else if (symbol == "*") {
        readline.question("Enter the value: ", (value) => {multiplyUpdateTotal(value)} );
    }
    else {
        console.log("Must enter +, -, *, /, or q");
        enterOperand()
    }
}
