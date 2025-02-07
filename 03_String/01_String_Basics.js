
const gameName = new String ("Vaibhav")

const name = "Vaibhav"

const repoCount = 50

console.log(name + repoCount);   // not preferd

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // prefered way


/* *********** Methods Of String *********** */

console.log(typeof gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(6)); // to get the char at given index

console.log(gameName.indexOf('b'));

console.log(gameName.substring(0,5));


const newString = gameName.indexOf('b'); // to get the index no of given char
console.log(newString);

const string1 = gameName.substring(0,6); 
console.log(string1);

const string2 = gameName.slice(1,6); // to slice/get the string character between given index
console.log(string2);

const newString1 = "   Vaibhav   "
console.log(newString1);
console.log(newString1.trim());  // trim removes extra white spaces from the string

const rep = "Vaibhav"

console.log(rep.replace('v','o')); // to replace char in string

console.log(rep.includes('p'));  // to check whether given char is present in string or not

const vd = new String("Vaibhav is the best in all department");

console.log(vd.split(" "));  // used to split string on certain basis(can be anything). In abve we split string on the basis of spaces between string








/* ************* Notes ************* */
/*

We can declare string in following two ways 

1. const gameName = new String ("Vaibhav")

2. const name = "Vaibhav"


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   
this is the modern / preferd way to write syntax using string interpolation. we can use method with string in on the flow ex. console.log(`Hello myname is ${name.toUppercase} and my repo count is {repoCount}`);

*/