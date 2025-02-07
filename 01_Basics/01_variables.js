const accountId = 123456      // 
let accountEmail = "vd23@gmail.com"
var accountPassword = "123456"
accountCity = "Pune"   

let accountState; 

// accountId = 2   // not allowed

accountEmail = "vd23@gmail.com"
accountPassword = "123456"
acountCity = "Pune"

console.table([accountId, accountEmail, accountPassword, accountCity]);


//************* Notes ************** 

/*  
accountId = 2  If we try to change the value of variable which we declare const then it will gives an error i.e. TypeError: Assignment to constant variable. 

We cannot change the value of variable after declaring the variable with const

 Console.log() is used to print values on console / shows output on the console

 Console.table() is used to print the output/values in the form of table

 we can declare the variable without assigning the value, JavaScript will gives an output as "undefined".

 we can declare the variable without datatype but this is not a good practice 


 Qu. why we use let over Var ?

 because let has block scope (only accessible within the block where its defined) and prevents hoisting issues and accidentel re-declarations, making the code more predictable and less error prone.
 
 we can access var outside the block scope and this will create an issues when multiple programmer is working on the same program. Ex. If we deaclre a varible with var and other programmer also declare the variable with the same name and datatype in that case eventually the value of variable which declared 1st will changes automatically so to prevent this re-declaration issues we use let over Var 
 */