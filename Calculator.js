#!usr/bin/env node
const readline = require('readline');
const rl = require('readline').createInterface( { 
	input: process.stdin,
	output: process.stdout
});

let input, total = 0;

console.log("Welcome to Running Calc.js");



console.log("Current Total: " + total);


function calculator(input, total){
    rl.question('Enter operation: (+-*/, q to quit)',
    (operation) => { console.log('Enter Value: ')});

    rl.close();
    
    rl.question('Enter Value: ', input => calc(input, operation));
    console.log('Current total: ', total);
}

// function op(operation){
//     console.log(operation);
// }

function calc(input, operation, total){
    if(operation == 'q'){
        readline.close();
    }
    else if(operation == '+'){
        total = total + input;
        input = 0;
    }
    else if(operation == '-'){
        total = total - input;
        input = 0;
    }
    else if(operation == '*'){
        total = total * input;
        input = 0;
    }
    else if(operation == '/'){
        total = total / input;
        input = 0;
    }
    calculator(input,total);
}

calculator(input, total)


/* const readline = require('readline').createInterface( { 
	input: process.stdin,
	output: process.stdout
});

readline.question("Enter the operation:", (total) => { console.log("work please")});
 */
