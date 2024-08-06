

function step01 (){
    let user1="ibrar";

    function step02(){
        let user2 = "hassan";
        console.log(user1);
        return user2;
    }
    console.log(step02());
    
}

step01()

// Function step01 define ki hai:

// Jab yeh function call hoga, yeh ek variable user1 banayega jismein "ibrar" ki value hogi.
// Function step02 ko step01 ke andar define kiya hai:

// Yeh nested function hai jo step01 ke andar hai.
// Is function main ek naya variable user2 banayega jismein "hassan" ki value hogi.
// Phir yeh console pe user1 ki value print karega (jo "ibrar" hai).
// Aur akhir mein user2 ko return karega.
// step02 ko step01 ke andar call kiya hai:

// Jab step02 call hoga, yeh user1 ko console pe print karega (jo "ibrar" hai).
// Phir yeh user2 ko return karega (jo "hassan" hai).
// Phir step01 step02 ka return value console pe print karega, jo "hassan" hoga.
// Akhir main step01 ko call kiya hai:

// Jab step01 call hota hai, to upar wali sari steps execute hongi.
// Pehle step02 call hoga, "ibrar" print hoga, phir "hassan" return hoga aur phir "hassan" print hoga.

//------------------------------Same With IF Else-----------------------------------------------------

if (true){
    let user = "ibrar hassab"

    if (user==="ibrar hassab"){

        let freshUser = " Ali"

        console.log(user + freshUser);
    }
    
    
}

// Step-by-Step Execution:
// Pehla if (true) execute hoga, to andar ka code run hoga.
// let user = "ibrar hassab"; line run hogi aur user set ho jayega.
// Dusra if (user === "ibrar hassab") check karega agar user ki value "ibrar hassab" hai, jo ke true hai.
// Phir let freshUser = " Ali"; line run hogi aur freshUser set ho jayega.
// Akhir main console.log(user + freshUser); line run hogi aur "ibrar hassab Ali" print hoga.


//---------------02 alg alg tarike se function ko define kia hia ------------------------------
//01 normal function 
//02 function define with variable 

// Note 01 ko function sy paly y bad main excute karo no issue but variable function alway define ky bad excute hoga.


console.log(addOne(3)) // Allow

function addOne (num1){
      return num1+1
}

console.log(addOne(3))

//.............................................

//console.log(addTow(5)) // NOT Allow

let addTow = function (num){
    return num+2
}

console.log(addTow(5))