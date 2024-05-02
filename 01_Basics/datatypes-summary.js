                                   // 1) Primitive Datatypes ( Stack )

// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

let myYouTubeName = "ibrar";
let anotherName = myYouTubeName;
anotherName="hassan";

console.log(myYouTubeName); // ibrar
console.log(anotherName); // hassan


                                // 2) Non-primitive Datatypes ( Heap )

// Arrays  =>  object
// Function  =>  objectFunction
// Object  =>  object


let userOne = {
    email:"ibrar@gmail.com",
    upi:"user@ybl",
}

let userTow=userOne;

userTow.email="hassan@gmail.com";

console.log(userOne.email); // hassan@gmail.com
console.log(userTow.email); // hassan@gmail.com