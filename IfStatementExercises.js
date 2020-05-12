// Write a console app that takes 2 numbers entered by the user and prints the larger number to the console
// Write a console app that takes 2 numbers entered by the user and prints them to the console in order from largest to smallest
// Same as 2 but from smallest to largest.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){ //takes 2 numbers entered by user and prints out the larger of the 2

let userInput1 = await askQuestion("Enter the first number: ");
let numberOne = parseInt(userInput1);
let userInput2 = await askQuestion("Enter the second number: ");
let numberTwo = parseInt(userInput2)
if(numberOne > numberTwo){
    console.log(`The biggest number entered is ${numberOne}`)
}else []
    console.log(`The biggest number entered is ${numberTwo}`)
}

async function Program(){ //takes 2 numbers entered by user and prints them out smallest to largest

    let userInput1 = await askQuestion("Enter the first number: ");
    let numberOne = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let numberTwo = parseInt(userInput2)
    if(numberOne > numberTwo){
        console.log(`The numbers in order from smallest to largest are ${numberTwo} and then ${numberOne}`)
    }else{
        console.log(`The numbers in order from smallest to largest are ${numberOne} and then ${numberTwo}`)
    }
}

async function Program(){ //takes 2 numbers entered by user and prints them out largest to smallest

    let userInput1 = await askQuestion("Enter the first number: ");
    let numberOne = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let numberTwo = parseInt(userInput2)
    if(numberOne < numberTwo){
        console.log(`The numbers in order from largest to smallest are ${numberTwo} and then ${numberOne}`)
    }else{
        console.log(`The numbers in order from largest to smallest are ${numberOne} and then ${numberTwo}`)
    }
}


Program().then(() => {
    process.exit(0);
});