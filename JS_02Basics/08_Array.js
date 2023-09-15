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

const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["batman", "spiderman", "flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros); // output will be [ 'thor', 'ironman', 'spiderman', [ 'batman', 'spiderman', 'flash' ] ] because it takes another array as a single object
console.log(marvel_heros[3][1]); // output will be spiderman

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)

const all_new_heros = [...marvel_heros, ...dc_heros] // this method is called as spread method, used to combine 2 or more arrays
console.log(all_new_heros)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]] // in the case of multiple arrays in one array we can use this method of split
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // output will be 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// somethimes while selecting data from another list we get data in different dataforms
//for this we can use this method in the array

console.log(Array.isArray("Prince"))
console.log(Array.from("Prince"))
console.log(Array.from({name: "Prince"})) // Intersting and important form interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));