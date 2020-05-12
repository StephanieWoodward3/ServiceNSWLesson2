//Write a console app that counts the number of times an element appears in an array.

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


async function Program(){
    // Your Code Goes Here...
    let students = ["Dave","Christine","Haley","Dave","Dave", "Dave", "Haley"];
    students.sort();
    let current = null;
    let count = 0;
    for(i = 0; i < students.length; i++) {
        if(students[i] != current) {
            if (count > 0) {
                console.log (`${current} appears ${count} times`);
            }
            current = students[i];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0){
        console.log(`${current} appears ${count} times`)
    }

}


Program().then(() => {
    process.exit(0);
});
