const jsuser = {
    name: "Amrit",
    fullname: "Amrit Singh",
    age: "20",
    email: "asinghbaraura@microsoft.com",
    location: "Noida,Sector 62",
} 

// creating a function here
jsuser.greeting = function(){
    console.log("HELLO ! JS User Wish You A Happy Day .");
}

// function with fetching keys of objects
jsuser.greetingTwo = function(){
    // use backtick and ${this.keyname}
    console.log(`Hello ! JS user,${this.name} Wish you a Happy Day.`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());