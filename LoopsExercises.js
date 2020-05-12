// Write a console app that writes the numbers from 1 to 7 to the console
// Write a console app that writes even numbers from 2 to 8 (inclusive) to the console (hint, you will need to not use the increment operator)
// Write a console app that prints the elements of an array in reverse.
// Write a console app that prints the elements of an array that begin with the letter a (hint, a string is an array 
    //of characters so you can access the first character the same way you would access the first element in an array)


for(let i = 1; i <=7; i++) { //Writes the numbers 1 to 7 in the console
    console.log(i);
}

for(let i = 2; i <= 8; i+= 2) { //Writes the even numbers from 2 to 8
    console.log(i);
}

// Prints the elements of an array in reverse
let students = ["Dave","Christine","Haley","Andrew", "Alex"];
let i = students.length - 1;
while(i >= 0){
    console.log(students[i]);
    i--;
}

// Prints the elements of an array that begin with the letter a
let letter = "A"
for(i = 0; i <= students.length; i++){
    if (students[i].indexOf(letter) == 0) { //Is the letter you are looking for in position 0 of the name array
        console.log(`Student ${students[i]} starts with A`);
    }
    //     continue;
    // } else {
    //     continue;
    //     //console.log("There are no students starting with the letter A");
    //     //     continue;
    //     // }
    // }
    // console.log("There are no students starting with the letter A");
}