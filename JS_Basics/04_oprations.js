// To read about the Preincriment and postIncriment of values use the websites MDN and JS

 let value = 3;
 let negValue = -value;
 console.log(negValue);

 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**3); // 2 to the power 3;
 console.log(2/2);
 console.log(2%2);

 let str1 = "Hello";
 let str2 = " Prince";

 let str3 = str1 + str2;
 console.log(str3);


 console.log(1+"2");
 console.log("1" + 2);
 console.log("1"+2+2); //output will be ==> 122
 console.log(1+2+"2"); // outpur will be 32 because preferance to datatype which is coming first
 

 console.log(3 + 4 * 5 % 3);  // don't write the code like line 33;
 console.log((3+4) * (5%3));  // Instead of writing code like line number 33 write like line number 34

 console.log(+true);  // output will be 1. Because the by default value of true is 1.
//  console.log(true+); // this line gives error because + should not come at last
console.log(+ ""); // output will be 0. Because invalid spaces give the output 0;

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
++ gameCounter;
let gameNumber = 200;
gameNumber++;
 console.log(gameCounter, gameNumber);

//  To read about the Preincriment and postIncriment of values use the websites MDN and JS