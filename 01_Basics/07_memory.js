
let myYoutubename = "hiteshchoudhary.com"
 
 let anotherName = "myYoutubename"
 
 anotherName = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anotherName);

 console.log("-------------------------------------------------------------------------------------");

 let userOne = {
    email : "vd@gmail.com",
    upi : "user@ybl"
    }

    let userTwo = userOne

    userTwo = userOne

    userTwo.email = "vd24@gmail.com"

    console.log(userOne);
    console.log(userTwo);







/* ****************** Notes ****************** */

/*
Memory management in JavaScript involves allocation, usage, and garbage collection. Since JavaScript is a high-level language with automatic memory management, developers don’t need to manually allocate or free memory, but understanding how it works can help optimize performance.

1. Types of Memory in JavaScript

JavaScript primarily uses two types of memory:

1. Stack Memory  (Primitive types & function calls)

2. Heap Memory (Objects, arrays, and closures)


1. Stack Memory

Stores primitives datatypes (numbers, strings, booleans, etc.).

Operates in a Last In, First Out (LIFO) manner.

Local variables are stored here.

Once the function completes, the variables are removed from memory.


2. Heap Memory

Stores reference types (objects, arrays, functions).

Memory allocation happens dynamically.

Objects remain in heap memory until they are no longer referenced / used.


2. Memory Allocation

JavaScript automatically allocates memory when:

Variables are declared (let, const, var).

Objects and arrays are created ({}, []).

Functions are defined.

*/
