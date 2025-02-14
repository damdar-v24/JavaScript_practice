
let index = 0

while (index < 10) {
    console.log(`Value of index: ${index}`);
    // index++ 
    // or 
    index = index + 1
}

let num = 2 
while (num <= 20) {
    console.log(`value of num: ${num}`);
    num = num +2 // num++
}

const myArray = ["Batman", "Superman", "Ironman"]
let arr = 0   // arr = 0 because index starts from zero
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1  // or arr++
    
}


// Do while Loop
let i = 1
do {
    console.log(`value is ${i}`);
    i++
} while (i <= 10)


    
    let score = 11 
    do {
        console.log(`value is ${score}`);
        score++
        console.log(score);
        
    } while (score <= 10)






/*  Notes

1. While Loop
    while loop executes the block of code as long as the given condition is true

    syntax : while (condition) {
        code to execute
    }
    
    Working : 
    > The condition is evaluted first
    > if the condition is true, the loop body exectutes
    > After executing, the condition is checked again
    > this repeats again untill the condition becomes false
    > if the condition is false intially the loop will not executed even once


2. Do_While Loop
    the Do-while loop is similar to the while loop, but it ensures that the loop body runs at least once, regardless of the condition.

Syntax: do {
         // code to execute
        } while (condition);

working:
    > The loop body executes first 
    > After execution, the condition is checked
    > if the condtion is true, the loop runs again.
    >This repeats untill the condition becomes false.


When to Use : 

    > Use while loop when you want to execute the loop only if the condtion is met

    > Use do-while loop when you need to guarantee at least one execution

*/
