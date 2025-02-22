
const arr = ["java", "python", "javaScript", "c++"]

const values = arr.forEach( (item) => {
//    console.log(item);
    return item   // for each loop does not return any value
})
// console.log(values);



const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = myNum.filter( (num) => num > 4 ) // filter method returns the number

console.log(nums);    // [ 5, 6, 7, 8, 9, 10 ]

 const newNums = myNum.filter( (item) => {
    return item > 4     // when we use {} then we have to write return keyword
} ) 
console.log(newNums);   //[ 5, 6, 7, 8, 9, 10 ]




// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// array1.forEach( (num1) => {
//     if(num1 > 5) {
//        array1.push(num1) 
//     }
// } )
// console.log(array1);



const books = [
    { title: 'Book one', genre:'Fiction', publish: 1981, edition: 2008},
    { title: 'Book two', genre:'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book three', genre:'History', publish: 1999, edition: 2007},
    { title: 'Book four', genre:'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book five', genre:'Science', publish: 2009, edition: 2014},
    { title: 'Book six', genre:'Fiction', publish: 1987, edition: 2010},
    { title: 'Book seven', genre:'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre:'Science', publish: 2011, edition: 2016}
]

// const userBook = books.filter( (bk) => bk.genre == "History" )

// const userBook = books.filter( (bk) => bk.publish > 2000 );

const userBook = books.filter( (bk) => { return bk.publish > 2000} );

// const userBook = books.filter( (bk) => (bk.publish > 2000) && bk.genre == "Science" )


console.log(userBook);
