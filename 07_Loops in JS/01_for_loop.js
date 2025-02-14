
/* for loop */

/* Syntax : 
    for (intialization ; condition; increment / decrement) {  
        code to execute
    } */

 //     Ex 1:

        for (let i = 1; i <= 10; i++) {
             const element = i;
//               console.log(element);
            }


 //     Ex 2:

        for (let i = 0; i <= 10; i++) {
            const element = i;
            if ( element == 5){
//              console.log("5 is the best Number"); 
            }
//            console.log(element); 
        }


 //     Ex 3:

        for (let i = 1; i <= 10 ; i++) {
            const element = i;
            // console.log(`outer loop ${element}`);
            for (let j = 1; j <= 10 ; j++) {
                const element = j;
                // console.log(`inner loop value ${j} and Inner loop value ${i}`);
                // console.log(i + " * " + j + " = " + i * j);
                
            }        
        }


 //     Ex 4:

        const myArray = ["Vaibhav", "Mansi", "Vaishnavi"]

        for (let index = 0; index < myArray.length; index++) {
            const element = myArray[index];
            // console.log(element);
        }

        /* When we use for loop with array then we can not declare the condition like i <= array.length because it will give undefined at the end
           beacause array index starts from 0 so to avoid this we can use i <= array.length-1   */


//          Break Keyword

        for (let i = 0; i <= 20; i++) {
            if ( i == 7 ){
                // console.log("Thala for a reason");
                break;   
            }
            // console.log(i);        
        }

        // Break keyword is used to break / stop the control flow 


//          Continue Keyword

        for (let index = 0; index < 10; index++) {
            if (index == 7){
                console.log("7 Detected");
                continue;
            }
            console.log(index);  
        }

        // continue keyword skips the current interation and exacute all the remaining iterations



/* ++++++++++++++++++++++++++ Notes +++++++++++++++++++++++++++++++

The for loop is one of the most commonly used loops in JavaScript. It is used when the number of iteration is known before execution

Syntax : 
        for (initialization ; condition ; increment / decrement) { 
            code to execute
        }

    Explaination : 

    1. Initalization : A variable is initialized 
    2. Condition : The loop runs as long as the condition is true 
    3. Increment/decrement : the variable is updated (incrased or decreased) after each iteration

When to use :

    > When the number of iteration is known in advance
    > When iterating over arrays or lists
    > When you need counter variable

*/
