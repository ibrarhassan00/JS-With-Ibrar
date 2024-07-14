// let score = 33;

// console.log(score); // 33
// console.log(typeof score); // number 
// console.log(typeof(score)); // number

//-------------------------------------------number In To String-------------------------------------------------------------
// let valueINString_score=String(score);

// console.log(valueINString_score); // 33
// console.log(typeof valueINString_score); // string
// console.log(typeof(valueINString_score)); // string

//-------------------------------------------string In To Number-----------------------------------------------------------
// let valueInNumber_score=Number(score);

// console.log(valueInNumber_score); // 33
// console.log(typeof valueInNumber_score); // number
// console.log(typeof(valueInNumber_score)); // number

//-----------------------------------------number+Sting Data In To Number---------------------------------------------------
// let score1="123abc"

// console.log(score1); // 123abc
// console.log(typeof score1) // string

// let valueINnumber_score1=Number(score1);

// console.log(valueINnumber_score1); // NaN
// console.log(typeof valueINnumber_score1); // number

//---------------------------------------------string In To Boolen-----------------------------------------------------
// let score3 = "";
// let score4 = "ibrar"
// // let valueInBoolean_sore3sore4=Boolean( score3 + score4);

// let valueInBoolean_sore3=Boolean(score3);
// let valueInBoolean_sore4=Boolean(score4);

// console.log(valueInBoolean_sore3) // false
// console.log(valueInBoolean_sore4);// ture

// console.log (typeof valueInBoolean_sore3); // boolean
// console.log (typeof valueInBoolean_sore4); // boolean

//--------------------------------------------number In To Boolean--------------------------------------------------------------
// let score5 = 0;
// let score6 = "1"

// // let valueInBoolean_sore5sore6=Boolean( score3 + score4);

// let valueInBoolean_sore5=Boolean(score5);
// let valueInBoolean_sore6=Boolean(score6);

// console.log(valueInBoolean_sore5) // false
// console.log(valueInBoolean_sore6);// ture

// console.log (typeof valueInBoolean_sore5); // boolean
// console.log (typeof valueInBoolean_sore6); // boolean

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); //hello hitesh

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12 
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32 is simple nahi rule hai 1st jo bhi type hoga agy sub y wahi consider kare ga

// console.log( (3 + 4) * 5 % 3); 

// console.log(+true); // 1
// console.log(+""); // 1 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1) // 4

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

console.log( (3 + 4) * 5 % 3);// 2

//Sabse pehle, parentheses ke andar wale expression solve karte hain: (3 + 4) = 7.
// Fir, multiplication operation ko karte hain: 7 * 5 = 35.

// 35 / 3 = 11 (11 whole times, with a remainder).
// 11 * 3 = 33 (Multiplying the quotient by the divisor).
// 35 - 33 = 2 (Subtracting the product from the original number).