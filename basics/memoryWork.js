// There are two type of memory: 1)Stack Memory - Used by all primitive datatypes
//                               2)Heap Memory -  Used by all non-primitive datatypes
// Memory defined in the stack creates a copy of the object whereas memory defined in the heap is done by the referance
// which could make the real change into the value or object.

let myYoutubename = "jobhihaidotcom"

let anothername = myYoutubename
console.log("Printing anothername: " + anothername);
anothername = "AcademicAtlas"
console.log("Printing anothername after updation: " + anothername);
console.log("Changing in anothername will not change the value of myYoutubename ie : " + myYoutubename);
console.log("\n");

// therefore anothername ko myYoutubename ka ek copy assign kiya tha which can be changed upon altering the value of anothername
// but any type of updation do not effect the change in myYoutubename.---this is the stack memory managment

// now doing this type of updation in objects or any non primitive datatype
let userOne = {
    email:"asinghbaraura.123@gmail.com",
    upi:"asinghbaraura.123@oksbi",
}
let userTwo = userOne 
userTwo.email =  "rationalspace92@gmail.com"

console.log("email of userOne:-" + userOne.email);
console.log("email of userTwo paased by reference:-" + userTwo.email);
// note here userTwo and userOne variabele is created into the stack but all the memory is in heap and userTwo also refering to the same memory

