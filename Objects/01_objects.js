// two methods to form or declare an object are:- 
// by 1.) usnig literals ->don't make singletons and one by 2.) using constructors -> makes singleton

// object literals
const object1= {
    name: "Amrit",
    "full name": "Amrit singh",
    age:20,
    study: "Btech- CSE",
    email:"asinghbaraura@google.com",

}

// Accessing of keys of objects using dot operator
console.log(object1.name);
// another efficient way to access the keys of objects are objectname[key]
console.log(object1["full name"]);

// updation of key
console.log(object1.email);
object1.email = "amrit@6878google.com";
console.log(object1.email);

// to freeze the object so that noOne can easily alter the values of pairs
Object.freeze(object1)
object1.email = "amrit@microsoft.com";
console.log(object1.email);  

console.log(object1);