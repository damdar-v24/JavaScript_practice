
//  Using for of loop with array

const arr = [1, 2, 3, 4, 5]

for(const num of arr) {
   // console.log(num); 
}

// Using for of loop with string

const greetings = "Hello World !"
for (const greet of greetings) {
    // console.log(greet);
    
}


// Using for of loop with object

// Maps => contain unique value and maintain the insertion order

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

//  map.set("IN", "India")  here we tried to add duplicate value but map didn't add the duplicate value because it contains only unique values 

// console.log(map);

for(const key of map){
    console.log(key);  /* => [ 'IN', 'India' ]
                             [ 'USA', 'United States of America' ]
                             [ 'FR', 'France' ] */
}


// If we want to print key and value separately then

for (const [key, value] of map) {
    console.log(key, ':-' , value);
} /* ==> IN :- India
         USA :- United States of America
         FR :- France  */
    


// Using for of loop with object

const myObject = {
    'game1' : 'Ludo',
    'game2' : 'Pubg'
}

/* for (const [key, value] of myObject ) {
   // console.log(key, ':-', value);
    
}  // Gives an error because the objects are not iterable */


