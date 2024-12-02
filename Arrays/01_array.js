const number = [23,45,67,78,89]
console.log("Type of number is - " + typeof(number));
console.log(number);
const heroes = ["Superman","ironman","Batman","spiderman","padman"]
console.log(heroes);
console.log(number[0] + " - " + heroes[1]);

// Array Methods ->> push(),pop(),
number.push(90);
number.push(43);
console.log(number);
number.pop();
console.log(number);

// unshift(x)->>Adds the element at the starting(0th index) and shift()->>removes the element of 0th index
number.unshift(11);
number.unshift(8);
console.log(number);
number.shift();
console.log(number);

// array_name.includes(x) ->> tells whether it contains x element
console.log(number.includes(67));
console.log(number.includes(54));

// number.indexof(element) ->> will returns the index of particular element
console.log("Index of 23 in number:- " + number.indexOf(23));
console.log("Index of padman in heroes:- " + heroes.indexOf("padman"));

const newnumber = number.join()
// this will join the number array to newnumber array with same elements but change the type into string 
console.log("number- " + number);
console.log(typeof(number));
console.log("newnumber- " + newnumber);
console.log(typeof(newnumber));

// slice and splice both returns the section of an array but slice return a subarrays(copy,paste) whereas splice cuts the 
// array to required part including range and returns them

const slice1 = number.slice(1,4);
console.log(slice1);
console.log("original array-" + number);
const splice1 = number.splice(1,4);
console.log(splice1);
console.log("original array-" + number);
