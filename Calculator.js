#!usr/bin/env node

const readline = require('readline').createInterface( { 
	input: process.stdin,
	output: process.stdout
});

let total = 0;
let symbol;


console.log("Welcome to Running Calc.js");

enterOperand()


function addUpdateTotal(value){
    
    total = parseFloat(total) + parseFloat(value);
    console.log("Current Total: " + total);
    enterOperand(symbol)
} 

function subtractUpdateTotal(value){
    
    total = parseFloat(total) - parseFloat(value);
    console.log("Current Total: " + total);
    enterOperand(symbol)
} 

function divideUpdateTotal(value){
    
    total = parseFloat(total) / parseFloat(value);
    console.log("Current Total: " + total);
    enterOperand(symbol)
} 

function multiplyUpdateTotal(value){
    
    total = parseFloat(total) * parseFloat(value);
    console.log("Current Total: " + total);
    enterOperand(symbol)
} 

function enterOperand(){
    readline.question("Enter the operation (+-*/, q to quit):", (symbol) => {operand(symbol)});
}

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
