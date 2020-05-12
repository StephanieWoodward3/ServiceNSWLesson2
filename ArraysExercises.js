//Write a console app that takes strings from the user and adds them to an array

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
    let students = []
    for(i=0; i < 2; i++) {
        let newStudent = await askQuestion("What is the students name?: ");
        students.push(newStudent);
        }
    for(i=0; i < 2; i++) {
        console.log(students[i]);
        }

}


Program().then(() => {
    process.exit(0);
});
