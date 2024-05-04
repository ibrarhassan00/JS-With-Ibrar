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


type User = {

    name:string;
    age:number;
    role:string;
    
    children ?: {
          name:string;
          age : number;   
    }
    
    }
    
    let user6 : User = {
        name:"ibrar",
        age : 23,
        role:"betular",
        // children:{
        //     name :" boy",
        //     age : 1,
        // }
    };
    
    console.log(user6);
