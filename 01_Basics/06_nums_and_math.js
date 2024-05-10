const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); // 124 . jo value number hum aurgument main pass karengy utna hi digit y print karega or last wale ko round kardeta hai . use for only decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++


console.log(Math.abs(-4)); // 4
console.log(Math.ceil(5.1)); // 6
console.log(Math.round(5.6)); // 6 
console.log(Math.round(5.4)); // 5
console.log(Math.floor(4.9)); // 4


console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); //  8

console.log((Math.random()*10)+1)

console.log(Math.random()); // 0 to .9
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)