const name = "Prince"
const repoCount = 50;

// console.log(name + repoCount + " Value");
// this method of writing the console is old so use line 7 method STRING INTERPOLATION

console.log('Hello my name is ${name} is and my repo count is ${repoCount}');

const gameName = new String ('Hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('t'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = " hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jubilant-space-yodel-jp9r55795xr3p5wr.github.dev%20hello/"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))