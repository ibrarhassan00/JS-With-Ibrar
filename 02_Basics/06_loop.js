// for (let i = 0 ; i < 5 ; i++)
    // {console.log(`${i} ibrar`)} // y print kare ga 0 ibrar to 04 ibrar tak

// for (let i = 10 ; i > 0 ; i--)
    // {console.log(`${i} ibrar`)} // y print kareg ga 10 ibrar to 0 ibrar tak

// for (let i = 10 ; i > 0 ; i=i-2)
//     {console.log(`${i} ibrar`)} // 2 sy decriptment kia hai matlub 10 ibrar ,8,6,4, or 2 Ibrar.

// for (let i = 0 ; i < 10 ; i=i+2) 
    // {console.log(`${i} ibrar`)} // 2 sy incrimptment kia hai matlub 0 ibrar 2,4,6, or 8ibrar.

//--------------------------------------how print arry vaule--------------------------------------------------

// let otherNumber = [242, 256, 285, 2146, 249, 2565, 2546];

// for(let i = 0; i < otherNumber.length; i++){
//         console.log(`${i} ${otherNumber[i]}`); // y index ky against value print kia hai with index
//}

// 0 242 1 256 2 285 3 2146 4 249 5 2565 6 2546 // like this.


// for(let i = otherNumber.length -1 ; i >= 0 ; i--){
//         console.log(`${i} ${otherNumber[i]}`); // y index ky against value print kia hai with index
//} 

// y unta print kare ga -1 sy 0 index tak .6 2546 5 2565 4 249 3 2146 2 285 1 256 0 242




//----------------------------------------------try with string-------------------------------------------------------



let myString = "ibrar hassan"

// for (let i = 0 ; i <myString.length ; i++ ){console.log(`${i} ${myString[i]} `)}

// for (let i = myString.length -1 ; i >=0 ; i-- ){console.log(`${i} ${myString[i]} `)}

//---------------------------------------------------loop with table--------------------------------------------------

for (let i = 0 ; i <=10 ; i++ ){

for (let j = 0 ; j <=10 ; j++){

    const multilication = i*j

    console.log(`${i}*${j}=${multilication}`)
}

    console.log("next table start ")
}