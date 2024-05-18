// let user1:{
//     name : string;
//     age : number;
//     role : string;

// };

// user1 = {
//     name :"ibrar",
//     age : 23,
//     role : " ibrar ",
// }
// ---------------------------------------------1st-----------------------------------------------------------------

// type User = {

// name:string;
// age:number;
// role:string;

// }

// let user2 : User = {
//     name:"ibrar",
//     age : 23,
//     role:"betular"
// };

// let user3 : User = {
//     name:"hassan",
//     age : 24,
//     role:"betular"
// };

// let user4 : User = {
//     name:"ali",
//     age : 25,
//     role:"father"
// };

// console.log(user2,user3,user4
// )
//-------------------------------------------------------2nd-------------------------------------------------------------

// type User = {

// name:string;
// age:number;
// role:string;

// children : {
//       name:string;
//       age : number;   
// }

// }

// let user5 : User = {
//     name:"ibrar",
//     age : 23,
//     role:"betular",
//     children:{
//         name :" boy",
//         age : 1,
//     }
// };

// console.log(user5.children);

//----------------------------------------------------------------3rd----------------------------------------------------------


// type User = {

//     name:string;
//     age:number;
//     role:string;
    
//     children ?: {
//           name:string;
//           age : number;   
//     }
    
//     }
    
//     let user6 : User = {
//         name:"ibrar",
//         age : 23,
//         role:"betular",
//         // children:{
//         //     name :" boy",
//         //     age : 1,
//         // }
//     };
    
//     console.log(user6);

//--------------------------------------4th------------------------------------------------------------------------


// type User = {

//     name:string;
//     age:number;
//     role:string;
    
//     children ?: {
//           name:string;
//           age ?: number;   
//     }
    
//     }
    
//     let user7 : User = {
//         name:"ibar",
//         age : 23,
//         role:"son",

//         children :{
//             name :" boy",
//         }
//     };
    
//     console.log(user7.children?.name);

    //--------------------------------------------------5th-------------------------------------------------------------

//--------------------------------Type Littrels-------------------------------------------------------------------------

// let trafficlight:"Red"="Red";
// let age:18 = 18;

//-------------------------------------------------------6th- Using Pipe Singh -----------------------------------------------

// let trafficlight1:"Red"|"Yellow"|"Green"="Green";
// let age1:18 = 18;

// console.log(trafficlight1);

//------------------------------------------------------7th----string+numner----------------------------------------------

// let trafficlight2:"Red"|"Yellow"|"Green"|52 ="Green";
// let age2:18 = 18;

// console.log(trafficlight2);

//------------------------------------------------------8th------------------------------------------------------------------

// let newvariable : string|number|boolean = true;

// console.log(newvariable);

//----------------------------------------------------------9th-------------------------------------------------------------

// type student ={
//     name:string;
//     rollNumber:number;
// }

// type teacher={

//     name:string;
//     experiance:number;
// }

// let student1:student={

//     name:"ibrar",
//     rollNumber: 5,
// }

// let teacher1:teacher={
//     name:"hassan",
//     experiance:123
// }

// console.log(`this is stutdent details ${student1} and this is a teacher details ${teacher1}`);

//-------------------------------------By Using intersection singh & we put value all 02 types-------------------------------------------
//-------------------------------------common proties interction ek bar utha ta hai.------------------------------------------------
//---------------------------------abhi ky case name common hai -------------------------------------------------------------------

// type student ={
//     name:string;
//     rollNumber:number;
// }

// type teacher={

//     name:string;
//     experiance:number;
// }


// let both1 :student & teacher={
//     name:"zaid",
//     experiance:25,
//     rollNumber:4321,
// }

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
 let newArry: Array<number> = [ 1,1,2,2,]

 // ----------------------------------------------tupples allows limitation in array-----------------------------------------------------------------


 let new1Array: [ string, number, string ] = [`ibrar`,1,`hassan`]
 let new2Array: [ string, number, string? ] = [`ibrar`,1,]


//------------------------------------------------------------------------------------------------------------------


let fruits : string[]=[`mango`,`orange`,`kiwi`,`grapes`,`Apple`,]

// fruits.pop()
// fruits.pop()

// fruits.splice(3) // for same operation // fruits.splice(3,2)

fruits.splice(1,1)
fruits.splice(3,1)

// orange and apple has been removed [ 'mango', 'kiwi', 'grapes' ]

// console.log(fruits);

//----------------------------------------class 18-05-2024---------------------------------------------------

//enum // alternate typelitters union ka

enum color{Red, 
    Green,
    Yellow,} 

// let trafficligh: color = color.Red // call procdure of enum

// console.log(color.Red); // 0 output
// console.log(color["Yellow"]) // 2   output
// console.log(color[2]);      // Yellow

//----------------------------------------------for chaning thw index address---------------------------------------
// Note enum main index address change hosakta hai , hum jis bhi value ka address change karengy agly value ka address khud contiue kardega if we change middle value index so typescript provide address to value like this.


enum color1{Red, 
    Green = 2,
    Yellow,} // 2 put for change index address now Red=0 , Green ko hum ny =2 dediye to yellow,03 hojaye ga.

// let trafficligh: color = color.Red // call procdure of enum

// console.log(color1.Red); // 0 output
// console.log(color1["Yellow"]) //  3  output
// console.log(color1[2]);      // Green

//------------------------------------------------------------Closed-------------------------------------------------







