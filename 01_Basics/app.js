// let user1:{
//     name : string;
//     age : number;
//     role : string;
var both1 = {
    name: "zaid",
    experiance: 25,
    rollNumber: 4321,
};
//-----------------------------------------------------------New Class 11-05-2024------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`]
// console.log(fruits);
// adding items in arry 
// fruits.push(`Banana`); 
// console.log(fruits);// [ 'mango', 'orange', 'kiwi', 'Banana' ]
// console.log(fruits[1]); // orange
//--------------------------------------------------------------------------------------------------------------------
// remove value from arry last element 
// fruits.pop() // [ 'mango', 'orange', 'kiwi' ] observe last element has been removed
// console.log(fruits);
//-----------------------------------------------------------------------------------------------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`]
// let f1= fruits.pop() 
// console.log(f1); // kiwi
// console.log(fruits); // [ 'mango', 'orange' ]
//------------------------------------------------------------------------------------------------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`]
// console.log(fruits.length); // 3
//--------------------------------------------------------------------------------------------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`]
// fruits.unshift("grapes") // 
// console.log(fruits); //[ 'grapes', 'mango', 'orange', 'kiwi' ]
// shift ko try karna hai
//------------------------------------------------------------------------------------------------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`]
// fruits.shift()
// console.log (fruits); // [ 'orange', 'kiwi' ]
//-----------------------------------------Slice oranginal arry ki coppy bana deta hai.-------------------------------------------------------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`]
// let arrySlice = fruits.slice() // y fuction arry ki copy banaraha hai
// console.log(arrySlice);
//--------------------------------------------------------------------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`]
// let arrySlice = fruits.slice(1) // y fuction arry ki copy banaraha hai
// console.log(arrySlice); // [ 'orange', 'kiwi' ]
// console.log(fruits.slice(1,2)); // [ 'orange' ]
//-------------------------------------------------------------------------------------------------------
// let fruits : string[]=[`mango`,`orange`,`kiwi`,`Banana`,`Apple`,`pine apple`] 
// fruits.splice(0,1)
// fruits.splice(3,2)
// console.log(fruits) // [ 'mango', 'kiwi' ]
//--------------------------------------------------syntex of intiate Array--------------------------------------------------------------
//  let fruits : string[] = [`ibrar`]
var newArry = [1, 1, 2, 2,];
// ----------------------------------------------tupples allows limitation in array-----------------------------------------------------------------
var new1Array = ["ibrar", 1, "hassan"];
var new2Array = ["ibrar", 1,];
//------------------------------------------------------------------------------------------------------------------
var fruits = ["mango", "orange", "kiwi", "grapes", "Apple",];
// fruits.pop()
// fruits.pop()
// fruits.splice(3) // for same operation // fruits.splice(3,2)
fruits.splice(1, 1);
fruits.splice(3, 1);
console.log(fruits);
