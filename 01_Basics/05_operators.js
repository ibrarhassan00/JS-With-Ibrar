
//-----------------------------------arithmeticOperators----------------------------------------

let a = 5;
let b = 2;

console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b);  
console.log("a**b",a**b); // 5 into power 2 = 25

// 1st sumaller than 2nd so remainder always 1st,
// step 01 
//1st divide by 2nd the ignore decimal value of result
// step 02
// reseult value multiple by 2nd value
// step 03
// then 1st value - into step 02 result value.

// a = 108 and b = 20
// 108/20 = 5.4
// 5*20 = 100
// 108-100 = 8  // so remainder is "8"

//-------------------------------------------assigmentOperators-------------- = += -= *= /= %=  -------

let c = 5;

console.log (c);

console.log("a+=4 =" , a+=4 ); // 9
console.log("a-=4 =" , a-=4 ); // 1
console.log("a*=4 =" , a*=4 ); // 20
console.log("a+/4 =" , a/=4 ); // 1.25
console.log("a+%4 =" , a%=4 ); // 1

 // in sub ko sath print nahi karna warna y loop ki tarha calculate hongy.

 //--------------------------logicalOperators-------------------------------------------

// AND &&
// OR  ||
// NOT !
 

// cond1  cond2   &&  ||
//  T       T      T   T
//  F       T      F   T
//  T       F      F   T
//  F       F      F   F

let d = 6;
let e = 5;

let cond1 = d>e; // true
let cond2 = d===e; // false
/*
console.log(cond1 && cond2) // false
console.log(cond1 || cond2) // false
console.log("d===6", d===6) // true
console.log("!(d<e)",!(d<e)); // true
*/

//-------------------------------------unaryOperators-------------------------------------

let f =5;

//Preincrement
 
console.log("f =", ++f); //6
console.log("f =", f); //6

//preDecrepment 

console.log("f =", --f); //4
console.log("f =", f); //4

//postIncrement 

console.log("f =", f++); //5
console.log("f =", f); //6

//postDecrement 

console.log("f =", f--); //5
console.log("f =", f); //4

//-----------------------------comparisionOperators---------------------------------------------

// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log("1" == 1); // ture
// console.log("1" === 1); // false  data type bhi check kia.

// != NOT EQUAL TO 
// !-- NOT EQUAL TO & TYPE

// console.log(2 != 1); // true  // 2 baraber nahi hai 01 ky . or y prove horaha hai isliye "ture"
//console.log("2" != 2) // false
//console.log("2" !== 2) // ture


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); //false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log("2" === 2);// false


