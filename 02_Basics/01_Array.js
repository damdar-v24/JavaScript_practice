
// Array

// Array Declaration

// const myArray = [1,2,3,4,5]

let arr = ['apple', 'banana', 'cherry']; 



let numbers = new Array(1, 2, 3, 4);  // console.log(numbers[0]);  // 1


let emptyArray = new Array(5);  // console.log(emptyArray[1]);   // undefined


let colors = Array.of('red', 'green', 'blue');  // console.log(colors[1]);  // green



let str = 'hello';
let letters = Array.from(str);  // ['h', 'e', 'l', 'l', 'o']   console.log(letters[1]);   // e


/* Array Methods */

const myArray = [0,1,2,3,4]

myArray.push(6)
myArray.push(7) 

myArray.pop()  

myArray.unshift(9) 

myArray.shift()  

// console.log(myArray.includes(2)); 

// console.log(myArray.indexOf(5)); 

//console.log(myArray);

const newArray = myArray.join()  

// console.log(newArray);
// console.log(typeof newArray);


// Slice and Splice method

console.log("Original :", myArray);

const myn1 = myArray.slice(1, 3)

console.log("Slice :", myn1);

console.log("Original :", myArray);

const myn2 = myArray.splice(1, 3)

console.log("Original :", myArray);
console.log("Splice :", myn2);










// Example of Shallow Copy

const originalObject = { name: "Alice", details: { age: 25 } };

const shallowCopy = { ...originalObject };

shallowCopy.details.age = 30;  // This changes the inner object, affecting both

// console.log(originalObject.details.age); // 30
// console.log(shallowCopy.details.age); // 30

// In this example, both originalObject and shallowCopy share the same reference to the details object, so modifying details in one affects the other
