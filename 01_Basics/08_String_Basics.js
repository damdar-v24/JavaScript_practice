
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


************* methods of String *************

    charAt()    => method of String values returns a new string consisting at the given index.

    concat()    => method of String values concatenates the string arguments to this string and returns a new string

    endsWith()  => method of String values determines whether a string ends with the characters of this string, returning true or false as 
                   appropriate.

    includes()  => method of String values performs a case-sensitive search to determine whether a given string may be found within this string,   
                   returning true or false as appropriate.

    indexOf()   => method of String values searches this string and returns the index of the first occurrence of the specified substring. It  
                   akes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

    repeat(_)   => method of String values constructs and returns a new string which contains the specified number of copies of this string, 
                   concatenated together
                    ex.
                    const mood = 'Happy! ';
                    console.log(`I feel ${mood.repeat(3)}`);
                   Expected output: "I feel Happy! Happy! Happy! "

    replace()   => method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern 
                   can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

    replaceAll()=> method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a 
                   string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

    slice()     => method of String values extracts a section of this string and returns it as a new string, without modifying the original 
                   string.

    split()     => method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the 
                   pattern,puts these substrings into an array, and returns the array.

    startsWith()=> method of String values determines whether this string begins with the characters of a specified string, returning true or  
                   false as appropriate.

    substring() => method of String values returns the part of this string from the start index up to and excluding the end index, or to the end  
                   of the string if no end index is supplied

    toString()  => method of String values returns this string value.

    trim()      => method of String values removes whitespace from both ends of this string and returns a new string, without modifying the 
                   original string.

                   To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

    trimStart() => method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the 
                   original string. trimLeft() is an alias of this method.
                
    trimEnd()   => method of String values removes whitespace from the end of this string and returns a new string, without modifying the original 
                   string. trimRight() is an alias of this method.

*/