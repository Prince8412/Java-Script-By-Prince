// PRIMITIVE Datatypes

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// header is onabort

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // output = false;

const bigNumber = 23456432134567n // here n represents the BigInt

// Referance (Non Primitive)
// Array, Objects, Function

const Heros = ["Shatiman", "Naagraj", "Hanuman Ji"] // This line is an example of Array

let MyObject = { // In Curly Brackets We write Objects
    name: "Prince",
    age: 22,
}

const MyFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // Output will be "BigInt"
console.log(typeof outsideTemp); // Output will be "object"
console.log(typeof score); // Output will be "number"
console.log(typeof scoreValue); // Output will be "number"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MEMORY Concepts
// Stack (Stack memory uses in all primitive type data). Heap (uses in NOn-Primitive datatype)

let myActivityName = "Running"

let anothername = myActivityName;
anothername = "Reading";

console.log(myActivityName);// output will be Running
console.log(anothername);// output will be Reading

let userOne = {
    email: "user@google.com",
    upi: "upi@ybl"
}

let userTwo = userOne

userTwo.email = "prince@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);