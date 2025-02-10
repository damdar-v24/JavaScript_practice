
// Declaring object as Literal

const myObj = {
    name :"Vaibhav",
    age : 25 ,
    city : "Pune",
    email : "damdarv@chatgpt.com"
}

// we can access the valuess of this object by two ways

// console.log(myObj.name); 

// console.log(myObj["name"]);  

// Qu. Define a symbol, make it act as a key, and print the value associated with the symbol

// Defining Symbol
const mySymbol = Symbol('description');

const mySym = {
  name : "Vaibhav",
  [mySymbol] : 'Another value',
  email : "vd@chatgpt.com"
};

console.log(mySym["name"]);

mySym.email = "vd@google.com"


// Object.freeze(mySym); // used to freeze the value of object

mySym.email = "vd@123.com"


console.log(mySym["email"]);

// declaring function 

mySym.greeting = function(){
    console.log(`Hello Vaibhav, Here is your email : ${this.email}`);
}

console.log(mySym.greeting());

