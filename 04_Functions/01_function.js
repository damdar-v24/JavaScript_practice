
// function calculationCartPrice(num1){
//     return num1
// }
// console.log(calculationCartPrice(2));

// If multiple inputs are comming from the user then we use rest operator (...). It is used to bundled the multiple input into single array


function calculationCartPrice(...num1){
    return num1
}
console.log(calculationCartPrice(200, 400, 500))

//                or

function calculationCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculationCartPrice(200, 400, 500, 2000));
// in the above case the val1 store 200, val2 store 400 and remaining parameter will store by the ...num 


//                or


const user = {
    name : "Vaibhav",
    price : 499
}

function getObjectValues (Anyobject){
    console.log(`Hello user, The name is ${user.name} and Price is ${user.price}`)
}
getObjectValues(user)

// we can pass object directly without declaring as parameter 

function getObjectValues (Anyobject){
    console.log(`Hello user, The name is ${Anyobject.name} and Price is ${Anyobject.price}`)
}

getObjectValues({
    name : "skybag",
    price : 699
})


// And also we can Pass Array as parameter to the function

const array = [200, 400, 500, 600]

function getArrayvalues (anyObject){
    return anyObject[1]     // here we will return the value which is present at the index 1
}

console.log(getArrayvalues(array));

// We can pass the array as parameter directly to the function without declaring separately

function getArray (anyArray) {
    return anyArray[5]
}

console.log(getArray([100, 200, 300, 400, 500, 600]));
