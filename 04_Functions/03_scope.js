
if (true){
    let a = 10 
    const b = 20
    var c = 30

}

// console.log(a); 
// console.log(b);
// console.log(c);

function one () {
    const username = "vaibhav"
    
    function two () {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()  

// in the above example : we tried to print website outside the two function, an attempt to log the website variable will result in an error because website is defined within the scope of the two function and is not accessible in the outer one function. When two() is called inside one, it successfully logs the username. Because inner function or block can access variables from outer function.


if (true) {
   let greeting = "Hello"
    if (greeting === "Hello") {
        let username = " Vaibhav"
        console.log(greeting + username)
    }

    // console.log(username); // we can not log username here beacause the it can be accessible only within it is declared  
}

// console.log(greeting); // This line will gives an error beacause the it can be accessible only within it is declared , we can not access greeting outside of its scope



// addOne(5)  we can pass the value from here also

function addOne (num) {
    return num + 1
}

addOne(5)

//  ++++++++++ or +++++++++++

// addTwo(3)
// when we hold the function in variable and if we try to pass and access the value to the function before its initialization then it will give an error "cannot access addtwo before intialization"

const addTwo = function (num) {  // it is function but it can be called as expression also
    return num + 2
}
addTwo(3)







/* Notes */

/* 
    # var (Function Scope) ==> var is function scope, meaning its only accessible within the function where it is declare
    * it can be redeclare and reassigned
    * Avoid var as it has fuction scope and can lead unexpected behaviour,if we declare a varible with var in block, it can accessible outside the block within it is declare and that is problematic.
    
    # let (block scoped)==>  let is block scoped, meaning it's only accessible within the block {} where it's declared.
    * it can be reassigned but can not redeclared in the same scope.
    * use let when a variable needs to be reassigned.
    
    # const (block scoped and immutable) ==> It is also block scoped like let.
    * can not be reassigned after initialization.
    * it must be initialized when declared
    * for objects and arrays, the reference is immutable but the contents can be changed
    

Scope ==> Scope in JavaScrpt defines the accessibility or visibility of variables, functioncs and objects in different parts of the code.

There are three main type of scope in JS 
    1. Global Scope
    2. Function Scope
    3. Block scope

    1. Global :
        Variable declared outside the function or block belong to the global scope
        They can be accessed by anywhere in the code

    2. Function Scope : 
        Variables declared inside the function is are only accessible within that function only.
        They can not be accessed outside of it.

    3. Block Scope : 
        Introdused with const and let, variable declared inside the {} are block scoped.
        They are not accessible outside the block

Other than this there is some scope in js
    1. Laxical Scope (closure)
    2. Module Scope

    1. Laxical Scope : 
        Function can access the varibles from their parent scope even after the  parent function stopes executing

    2. Module Scope : 
        Varibles declared inside the module are scoped to that module only, It can not be accessible outside of that module
*/ 
