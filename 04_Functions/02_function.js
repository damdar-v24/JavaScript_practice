
// Fuction Declaration

function sayMyName () {  // function definition
    console.log("Hello Vaibhav"); 
}

sayMyName();  // Calling function

function addTwoNumbers (number1, number2){ 

result = number1 + number2
return number3

//            or

    return number1 + number2
}
const result = addTwoNumbers(3, 5); //
console.log(result);



function loginUserMessage (username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Vaibhav"));

// If user not enterd his name or empty string then

console.log(loginUserMessage(""));  // output will be  "just logged in"

// If user doesn't pass any value then

console.log(loginUserMessage()); // ==> output will be "undefined just logged in"


//                or 


function user (username) {         // if user did not entered any username then output will be please enter a username
    if (username === undefined){ // here is the condition to check the entered value is equal to undefined or not if yes it will enter the if block
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}
 console.log(user());


//                or


function user (username) {
    if (!username){                // here we use ! operator to coonvert boolean value true ==> false, false ==> true
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(user("Vaibhav"));

//                or 

function user (username = "Mr. VD") {    // here we pass the default value, if user not entered any value then default value get printed
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(user("Vaibhav"));







/* Function Notes  */

/*
1. Parameters definition ==>

when we pass the values in the definition of the function its known as parameter 
or
parameters are the variables listed in the function definition

2. Arguments Definition ==>

when we pass the value while calling the function known as arguments
or
Argumentd are the actual values passed to a function when it is invoked

3. In fuction after return statement fuction will not get executed anything.

In JavaScript empty string and undefined = false value

! operator is used to convert the boolean value means if true ==> false,  false ==> true

function user (username = "Mr. VD") { 
==> here we pass the default value that means the username will never be = undefined

if user will enter empty string then default value Mr.VD will get printed 

and

if user will enter the value then default value get overrided

*/
