const user = {
    username : "vaibhav",
    price : 899,

    welcomeMessage : function () {
        console.log(`${this.username} , Welcome to the website`);    // here this keyword is used to refer current coontext

        // console.log(this);  // here we use this keyword to see the current context
        
    }

}
// user.welcomeMessage()   // this will print the message with above context

// user.username = "sam"    // here we change the context (value) hence

// user.welcomeMessage() // this will print the message with new value

// console.log(this);  // we use this keyword here to see the current context after changing the context


// in node environment We can not use this keyword in function, it will work with object only

const chai = function () {
    let username = "vaibhav"
    console.log(this.username);   // output will be undefined
}
// chai()


/* +++++++++++++ Arrow Function +++++++++++++ */

// Declaration ==>  () => {}

    // we can hold the arrow function in variable  ex: const arrow = () =>

const coffee =  () => {
    let username = "vaibhav"
    console.log(this.username); // output will be undefined
    

    console.log(this);  // output will be empty {}  
}

// coffee()  


const addTwo = (num1, num2) => {
    return num1 + num2  // if we wrap the value in {} then we have to write return keyword
}
console.log(addTwo(3, 4));

 const addthree =(num1, num2, num3) => num1 + num2 + num3 // if we declare arrow function without {} then we do not required to write return keyword

 console.log(addthree(1, 2, 3));
 

 const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)   // if we wrap the value in paranthesis then we don't have to write the return keyword explicitly

 console.log(addFour(1, 2, 3, 4));


 // const addObj = (num) => {name : "Vaibhav"} 
 
// the above line will gives an error  because If we want to return the object then we have to wrap the object into parenthesis ()

const addObj = (num) => ({name : "Vaibhav"})

