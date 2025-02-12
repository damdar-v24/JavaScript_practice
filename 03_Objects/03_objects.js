// we can declare the object as follows

const tinderUser = new Object();
// or
const tinderUser1 = {}

// Adding key and values

tinderUser.id = 1
tinderUser.email = "vd@gmail.com"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

// Nested Object ==> We can have the objects in the object

const regularUser = {
    email : "vd1@gmail.com",
    fullName : {
        userFullName : {
            name : "vaibhav",
            surname : "Damdar"
        }
    }
}
// console.log(regularUser); 

// console.log(regularUser.fullName.userFullName.name); 
// to access the nested objects values we use . notation and object name and a value which we wanted to print / access


// console.log(regularUser.fullName?.userFullName.name); 
//  here ? operator is used to check the value exist or not, if yes then it will access that value otherwise it will terminate that line

// Combining / Merging Object

const obj1 = {1 : "a", 2 : "b" }
const obj2 = {3 : "c", 4 : "d" }

// const obj3 = {obj1, obj2}

// console.log(obj3);   // it will returns object inside the object ==> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = Object.assign(obj1, obj2);  // it will returns the proper merged object ==> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// here bydefault value after merging the object store into the obj1.

// console.log(obj3);

// or 

const obj4 = Object.assign({}, obj1, obj2); // here we use {} (empty array) as target and obj1 and obj2 are the source. i.e. the method object.assign() will merge the objects and store into the {} .

// console.log(obj4);

// result of the above both method will be same ==> Object.assign(obj1, obj2) === Object.assign({}, obj1, obj2)

// we can use spread operator also to merge object

const obj5 = {...obj1, ...obj2}

// console.log(obj5);

// When we access the data from the database then  we will get the output values in the form of array of object like as follows

const user = [
    {
        id : 1,
        name : "Vaibhav",
        email : "vd@gmail.com"
    },
    {
        id : 1,
        name : "Vaibhav",
        email : "vd@gmail.com"
    },
    {
        id : 1,
        name : "Vaibhav",
        email : "vd@gmail.com"
    },
    {
        id : 1,
        name : "Vaibhav",
        email : "vd@gmail.com"
    }
]

// to acces this value we can use following syntax

console.log(user[1].email);  // user.[1] means the first value from the above array (i.e. object)


// if we want to access the all keys only from the object then ==>

// console.log(Object.keys(tinderUser)); 

// Output ==> [ 'id', 'email', 'isLoggedIn' ]

// similarly if we want to access the all values only from the object then ==>

// console.log(Object.values(tinderUser))

// if i want to access the all values (keys and values) ==> [ 1, 'vd@gmail.com', true ]

// console.log(Object.entries(tinderUser)); 

// this method will convert every key value pair into array and the 1st value of array will be key and 2nd will be value  
// Output ==> [ [ 'id', 1 ], [ 'email', 'vd@gmail.com' ], [ 'isLoggedIn', true ] ] 

// to check the value is exist in the object or not we use 

console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // it will return the boolean value, true if the value is exist or false if the value is not exist


// Destructuring in JavaScript

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Vaibhav"
}

// console.log(course.courseInstructor);

// if we want to access courseInstructor name 10 times in our code so we have to write this line course.courseInstructor 10 times so that our code will become complicated and confusing to prevent this situation we have another syntax ==>

    const {courseInstructor} = course // here we want to extract courseInstructor value from course, instead of the course.courseinstructor we can write courseinstructor directly

    // and after this we dont need to write course.courseInstructor 

    // const {courseInstructor} = course ==> If we want to change the value name then we can change ao=coording to us 
    // ex: const {courseInstructor = instructor} = course

    console.log(courseInstructor);   // now 

    // Syntax ==> const {enter the vakue which you want to extract} = from where you want to extract the value