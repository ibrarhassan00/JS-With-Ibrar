// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);     // print single element from arry

// Array methods

// myArr.push(6)   // add element in last
// myArr.push(7)   // add element in last
// myArr.pop()     // last element remove

// myArr.unshift(9) // add element in start 
// myArr.shift()    // remove element from start

// console.log(myArr.includes(9));  // checking and reply with true or faluse 
// console.log(myArr.indexOf(3));   // index value ky agaist arry jo element ho os position per os ko print karaye ga. ( agr koi yesa elemet pass karahin ho arry nahi hai to y -1 show karta hai) 

// const newArr = myArr.join()     // .join() mehthode arry ko string banany keliye hota hai

// console.log(myArr);             // output arry
// console.log( newArr);           // output string
// console.log( typeof newArr);       // String

//---------------------------------------------------- slice, splice-------------------------------------------------------

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);