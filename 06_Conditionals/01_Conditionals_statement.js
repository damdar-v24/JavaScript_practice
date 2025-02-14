
// IF block

    if (true) {
        console.log("Hello World !");
    }
                            // or

    if(true) console.log("Hello brother"); 

    if(true) console.log("Hello brother"), console.log("Hey"); 
    // like this we can write multi line code with implicit scope (implicit scope : without parenthesis declaring the scope of block)
    
// IF-ELSE

    const age = 15
    if (age >= 18) {
        console.log("You can drive");
    } else {
        console.log("You can't drive");
        
    }

//  IF-ELSE IF 

    const balance = 1000

    if (balance < 500) {
        console.log("Balance is less than 500");
            
    } else if(balance < 700) {
        console.log("balance is greater than 500 but less than 700");

    } else if (balance < 900) {
        console.log("balance is greater than 700 but less than 900");

    } else {
        console.log("balance is greater than 900");
        
    }


// ex: && operator 

    const userLoggedIn = true
    const debitCard = true 

    if (userLoggedIn && debitCard) {
        console.log("Allow to buy course");
    }

// ex: || operator 

const userLoggedIn1 = true
const debitCard1 = false 

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}


// Switch Statement

    const month = 5
    switch (month) {
        case 1 : 
            console.log("January");
            break;
        case 2 : 
            console.log("february");
            break;
        case 3 : 
            console.log("March");
            break;
        case 4 : 
            console.log("April");
            break;
        case 5 : 
            console.log("May");
            break;
        case 6 : 
            console.log("June");
            break;
        default : 
            console.log("Enter the Valid Month");
                
    }


// Question: How can we check the array whether it is empty or not ??

    const userEmail = []

    if (userEmail.length == 0) {
        console.log("array is empty");
    } else {
        console.log("array is not empty"); 
    }


// Question:  How can we check the object whether it is empty or not ??

    const userName = {}

    if (Object.keys(userName).length == 0) {
        console.log("Object is empty");
    } else {
        console.log("Object is not empty"); 
    }

// we know that Object.keys(object_name) will  convert the object into array and returns the array 

// then using .length we can find the length of an array and then we compare the length of array with 0

// Terniary Operator

    const price = 40
    price <= 100 ? console.log("price is less than 100"): console.log("Price is more than 100")

    
    let y = null
    let x = 10

    console.log(y ?? x); // If left is null or undefined, the operator returns right.(o/p = 10)

    console.log(x ?? y) // if left is neither null nor undefined, the operator returns left. (o/p = 10)
    

    let a = null;
    let b = "Hello";

    console.log(a ?? b);  // "Hello" because a is null

    let c = "Goodbye";
    console.log(c ?? b);  // "Goodbye" because c is not null or undefined




    
