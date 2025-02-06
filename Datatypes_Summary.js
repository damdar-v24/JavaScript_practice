

const score = 100;
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);  // false

// When you declare the variable with symbol datatype to make them unique and even you assign the same value to the both variable but when you compare them by using comparison operator it shows false, that they are not same.

const bigNumber =1111111111112n



// non Primitive datatypes

 // Arrays, Object, functions

// Example of Array

 const heros = ["Vaibhav", "Vikram", "Sarthak","Shreyash"];

// Example of Object

let object = {
    name : "Vaibhav",
    age : 25
 }

// Example of Function
// we can treat the function as variable / can store into the variable

let myfunction =function () {
    console.log("Hello World !")
    }

// we can check the datatype of variable by using typeof

console.log(typeof outsideTemp);
console.log(typeof bigNumber);





/* *************** Notes *************** */ 

/* 
    In javaScript, datatypes are catagorized based on how they store and access/manipulated that data.

    The classification is mainly into Primitive and Non-Primitive Types


    ********* 1.Primitive Datatype (immutable and store by value) *********
    
    these types store the values directly in memory and are immutable (cannot changed once created)

    7 datatypes are => Number, Bigint, String, Boolean, null, Undefined, Symbol, etc.

    The datatypes are called by value.

    when primitive daatatypes are passed to a fuction , only copy of the value is passed.

    And whenever you make changes inside the functions, it do not affects the original variable.

    ex. 

---------------------------------------------------------------------------------------------------------------------------------------------------
    
    ********* 2. Non-Primitive / Reference Datatype (mutable,Stored by reference) *********

    ex. Arrays, Object, functions

    When objects and arrays are passed to the function, their reference (memory address) is passed, not the actual value

    changes inside the function affect the original object/array.

---------------------------------------------------------------------------------------------------------------------------------------------------

    JavaScript is considered a dynamically typed language, meaning that the type of a variable is determined at runtime based on the value assigned 
    to it, and you don't need to explicitly declare the variable type beforehand; unlike statically typed languages where types are checked during 
    compilation. 

   #  Key points about JavaScript's dynamic typing:
   
   1. No type declaration: When declaring a variable, you don't need to specify its data type. 
   2. Runtime type checking: The type of a variable is checked only when the code is running. 
   3. Flexibility: This allows for quick development and flexibility, but can also lead to potential runtime errors if incorrect types are used. 



When we check the datatype of variable using Typeof operator the	Results are as follows:

                    Undefined            =>	            undefined
                    Null                 =>	            object
                    Boolean              =>	            boolean
                    Number               =>	            number
                    BigInt               =>	            bigint
                    String               =>	            string
                    Symbol               =>	            symbol
                    Function             =>	            function
                    Any other object     =>	            object

 */ 