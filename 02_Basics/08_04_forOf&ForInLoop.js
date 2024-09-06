//-------------------for of loop just arry or string ko start to end print kartahia ----------------------------------------

// let user = "ibrar"
// for (let a of user ){
//     console.log(a); // ibrar y verticale main print how alphabed alg alg 
// }

// let userConstact = [3,4,0,2,3,2,4,8,7,3]
// for (let n of userConstact){
//     console.log(n);                       // 3402324873 y bhi vertical main print hoga alg alg 
// }

//---------------------------------for in loop only object ki key & value ko print keliye use karte hain -------------------

const javauser = {

    name : "ibrar",
    employee : 80018686,
    contact : 3402324873 

}

for (let key in javauser){
    console.log(`${key} ${javauser[key]}`)
}

/*name ibrar
employee 80018686
contact 3402324873*/