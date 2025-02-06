/************ Comparison of two values having same datatypes ************/

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 != 1);

/************ Comparison of two values having Different datatypes ************/

// This will lead to a unpredictable output/result

console.log("2" > 1);
console.log("2" < 1);

// in the above condition JavaScript convert the string into number and then it compares both values


console.log(null > 0);
console.log(null == 0);
console.log(null < 0);
console.log(null >= 0);





/******************* Notes ********************/

/* in the above conditions the output will lead to the unpredictable beacause an equality check == and comparisons > < >= <= work differently.

comparisons (==) convert null to a number and treating it as 0.
hence null >= 0 is true and null > 0 is false.

that's why we don't prefer this type of comparisons

(==) comparison => used for loose equality 
compare values but convert datatypes if they have different datatypes

(===) equality check => Used for strict equality
compares both value and its datatype without type conversion
*/
