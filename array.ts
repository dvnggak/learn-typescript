// THERE IS TWO WAY FOR US TO DECLARING ARRAY
    // FIRST WAY IS SIMILIAR WITH OTHER DATA TYPE DECLARATION
let names : string [] = ["Dev", "Angga", "Kertawijaya"];
    // SECOND WAY IS DIFFERENT WITH THE FIRST ONE, CAUSE WE NEED TO SET ARRAY SYNTAX INSIDE THE NUMBERS VARIABLE
    // IN THIS WAY WE CAN BE MORE CLEAR FOR WHAT IS THE DATA TYPE
let numbers : Array<number> = [1,2,3,4,5,];


// WE CAN ALSO HAVE AN ARRAY THAT CONTAINS DIFFERENT DATA TYPE 
// THAT WE CALLED TUPLE , AN ARRAY THAT CONTAINS VARIETIES OF VARIEBLE IN ONE ARRAY
    // FOR EXAMPLE
let student : [string, string, number] = ["Dev", "Angga", 20];
    // from student variable, we can see that it have 2 string and 1 number of data type
    // for that we need to set the value base on the data type we make.

// PRINT THE DATA OF ARRAY AND TUPLE
    // ARRAY AND TUPLE HAVE THE SAME WAY TO CALL THE VALUE BY LOGING THE ARRAY VARIABLE AND THE INDEX OF THE VALUE WE NEED
// console.log(names[0]);
// console.log(names[1]);
// console.log(numbers[4]);
// console.log(student[2]);

// WE CAN CHANGE THE VALUE OF INDEX WE WANT TO CHANGE INSIDE AN ARRAY 
// WITH RE-INITIALITATIONS THE VALUE
// for example
names[0] = "Devangga";
names[1] = "Dev";
numbers[4] = 0;
student[1] = "Devangga"; 

// console.log(names[0]);
// console.log(names[1]);
// console.log(numbers[4]);
// console.log(student[1]);

// WE CAN ADDING NEW DATA TO AN ARRAY BY typing ==> variablesName.push();

let namesTwice : Array<string> = [];
namesTwice.push("Dev");
namesTwice.push("Angga");
namesTwice.push("Kertawijaya");

console.log(namesTwice);

// AND WE CNA ALSO DELETING DATA OF AN ARRAY AND TUPLE WITH TYPING ==> delete variablesName [i];
delete namesTwice [0];
delete namesTwice [2];

delete student [0];

console.log(namesTwice);
console.log(student);
