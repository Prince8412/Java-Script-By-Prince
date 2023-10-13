var a = 20
var a = 40

console.log(a)
let b = 30

// let b = 32 // Here this line will give me the error if I put anyother value in any predifiend let variable

if(true){
    var c = 40;
    console.log(b)
}

// Variables declared with var keyword are not blocked scoped they are function scoped

console.log(c)
