let value = 3
let nrgValue= -value
console.log(nrgValue);

console.log("------------------------------");

// ******* Basic Arithmatic Operations *********

console.log(2+2);  // addition
console.log(4-2);  // subtraction
console.log(3*2);  // multipliction
console.log(7/2);  // Division
console.log(9%2);  // gives remainder

console.log("------------------------------");

// ******* Addition of String *********

let str1 = "Hello"
let str2 = " Vaibhav !"

let str3 = str1 + str2 

console.log(str3);  // Hello Vaibhav

// ******* Addition of String with different datatypes *********

console.log("1" + 2); 
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2); 
console.log(2 + 2 + "1");

console.log("--------------------------------------");



// Postfix increment

let n = 3;
const m = n++;

console.log(" n : "+ n +" "+" m : "+ m);            // n is 4; m is 3

console.log("--------------------------------------");

let a = 3;
const b = a++;
console.log(" a : "+ a +" "+" b : "+ b);            // a is 4; b is 3

console.log("--------------------------------------");

// Prefix increment

let x = 3;
const y = ++x;
console.log(" x : "+ x +" "+" y : "+ y);            // x is 4; y is 4

console.log("--------------------------------------");

let x2 = 3;
const y2 = ++x2;
console.log(" x2 : "+ x2 +" "+" y2 : "+ y2);        // x2 is 4; y2 is 4

console.log("--------------------------------------");

//  Postfix decrement

let p = 3;
const q = x--;
console.log(" p : "+ p +" "+" q : "+ q);             // x is 2; y is 3

console.log("--------------------------------------");

let p2 = 3n;
const q2 = x2--;
console.log(" p2 : "+ p2 +" "+" q2 : "+ q2);        // x2 is 2n; y2 is 3n

console.log("--------------------------------------");

//Prefix decrement


let c = 3;
const d = --x;
console.log(" c : "+ c +" "+" d : "+ d);            // x is 2; y = 2

console.log("--------------------------------------");

let c2 = 3n;
const d2 = --x2;
console.log(" c2 : "+ c2 +" "+" d2 : "+ d2);        // x2 is 2n; y2 is 2n

console.log("--------------------------------------");



/* ********** Notes ***********/

/*
    console.log("1" + 2 + 2);

    in the above expression, The first value is string and when ( + ) operator used with a string it performs String concatination.

    hence result => 122

-----------------------------------------------------

    console.log(2 + 2 + "1");
    in the above expression 1 + 2 is both are number hence + performs addition and gives output as 4
    
    then 4 + " 1 "

    here 1 is a string so + operator performs string concatination 
    hence output is => 41

-----------------------------------------------------

    JavaScripts evelutes the expression from left to right and " + " behaves differently based on the operand typs.

    1. If any operand is a string, then " + " performs string concatination

    2. If both operands are number, then " + " performs addition

    
    /*********** Increment operator ***********/

    /* If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

    If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing. */

    /*********** Decrement Opeartor ***********/

    /* If used postfix, with operator after operand (for example, x--), the decrement operator decrements and returns the value before decrementing.

    If used prefix, with operator before operand (for example, --x), the decrement operator decrements and returns the value after decrementing.
*/