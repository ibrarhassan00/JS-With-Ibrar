// let jsUser = {
//     name : "ibrar hassab",
//     contact : 123456789,
//     welcomMassage : function (name="jahangir"){
//         console.log(`${this.name} welcom to website`)
//         console.log(`${name} welcom to website`)
//     }
// }

// jsUser.welcomMassage()
// jsUser.name="ali"
// jsUser.welcomMassage("hassan")

//---------------------------------------------------------------------------------------

let jsUser1 = {
    name : "ibrar hassab",
    contact : 123456789,
    welcomMassage : function (){
        console.log(`${this.name} welcom to website`);
        console.log(this);
    }
}

jsUser1.welcomMassage() // nichy out put hai
// ibrar hassab welcom to website
// {
//   name: 'ibrar hassab',
//   contact: 123456789,
//   welcomMassage: [Function: welcomMassage]
// }


jsUser1.name="ali" // ab name change kia hai

jsUser1.welcomMassage() // nichy out put hai
// ibrar hassab welcom to website
// {
//   name: 'ibrar hassab',
//   contact: 123456789,
//   welcomMassage: [Function: welcomMassage]
// }

//------------------------------------------------------------------------------------------

function chai (){
    let user = "netUser";
    console.log(this.user);
    return user;
    
}

chai(); // undefined q ky this function per work nahi karta.

const chaicode = function  (){
    let user = "netUser";
    console.log(this.user);
    return user;
    
}

chaicode() //chai(); // undefined q ky this function per work nahi karta.

//----------------------------arrowFunction--------------------------------


const errow = () => {
    let user = "netUser";
    console.log(this.user);
    return user;
    
}

errow(); // undefined Arrow Function main bhi this kam nahi karta hai 

// arrow function syntex ()=>{}

let addTow= (num1,num2)=>{
    let result = num1 + num2;
    return result;
}

console.log(addTow(2,5)); // 7 

let addTow1= (num1,num2)=>  num1 + num2;
    
console.log(addTow1(2,5)); // 7 


let addTow2= (num1,num2)=>  (num1 + num2);
    
console.log(addTow2(2,5)); // 7 

let addTow3= (num1,num2)=>  {userName:"ibrar"}
    
console.log(addTow3(2,5)); // undefined q ky {} bracket ky sath return likhna zarori hai

let addTow4= (num1,num2)=>  {return {userName:"ibrar"} }
    
console.log(addTow4(2,5)); // { userName: 'ibrar' }

