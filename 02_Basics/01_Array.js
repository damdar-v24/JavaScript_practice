
// Array

// Array Declaration

let arr = ['apple', 'banana', 'cherry']; //You can use square brackets [] to create an array and define its elements directly.

let numbers = new Array(1, 2, 3, 4); // You can also create an array using the Array constructor

let emptyArray = new Array(5);  //  if you pass only one argument, it creates an array with that many empty slots:

let colors = Array.of('red', 'green', 'blue'); // This method creates a new array with a variable number of elements passed as arguments.

let str = 'hello';
let letters = Array.from(str);  // ['h', 'e', 'l', 'l', 'o']
// Array.from() : This method creates a new array from an array-like or iterable object (like strings or sets)


// Example of Shallow Copy

const originalObject = { name: "Alice", details: { age: 25 } };
const shallowCopy = { ...originalObject };

shallowCopy.details.age = 30;  // This changes the inner object, affecting both

console.log(originalObject.details.age); // 30
console.log(shallowCopy.details.age); // 30

// In this example, both originalObject and shallowCopy share the same reference to the details object, so modifying details in one affects the other












/* *************** Notes *************** */

/* 
In JavaScript, you can declare an array in a few different ways. Here are the most common methods:

1. let arr = ['apple', 'banana', 'cherry'];
2. let numbers = new Array(1, 2, 3, 4);
3. let numbers = new Array(1, 2, 3, 4);
or let emptyArray = new Array(5);  // Creates an array with 5 empty slots
4. let colors = Array.of('red', 'green', 'blue');
5. let str = 'hello';
let letters = Array.from(str);  // ['h', 'e', 'l', 'l', 'o']


The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

JavaScript arrays are resizable and can contain a mix of different data types.

JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

Shallow Copies : a shallow copy means that when you make a copy of an object, the new copy still points to the same things inside the original object. So, if you change something in the original object, it might also change in the copy because they share the same data.

You can use Object.assign() or the spread operator (...) to create a shallow copy of an object.

You can use the slice() method, Array.from(), or the spread operator (...) to create a shallow copy of an array.

2.Deep Copies : a deep copy means creating a completely independent copy of an object. Unlike a shallow copy, the properties in the deep copy don’t share the same data as the original object. So, if you change something in the original object, it won’t affect the copy, and vice versa. Each object has its own set of data, including any nested objects inside it.



*/
