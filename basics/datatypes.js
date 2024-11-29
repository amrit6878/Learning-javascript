// 1.)primitive &
// 2.)non-primitive datatypes; on the basis of how memory is allocated to them and how are they accessed

// Primitive type : 7 types - String, Number, Boolean, Null, undefined, Symbol, BingInt
// Non-Primitive or Reference : Arrays, Objects, Functions

// Note: JavaScript is dynamically typed language. ie. no need to declare the datatypes
const temp1 = 10
const temp2 = 5.6

const isLoggedin = false
const score = 104
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id===anotherId);

const bigNumber = 234534564

const heros = ["Shaktiman","hatim","Naagraj"];

let myObj={
    name: "Amrit",
    age: "20",
    institute: "JSSATEN",
}

const myFunction=function(){
    console.log("Hello Amrit !");
}

console.log(typeof(bigNumber));
// type of null datatyoe is always object
console.log(typeof(myFunction));
console.log(typeof(anotherId));


// NOTE:-
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
