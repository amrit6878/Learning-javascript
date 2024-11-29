let name="Amrit"
let mobile=8290124902
// concatination of strings using + and comma signs 
console.log(name + " - " + mobile + "\n");

// using backticks and string interpolation `.....${variable}.....` 
console.log(`My name is ${name} and my mobile number is ${mobile}`);

// another way of syntaxing string is using new keyword which assign the memory as a object and provide length, various methods, prototype
// and returns the string indexwise
const gameName = new String("Valorant")
console.log("Name of the game is:- " + gameName);
console.log("Value at first index of String gameName:- " + gameName[0]);
console.log("Length of the string is: "+ gameName.length);
console.log("using one of the prototype here which change all indices to uppercase: "+ gameName.toUpperCase());
// to know on particular index which charschter is present
console.log("At index number 2 which character: "+ gameName.charAt(2));
// to know that character present at which index we use indexOf() property
console.log("t present at which index number: "+ gameName.indexOf('t'));
console.log("\n");
// slicing the string using  stringName.substring(start,end) ->> will ignore the negative values
// note that characters from start to before the end will be sliced
const substr1 = gameName.substring(0,4);
console.log("substr1: " + substr1 + '\n');
// we can also use stringName.slice(start,end), interestingly we can also give negative values into it
const stringWithSpaces = "     Gandu.    "
console.log("stringWithSpace normally: " + stringWithSpaces);
console.log("Using trim() remove all the extra spaces from string: " + stringWithSpaces.trim());
const stringWithSpaces2 = ".     Gandu.    ."
console.log("stringWithSpace normally: " + stringWithSpaces2);
console.log("Using trim() will not remove extra spaces because of dot: " + stringWithSpaces2.trim());

// strng.replace('lis cheez ko','kya cheez se')
let url = "https://amritrajput6878.com/%20barauraisvillage"
console.log("Printing url after replacing isvillage by MeraGaaw: " + url.replace("isvillage","MeraGaaw"));

// asking anything prensent in the string is also allowed 
console.log(url.includes('rajput'));
console.log(url.includes('6898'));

