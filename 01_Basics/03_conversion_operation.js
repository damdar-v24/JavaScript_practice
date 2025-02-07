
// ******* to Convert into Number *********

 let score = 33  

 let score1 = "33" 

 let score2 = "33abc" 

 let score3 = null  

 let score4 = undefined  

 let score5 = true  

console.log(typeof score); 

console.log(typeof (score)); 

let valueInNumber = Number(score) 

console.log(typeof valueInNumber)

console.log(valueInNumber) 

/*        results after conversion

"33"      => 33
"33abc"   => NaN (Not a Number)
true      => 1, false => 0
"vaibhav" => NaN ( we can not convert the some  
             string into number like "Vaibhav", "123abc", etc)
null      => 0
undefined => NaN */


// ******* to Convert into Boolean *********

let isLoggedIn1 = 1    

let isLoggedIn2 = ""

let isLoggedIn = "Vaibhav"

let isBooleanLoggedIn = Boolean(isLoggedIn)
console.log(isBooleanLoggedIn);

/*     results after conversion

    1    => true    
    0    => false
    ""   => false
    "Vaibhav" => true
 */

//******** to convert into string *********

let someNumber = 24

let stringNumber = String(someNumber)

console.log(stringNumber);

console.log(typeof stringNumber);






/* 

********** Notes *********

we can check the datatype of varible by two ways
1. typeof variable_name
2. typeof (variable_name) as method 

let valueInNumber = Number(score) => is used to convert other datatype to number 


console.log(valueInNumber) => to check value of valueInNumber after conversion

let score = "33abc" => this string should not convert to a number but in js this is a problem with conversion. So after converting this string into number it gives ( NaN = Not a Number)


/* 
we can convert any value of any datatype into number  by using => Number(variable_name)   

we can convert any value of any datatype into string  by using => String(variable_name)   

we can convert any value of any datatype into boolean  by using => Boolean(variable_name)   

*/
