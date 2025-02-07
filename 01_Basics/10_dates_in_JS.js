
// Dates


let myDate = new Date()
console.log(myDate);
console.log(typeof myDate); // object

console.log(myDate.toString());
// output => Fri Feb 07 2025 10:54:20 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
// output => Fri Feb 07 2025

console.log(myDate.toLocaleString())
// output => 2/7/2025, 10:54:20 AM

console.log(myDate.toISOString());
// output => 2025-02-07T10:59:10.600Z

console.log(myDate.toJSON());
// output => 2025-02-07T10:56:19.882Z

let myCreatedDate = new Date(2023,0,14) // When you pass the dates in array the month will start from 0 as janeury
console.log(myCreatedDate.toDateString());     // output=> Sat Jan 14 2023

let myCreatedDate2 = new Date(2023,0,31,5,3)
console.log(myCreatedDate2.toLocaleString());   // output=> 1/31/2023, 5:03:00 AM

let myCreatedDate1 = new Date("01-14-2023");
console.log(myCreatedDate1.toLocaleString());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getFullYear());


