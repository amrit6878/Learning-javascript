// singleton object
const newObject = {}
// or 
const anotherObject = new Object()

anotherObject.id = "123abc"
anotherObject.email = "amrit@yahoo.com"
anotherObject.location = "Noida sector 58"

console.log(anotherObject);
console.log("\n");

// nested object
const regualaruser = {
    name: "Amrit",
    fullname: {
        firstname: "Amrit",
        middlename: "Singh",
        lastname: "Rajput",
    },
    Address: "Noida, Sector-62",
}
console.log(regualaruser.fullname);
console.log(regualaruser.fullname.middlename);

// combination or merging of two objects
const user1 = {
    name: "Rahul Tripathi",
    organisation: "Pheonix",
    team: "DarkNet",
    role: "Developer"
}
const user2 = {
    name: "Amrit Singhnaiya",
    organisaton: "Microsoft",
    team: "Dior",
    role: "BUG-bounty"
}
const user3 = {
    name: "Anurag Shukla",
    organisaton: "Amazon",
    team: "Wavy",
    role: "Tester"
}

const object3 = {user1,user2};
console.log(object3);
// for merging this two objects use Object.assign(object1,object2,....objectN)
const anotherObject2 = Object.assign({},user1,user2,user3)
console.log(anotherObject2);

// using spread operator for better merging 
const obj3 = {...user1,...user2,...user3}
console.log(obj3);

// determining keys and values only of any objects using ->> Object.keys(object_name) & Object.values(Object_name)
console.log("Keys of User1 are:- " + Object.keys(user1));
console.log("Values of User1 are:- " + Object.values(user1)); 

// Object.length(object_name)
// Object.entries(object_name) ->> returns the array of array consisting each key value pairs

