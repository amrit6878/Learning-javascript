// Array_02
const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"];
console.log("Marvel- " + marvel_heros);
console.log("DC Heros- " + dc_heroes);
console.log("\n");

// marvel_heros.push(dc_heroes);
// console.log("After pushing dc_heroes to marvel_heroes: " + marvel_heros);
// pushing an array into another array directly takes the array as an element instead of merging them because
// array in javascript can take any type of data as input
console.log(marvel_heros[0]);
console.log(marvel_heros[2]);
// console.log(marvel_heros[4]); -->> returns undefined
// console.log("1st element of 3rd object- " + marvel_heros[3][1]);

// to merge two arrays we can use concatination
const all_heros = marvel_heros.concat(dc_heroes);
console.log("using concat operator:- " + all_heros);

// spread operator is more efficiently used than concat operator
const new_heros = [...marvel_heros,...dc_heroes]
console.log("Using spread operator:- " + new_heros);

// use of arr_name.flat(In_depth) operator
const another_arr = [2,5,7,[6,7,8],1,0,[9,8,[4,3]]]
console.log(another_arr);
console.log(another_arr.flat(Infinity));

// asking whether it is an array
console.log(Array.isArray("Amrit"));
// convert the string into array 
console.log(Array.from("Amrit Singh"));

// making an array with various variables
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

