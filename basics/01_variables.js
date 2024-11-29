// assigning them into the memory
const account_Id = 144556
let account_email = "asinghbaraura.123z2gmail.com"
var account_Password = "Amrit@2004"
accountCity = "Delhi"

// changing to all the assigning

// changing into constant variables is'nt possible
// account_Id = 23478  //not allowed
console.log(account_Id);

// changing the let variable
account_email = "rationalspace92@gmail.com"
account_Password = "Asingh@2004"
accountCity = "Hyderabad"

// console.log(account_email);
// console.log(account_Password);
// console.log(accountCity);

// using table method to print all the variables using [] brackets
console.table([account_Id,account_Password,account_email,accountCity])
// therefore except const all gets changes
/* note: to declare constants we can use only "const" keyword and to declare variable we can use "let" or "var" keyword 
preferablly use const and let, and without using any keyword never use to declare variables like accountCity here */

