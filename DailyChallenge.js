//Write a console app that takes strings from the user and adds them to an array until the user enters a duplicate entry.
// Then stop accepting user input and print each element in the array to the console.

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
    i = 0;
    let current = null;

    while(i >= 0) {
        let newStudent = await askQuestion("What is the students name?: "); // takes in endless data from the user
        students.sort(); //sorts the data in the array


        if(students.includes(newStudent, 0)) { //checks to see if this position in the array matches the value stored in current. if the value does not match (making it true) then continue
            console.log("This is a duplicate value");
            break;
        } else {
            students.push(newStudent);
        }
        }
    for(i=0; i < students.length; i++) {
        console.log(students[i]);           
     }
    }


Program().then(() => {
    process.exit(0);
});
