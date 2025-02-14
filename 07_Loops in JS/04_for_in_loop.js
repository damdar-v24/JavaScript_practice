
// For object we use gor-in loop to iterate because for of loop does not work with object

const myobj = {
    js : "JavaScript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myobj) {
    // console.log(key);  to access the key 
    // console.log(myobj[key]); // to access the value of key
    
     console.log(`${key} is shortcut for ${myobj[key]}`);
      
}  


// using for in loop for the array

const arr = ["Java", "C++", "c", "Python","JavaScript"]

for (const key in arr) {
  // console.log(key);
   console.log(arr[key]);   
}


// Using for in loop for the map

const map =new Map()
map.set('1','Java')
map.set('2','JS')
map.set('3','Python')
map.set('4','C++')

for (const key in map) {
    console.log(key); // not showing any output because map is not iterable using for-in loop
}
