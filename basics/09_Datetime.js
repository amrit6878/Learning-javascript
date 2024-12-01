// Dates

let myDate = new Date()
console.log("Date: " + Date());
console.log(myDate.toString());
console.log(myDate.toDateString());
// toLocaleString() prints the date as MM/DD/YYYY ans time as Hr:Min:Sec
console.log(myDate.toLocaleString());

// creating my own date
// note that months starts from 0 in javascript
let newDate = new Date(2023,0,3)
console.log("Creating my own Date: " + newDate);
let anotherDate = new Date("01-14-2024")
console.log("MM/DD/YYYY format: " + anotherDate);
const specificDate = new Date(2023, 11, 25, 13, 30, 56); // Year, Month (0-indexed), Day, Hours, Minutes, Seconds
console.log(specificDate);
const dateFromString = new Date("December 25, 2023");
console.log(dateFromString);
console.log(dateFromString.toLocaleString());

// Time Stamp
let mytimeStamp = Date.now()
console.log(mytimeStamp);
// this will give a long long nuber which is miliseconds from 1 jan 1970
console.log(specificDate.getTime());
// to convert them into seconds divide them by 1000 and roundoff ->> to remove decimals
console.log("Into seconds: " + Math.floor(Date.now()/1000));

// to get the individual component of and date/time
console.log(newDate.getDate());
console.log(newDate.getDay());
// As month value starts form 0 we can use (newDate.getMonth()+1);
// to print we can also go for backtick like ->> `${newDate.toLocaleString()} and the time is ${mytimeStamp}`
console.log(`${newDate.toLocaleString()} and the time is ${mytimeStamp}`);