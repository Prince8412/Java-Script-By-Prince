function sayMyName(){
    console.log("p")
    console.log("R")
    console.log("I")
    console.log("N")
    console.log("C")
    console.log("E")
}

sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1+num2); // here console printing does not mean that it is returning the value, it is just printing the value
    
    console.log("Hello, This hello will get print because it is before the return statement")
    let result = num1 + num2
    return result; // or we can also write as return num1+num2
    return num1+num2
    console("Hellow, But this Hellow will not get print because this line comes after the return statement")
}


addTwoNumbers() // only this line give NaN, - not a number, Means because of no argument
addTwoNumbers(3,4)
addTwoNumbers(3,5)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,"null")
addTwoNumbers(3,null)

const result = addTwoNumbers(3,5) // without line 14,15, and 16, it will give the result undefined
console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){ // and in comanies we generally write this line like if(!username){  }
        console.log("Please enter the username")
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // it will give the output - "undefined", if line 35,36, and 37 doesn't exist.
console.log(loginUserMessage("")) // it will give the output - "just logged in", if line 35,36, and 37 doesn't exist.
console.log(loginUserMessage("Hitesh")) // it will give the output - "Hitesh just logged in", if line 35,36, and 37 doesn't exist.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// {Let's learn how to add multiple arguments in a single given parameter,} Because this problem occours when we build e-commerce website, then we add multiple products in a single kart.

function calculateCartPrice(val1, val2, ...num1){ // these three dots are ... -> rest oprator
    return num1
}
// By adding those 3dots we generally pushed them in an array
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // Here in line no. 64, and 65 we are generally passing the objects 
handleObject({  // Here we are passing the objects in the function but with proper arguments and 
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));