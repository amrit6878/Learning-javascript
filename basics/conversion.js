let score = "76"

console.log("Score: " + score);
console.log("Type of Score: " + typeof(score));

let scoreinNumber = Number(score)
console.log("scoreinNumber: " + scoreinNumber);
console.log("type of scoreinNumber: " + typeof(scoreinNumber));
console.log("\n");

// trying null in the value and then conversion of datatype
let virat = null
console.log("virat: " + virat);
console.log("Type of virat: " + typeof(virat));

let updateVirat = Number(virat);
console.log("updateVirat: " + updateVirat);
console.log("Type of updateVirat: " + typeof(updateVirat));
console.log("\n");

// trying undefined as value and then conversion
let Rohit = undefined
console.log("Rohit: " + Rohit);
console.log("Type of Rohit: " + typeof(Rohit));

let updateRohit = Number(Rohit)
console.log("Print Rohit after conversion: " + updateRohit);
console.log("Type of updateRohit: " + typeof(updateRohit));
console.log("\n");

// trying boolean value of string to convert
let naam = "Amrit";
console.log("naam: " + naam);
console.log("Type of naam: " + typeof(naam));

let updateNaam = Number(naam)
console.log("Printing Naam after conversion: " + updateNaam);
console.log("type of updateNaam: " + typeof(updateNaam));

//  Notes: when we trey to convert in number - 
//         "33" => 33
//         "33abc" => NaN
//         true => 1
//         false => 0.   
 
let isLoggedIn = 1
console.log("isLoggedIn: " + isLoggedIn);
console.log("type of isLoggedIn: " + typeof(isLoggedIn));

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Converted into boolean: " + booleanIsLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log("\n");

// now number to string
let someNumber = 336
console.log("Prionting someNumber: " + someNumber);
let stringNumber = String(someNumber);
console.log("converted to string: " + stringNumber);
console.log("Type of: " + typeof(stringNumber));
