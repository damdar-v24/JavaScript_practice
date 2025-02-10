
// Declaring symbol

const symbol = Symbol("key1")

const obj = {
    name : "Vaibhav",
    "full name" : "Vaibhav damdar",
    age : 25,
    email : "vd@gmail.com",
    city : "pune",
    [symbol] : "mykey1" // using symbol as key in object
}

// console.log(obj.name);
// console.log(obj["full name"]);
// console.log(obj[symbol]); // accessing the value of symbol


// we can update the values of the object

// obj.email = "vd1@gmail.com"

// Object.freeze(obj);  // freezing the object so that values of the object can't be change once intialized

// obj.email = "vd2@gmail.com"

// console.log(obj.email);


// Declaring Function

obj.post = function(){

    console.log(`hello ${this.name}`) // to refer the same object we use this keyword

    // ${} ==> string interpolation
}

// console.log(obj.post);  // returns the reference of the function , function is not executed

console.log(obj.post()); // to access the function
