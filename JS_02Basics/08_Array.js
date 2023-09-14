// ARRAY

const myArr = [0,1,2,3,4,5]
const myHeros = ["Batman", "Shaltiman"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.push(8)

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9)); // does 9 exist, output in true or false
console.log(myArr.indexOf(3));

console.log(myArr);
console.log(typeof myArr)