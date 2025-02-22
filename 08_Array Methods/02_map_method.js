
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums = myNumbers.map( (num) => num + 10 )

// const myNums = myNumbers.forEach( (num) => {
//     console.log(num);
//     return num 
// } ) 

// Chaining

const newNums = myNumbers.map( (num) => num * 10 ) // (after performing the operation the values of num are 10,20,30,40,50,60,70,80,90,100)

                         .map( (num) => num + 1 ) // value of this num will be the output of the 1st map/iteration, here the values of num are 11,21,31,41,51,61,71,81,91,101)

                         .filter( (num) => num > 50 ) // value of this num will be the output of the 2nd map/iteration (here 

console.log(newNums);


