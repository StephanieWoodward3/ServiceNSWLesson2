//For Loop
for(let i = 0; i <5; i+= 1) { //1st itirator (starting point), 2nd condition (the rules for continuing the loop), update itirator
    console.log(i);
}

let students = ["Dave","Christine","Haley"];
//students.length is how many values in the array (students.length = 3 in this case)
for(let i = 0; i < students.length; i+= 1){ //lists the member of the array in order
    console.log(students[i]);
}

for(let i = students.length -1; i <= 0; i--){ //uing decrementor
    console.log(students[i]);
}

//post increment i++
//access the variable and after using it sets the value to be 1 higher
let myNumber = 10;
console.log(myNumber++);

//Pre increment ++i
//Sets the value of the vauirabel to be 1 higher and then accesses the variable
let myNumber = 10;
console.log(++myNumber);

//post decrement
//Access the variable and after using it sets the value to be 1 less
let myNumber = 10;
console.log(myNumber--);
console.log(myNumber);


//While Loop
let i = 0;
while(i <5){
    console.log(i);
    i++;
}

let students = ["Dave","Christine","Haley"];
let i = 0;
while(students[i]) {
    console.log(students[i]);
    i++;
}

for(let i = 0; i <5; i+= 1){
    if (i == 2){ //if this statement is true, continue on with the rest of the code
        continue;
    }
    console.log(i);
}

let i = 0;
while(i <5){
    if (i == 2) {
        i++
        continue;
    }
    console.log(i);
    i++
}