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

