console.log("Hello !");

const score = 400
console.log("Score: " + score + "\n");
// when we assign any number using new keyword like ->> score = new Number(400) it prints [Number: 400]
const newScore = new Number(100)
console.log("When we use new keyword: " + newScore);
console.log(typeof(newScore));

console.log(newScore.toString());
console.log(typeof(newScore));
console.log("Length is: " + newScore.toString().length);

// use of toFixed(x) in number is very important while numbers after decimal is too large but we want precision value upto x digits

console.log(score.toFixed(2));

// use of toPrecision(x) tells precise the number upto x digit no matter of decimal here -->> will return the string not number
const otherNumber = 233.98654
console.log("When we use precise value = 5: " + otherNumber.toPrecision(5));
console.log("When we use precise value = 3: " + otherNumber.toPrecision(3));
console.log("When we use precise value = 4: " + otherNumber.toPrecision(4));

// use of toLocaleStrings()
const num = 100340067
console.log("Use of commas by US standards: " + num.toLocaleString());
console.log("Use of commas by Indian standards: " + num.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
// therefore typeof(Math) is Object
const number = -324
console.log(Math.abs(number));
// abs() will change the negative value into positive but note vice versa is not true
// round off -> (Math.round(x.y))
        //-> (Math.ceil(u.0-9)) it will convert into (u+1) ceiling matlab chathh upar wali value like 4.3->>5, 7.6->>8
        // -> (Math.floor(w.0-9)) it will convert into (u) ie floor value neeche wali value
console.log("Rounding off 4.2: " + Math.round(4.2));
console.log("4.2 by ceil round: " + Math.ceil(4.2));
console.log("4.8 by floor round: " + Math.floor(4.8));

// many other methods like sqrt,pow,sin,tan can also be used
// (Math.min(a,b,c,d,e)) -->> gives the minimum among all
// (Math.max(a,b,c,d,e)) -->> gives the maximum among all

console.log("random() method gives any random value between 0-1: " + Math.random());
// note it mai also gives 0.03457843454 so to get minimum 1 we use ((Math.random()*10) + 1)
let min = 10
let max = 20
console.log("Always return any random number between min and max: " + (Math.random()*(max-min+1) + min));
