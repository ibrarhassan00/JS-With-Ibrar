

function addTowNumeber (num1, num2){
    const result = num1 + num2;
    return result ;
}

// console.log(addTowNumeber(5,6))

function myName (userNmae){
    return `${userNmae} just logged in `
}
 
console.log(myName("ibrar")) // ibrar just logged in 
console.log(myName(""))  // just logged in 
console.log(myName()) // undefined just logged in 

//----------------------------------------------------------------------------------------------------

function myName1 (userNmae){
    if(userNmae === undefined){
        console.log("Please Enter a username")
      return;
    }
    return `${userNmae} just logged in `
}
 
// console.log(myName1("ibrar")) // ibrar just logged in 
// console.log(myName1(""))  // just logged in 
// console.log(myName1()) // Please Enter a username undefined

//----------------------------------------------------------------------------------------------------

function myName2 (userNmae){
    if(!userNmae){
        console.log("Please Enter a username")
      return;
    }
    return `${userNmae} just logged in `
}
 
// console.log(myName2("ibrar")) // ibrar just logged in 
// console.log(myName2(""))  // Please Enter a username undefined
// console.log(myName2()) // Please Enter a username undefined

//-----------------------------------------Default Vaue ---------------------------------------------------------

function myName3 (userNmae="Default Ibrar"){
    if(!userNmae){
        console.log("Please Enter a username")
      return;
    }
    return `${userNmae} just logged in `
}
 
// console.log(myName3("ibrar")) // ibrar just logged in 
// console.log(myName3(""))  // just logged in & undefine
// console.log(myName3()) // Default Ibrar just logged in