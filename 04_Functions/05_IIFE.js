 
 // Immediately Invoked Function Expression

    let message = "Hello World !"  // global variable

    function greet() {
        console.log(message);  // access the global variable
    }
    greet();

    // In the above example, greet() is using the global variable message. If another script changes the message, it might cause the unexpected behaviour so to prevent this we use IIFE

    // Solution

    (function chai () {
        let message = "Hello world"  // this message is only accessible inside the IIFE
        console.log(message)
    })();

    // ()() ==> IIFE 
    // 1st () is used to wrap the function or function definition
    // 2nd () is used to invoked the function immediately

    // Declaring two IIFE in single program

    (function chai (){
        console.log(`DB Connected`);
    })(); 

    // we have to add ; at the end off 1st IIFE beacause IIFE dont know where to stop the context

    (function coffee (){
        console.log(`DB Connected`);
    })();
 


    //  We can write the arrow function inside IIFE

    (() => {
        console.log(`DB connected Successfully`);
        
    })();

    // We can pass the arguments and parameter also

    ((name) => {  // here we pass arugument 
        console.log(`DB connected Successfully ${name}`);
        
    })("Vaibhav");  // here we pass the parameter 


    // IIFE helps in avoideing global variable Overriding

   var count = 5;
   (function () {
    var count = 10 
    console.log("Inside function:", count);
    
   })();
   console.log("Outside function:", count);
   





 /* Immediately Invoked Function Expression (IIFE) */

 /* 
 
    An immediately invoked function Expression in JavaScript  is a function that is defined and executed immediately after its creation.

    Use:
    1. To avoid or prevent global scope pollution, since the variable declared inside the IIFE are scoped to that function, they do not interfere with the global variables, and global varibale do not accidentally modify them (if we declare the global variable, they can be accessible from the function so they can accidently modify the values of function and hence to prevent this modification we use IIFE).
    2. Encapsulate the variable and prevent accidental modification
    3. Execute code immediately


    // Named IIFE syntax

    /* (function chai () {
            console.log("Hello World")
        })()

// Unnamed IIFE

    (() => {  
        console.log(`DB connected Successfully ${name}`);

    })()


     ()() ==> IIFE 
    // 1st () is used to wrap the function or function definition
    // 2nd () is used to invoked the function immediately

    //when we declare to iife in one program then we have to add ; at the end off 1st IIFE beacause IIFE dont know where to stop the context
 */
