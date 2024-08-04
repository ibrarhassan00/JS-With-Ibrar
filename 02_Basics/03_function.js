

//---------------------------------restOperator----------------

function calculateCardPrice(...num1){

    return num1;
}

console.log(calculateCardPrice(200,500,600,800)) //[ 200, 500, 600, 800 ]

function calculatePrice(val1, val2, ...num1){

    return num1;
}

console.log(calculatePrice(200,500,600,800)) //[ 600, 800 ] 200 or 500 val1 or val2 Parameter main gai hai q ky print sirif num1 karaya tha islie [ 600, 800 ] aya

//-----------------------------------------------------------------------------------------------------------
let user = {
    userName :"ibrar",
    price : 99

}

function handleObject (anyObject){
return console.log(`User Name is ${anyObject.userName} & price is ${anyObject.price}`)
}

handleObject(user) // User Name is ibrar & Pprice is 

handleObject({
    userName : "Ali",
    price : 98
}) // User Name is Ali & price is 98 hum function ko koi bhi value de sakty hain hai argument main 01 object already decleard ho os ka name pass kardo 02 argument main pora object bana kar pass kardo

//--------------------------------------------------------------------------------------------------

let thisArry = [ 200,500,700,]

function returnSecValue (getArry){
    return getArry[1]
}
    
console.log(returnSecValue(thisArry)); // 500

console.log(returnSecValue([200, 500, 700])); //500 same like Oject jese uper hai

//---------------------------------------------------------------------------------------------------------

