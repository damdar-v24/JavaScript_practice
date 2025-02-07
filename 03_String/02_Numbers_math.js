 const score = 100
 console.log(score);  // This simply declares a constant variable score with the value 100 and then prints it to the console.

 const balance = new Number (400);
 console.log(balance);  
  //Here, you are creating a Number object using new Number(400). While the primitive type 400 would just be a number, new Number(400) creates a Number object. In the console, it prints as an object like this:[Number: 400]

 // Note: Using new Number() is generally unnecessary in modern JavaScript since 400 can just be a number type, and wrapping it with new Number() gives you an object rather than the primitive type. If you don't need an object, you can simply use const balance = 400;.

 console.log(balance.toString());  
 // The toString() method converts the Number object into a string. In this case, it converts 400 into "400".

 console.log(balance.toString().length); 
 // This prints the length of the string "400", which has 3 characters.

 console.log(balance.toFixed(2)); 
 // The toFixed(2) method formats the number to 2 decimal places. Since balance is 400, it will display 400.00 as a string with two decimal points: "400.00"

 const otherNumber = 123.8956

 console.log(otherNumber.toPrecision(6)); 
 //The toPrecision(6) method returns a string representation of otherNumber with 6 significant digits. This means it rounds the number to make sure it has a total of 6 digits. So 123.8956 becomes 123.896

 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')); 
 // The toLocaleString('en-IN') method converts the number 1000000 into a localized string format according to the en-IN locale (Indian number formatting). In India, commas are used differently than in Western countries; for instance, it places a comma after every two digits after the thousand : 10,00,000



 /* ***************** Maths ***************** */

console.log(Math);

console.log(Math.abs(-4)); 
// Math.abs(x) returns the absolute value of x. The absolute value is always a positive number or 0. In this case, Math.abs(-4) will return 4, because the absolute value of -4 is 4.

console.log(Math.round(4.6)); 
// Math.round(x) rounds x to the nearest integer. If x has a decimal value of .5 or higher, it rounds up. In this case, 4.6 will be rounded to 5.

console.log(Math.ceil(4.6)); 
// Math.ceil(x) rounds x up to the nearest integer, regardless of the decimal part. In this case, 4.6 will be rounded up to 5.

console.log(Math.floor(4.9)); 
// This rounds the result down to the nearest whole number. So if the random value was something like 6.7, Math.floor() will turn it into 6.

console.log(Math.min(1,2,3,4,5,6,7)); 
// Returns the smallest number from the given numbers / Array.

console.log(Math.max(1,2,3,4,5,6,7));  
// Returns the largest number from the given numbers / Array.

console.log(Math.random()); 
// generates random value between 0 to 1


console.log((Math.random()*10) + 1); 

// we can use Math.floor() with it to round up the value to nearest lower value as following

console.log(Math.floor(Math.random() * 10) + 1);


// we can set the min and max value to generate random values 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);

// The above code generates a random integer between min (10) and max (20)









/* **************** Notes **************** */

/*

1. console.log(Math)

This simply prints the Math object itself. The Math object is built-in to JavaScript and provides various mathematical methods and constants. The output will be the entire Math object, showing available properties and methods like abs, round, floor, etc. It will look something like this in the console: 

Math {
  E: 2.718281828459045,
  LN10: 2.302585092994046,
  LN2: 0.6931471805599453,
  LOG10E: 0.4342944819032518,
  LOG2E: 1.4426950408889634,
  PI: 3.141592653589793,
  SQRT1_2: 0.7071067811865476,
  SQRT2: 1.4142135623730951,
  abs: [Function: abs],
  acos: [Function: acos],
  // More properties and methods...
}

1. toFixed() =>  toFoxed is used to set the limit on number after decimal

2. toPrecision()  => Number of significant digits. Must be in the range 1 - 21, inclusive.

Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

-------------------------------------------------------------------------------------------------------------------------------------

3. toLocaleString() => Converts a number to a string by using the current or specified locale.
ex.  
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

output => 10,00,000

-------------------------------------------------------------------------------------------------------------------------------------

4. console.log((Math.random()*10) + 1); 

we know that math.random() generates the value between 0 - 1 but If I want to generate a random value between 1 to 10 then I will multiply math.random() by 10 to generate value between 1 - 10 and but if math.random generate the number 0.01 and we multiply this no by 10, it will give 0.1 and we need value between 1 - 10 so to avoid situations like this we will add 1 in it.

If Math.random() gives 0.2, the calculation will be:
0.2 * 10 = 2, 2 + 1 = 3
So the result is 3.
If Math.random() gives 0.8, the calculation will be:
0.8 * 10 = 8, 8 + 1 = 9
So the result is 9.

-------------------------------------------------------------------------------------------------------------------------------------

5. console.log(Math.floor(Math.random() * (max - min + 1))+ min);

// The above code generates a random integer between min (10) and max (20)

Examples 

If Math.random() gives 0.5, the calculation will be:

0.5 * 11 = 5.5, Math.floor(5.5) = 5
5 + 10 = 15, so the result would be 15
.
If Math.random() gives 0.9, the calculation will be:

0.9 * 11 = 9.9, Math.floor(9.9) = 9
9 + 10 = 19, so the result would be 19.

So, the output is a random integer between 10 and 20, inclusive. 

-------------------------------------------------------------------------------------------------------------------------------------

*/