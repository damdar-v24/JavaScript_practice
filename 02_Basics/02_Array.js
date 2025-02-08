
const marvel_heros = [ "Throe", "Ironman", "Captain_America"]

const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) 

console.log(marvel_heros); // output ==> output ==> ["Thor", "Ironman" ,"Captain_America",["superman", "flash"]] 

console.log(marvel_heros[3][0]);  // output ==> "flash"  /* to access nested array element */


/* ************* we can concat two arrays by using concat() method **************/

const allheros = marvel_heros.concat(dc_heros)

console.log(allheros); // output ===> [ 'Throe', 'Ironman', 'Captain_America', 'superman', 'flash' ]

/* or by using spread operator */

const all_heros = [...marvel_heros, ...dc_heros]

console.log(all_heros);  // output ==> ["Thor", "Ironman" ,"Captain_America","superman", "flash", "batman"]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) /* Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. */

console.log(real_another_array);  // output ===> ["Thor", "Ironman" ,"Captain_America","superman", "flash", "batman"]
 

console.log(Array.isArray("Vaibhav")); // to check whether it array or not

console.log(Array.from("Vaibhav"));  // to convert all values which we passed in the parenthesis into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // array.of() => used to convert set of elements into array and returns new array
