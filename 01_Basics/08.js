// constructer sy humesha single ton object banta hai 
// hum to obj banaty hai wo obj literals hota hai.

// Pehle hum ek Symbol banate hain jis ka naam hai "Key1"
const mySym = Symbol("Key1")

// Phir hum ek object banaate hain jiska naam hai JsUser
const JsUser = {
    // Symbol ko object ki property ke taur par use kar rahe hain
    [mySym] : "myKey1",
    // Baaki properties ko normal key-value pair ki tarah define kar rahe hain
    name : "ibrar",
    "nickName" : "hassan",
    age : 27,
    location : "Karachi",
    email: "ibrarhassanansari@gamil.com",
    isLoggedIn :false,
}

// Yahan hum Symbol ki property ki type ko console mein print kar rahe hain
console.log(typeof JsUser[mySym]) // String

//print keliye
console.log(JsUser.name)    // ibrar 
console.log(JsUser["name"]) // ibrar
console.log(JsUser["nickName"]) // y dot wale mehthode sy accses nahi hosakta q ky iski key or value 2no String hai.
console.log(JsUser[mySym]) // agr obj main koi symbole to yese print hoga. abi hum ek new variable object ky bahir declear kia or osy obj main add karke print kia hai

JsUser.email = "ibrar.com" // value change
JsUser.address = "abc main stree " // key & value Add
//Object.freeze(JsUser) // ab koi change nahi hoga
delete JsUser.address // Key & value delet 
JsUser.greeting = function (){
    return $[this.name];
}

console.log(JsUser) // nichy out put hai

// {
//   name: 'ibrar',
//   nickName: 'hassan',
//   age: 27,
//   location: 'Karachi',
//   email: 'ibrar.com',
//   isLoggedIn: false,
//   greeting: [Function (anonymous)],
//   [Symbol(Key1)]: 'myKey1'
// }

console.log(JsUser.greeting());// ibrar


//-----------------------------------------------JSON.stringify()-------------------------------------

const simpleObject = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        return "Hello!";
    }
};

// JSON.stringify() method ko use karte hain
console.log(JSON.stringify(simpleObject, null, 2)); // nichy outout hai

// {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
//   }
  
// -----------------------------------------Notes:--------------------------------------

// JSON.stringify() methods aur functions ko JSON string mein include nahi karti. Isliye greet function output mein nahi dikhega.
// JSON.stringify() sirf object ki properties aur unki values ko JSON format mein convert karta hai, functions ko nahi.

//------------------------------------ Easy Way Samajhna:---------------------------------------------

// *)JSON.stringify() method object ko ek readable string format mein convert karta hai.
// *)null parameter specify karta hai ke hum koi additional changes nahi kar rahe.
// *)2 parameter JSON ko format karne ke liye spaces add karta hai, taake output zyada readable ho.


// //------------------------object.Assign Kisi 2 y 2 sy ziada object ko murgh kerke ek new object banata hai--


// let object1 = { name: "Ali" };
// let object2 = { age: 25 };

// let target = Object.assign({}, object1, object2);

// console.log(target); // { name: "Ali", age: 25 }

// //Yahaan pe Object.assign function object1 aur object2 ke properties ko ek naye object {} mein copy kar raha hai, aur phir us naye object ko target variable mein save kar raha hai. Iske baad target object ke paas name aur age dono properties hain jo object1 aur object2 se aayi hain.

// //Note Object.assign jin bhi object murge karta agr oski value same hoi to wo osy ek sumhaj kar ek hi bar print kare ga.

// let user = {

//     name : "ibrar",
//     contact : 3402324873,
//     email : "abc@gmail.com"
// }

// let user1 = {

//     name : "ibrar",
//     contact : 3402324873,
//     email : "abc@gmail.com"
// }

// let opps = Object.assign(user,user1);
//  console.log(opps)

// //-------------------------------obcjectConvertInToArryByKeysValuesAndBoth-----------------------

//  let user2 = {
//     name: "ibrar",
//     contact: 3402324873,
//     email: "abc@gmail.com"
// };

// let user3 = {
//     name: "ibrar",
//     contact: 3402324873,
//     email: "abc@gmail.com"
// };

// // Get the keys of the user object
// let keys = Object.keys(user2);
// console.log("Keys:", keys);         // ["name", "contact", "email"]

// // Get the values of the user object
// let values = Object.values(user2);
// console.log("Values:", values);    //   ["ibrar", 3402324873, "abc@gmail.com"]


// // Get both keys and values of the user object as entries
// let entries = Object.entries(user2);
// console.log("Entries:", entries); ///[["name", "ibrar"], ["contact", 3402324873], ["email", "abc@gmail.com"]]

//---------------------------------------Key & Value Add by Dot Notation---------------------------------------------------

//This is the simplest and most common way to add a property to an object.

// let user4 = { 
//     name: "Ibrar",
//     contactNo: 3470243582,
//     email: "ibrar@gmail.com"
// };

// user4.age = 30;  // Adding a new property
// console.log(user);

//---------------------------------Key & Value Add By-Bracket Notation:-------------------------------------

// This is useful when the property name is dynamic or not a valid identifier.

// user4["address"] = "123 Main St";
// console.log(user4);

//--------------------------------------- Object.defineProperty:----Nichy define kia hai-------------------------------------
//Agar tum user object main ek property add karna chahte ho aur usay zyada control ke sath set karna chahte ho, toh tum Object.defineProperty method ka use kar sakte ho. Is tarah tum specify kar sakte ho ke wo property writable (change ho sakti hai ya nahi), enumerable (loops main show hogi ya nahi), aur configurable (delete ho sakti hai ya nahi) hai ya nahi.
// This method allows more control over the property being added, such as setting it to be read-only or not enumerable.

// Pehle user object define karte hain
let user5 = {};

// Ab country property add karte hain `Object.defineProperty` ke sath
Object.defineProperty(user5, 'country', {
    value: 'USA',         // Property ka value
    writable: true,       // Ye value change ho sakti hai
    enumerable: true,     // Ye property loops main nazar ayegi
    configurable: true    // Ye property delete ya change ho sakti hai
});

// console.log(user5);
//y out out hai--------{ country: 'USA' }
// Is example main, humne user object main country property add ki aur usay 'USA' set kiya. Humne specify kiya ke:

// writable: true matlab country property ka value change kiya ja sakta hai.
// enumerable: true matlab ye property loops (jaise for...in) main show hogi.
// configurable: true matlab ye property delete ya change kiya ja sakta hai.
//---------------------------------------------------------------------------------------------------
//Yani user object main country property add ho gayi hai aur uska value 'USA' set ho gaya hai. Ab tum is property ko access kar sakte ho:

//console.log(user5.country); // Output: 'USA'

// Agar tum user.country ka value change karna chaho:

user5.country = 'Canada';
//console.log(user5.country); // Output: 'Canada'

//Aur agar tumhe property ko delete karna ho:

delete user5.country;
//console.log(user5); // Output: {}

//------------------------------------Spread Operator:------------------------------------------------

//This method creates a new object with the added properties, useful for creating immutable updates.
//Spread operator (...) ka use karte huay hum ek naya object bana sakte hain jo existing object ki sari properties ko include kare aur kuch nayi properties bhi add kare. Ye tarika immutable updates ke liye bahut useful hai, matlab existing object ko change kiye bina naya object banana.

// Pehle user object define karte hain
let user6 = {
    name: 'Ali',
    age: 25
};

// Ab hum user object main hobby property add karte hain spread operator ka use kar ke
user6 = { ...user6, hobby: 'Reading' };

//console.log(user6);

//Is example main humne pehle user object define kiya jisme name aur age properties hain. Phir humne spread operator ka use kiya ...user jo ke existing user object ki sari properties ko naya object main copy kar deta hai aur saath hi hobby property add kiya.

// ----y out put hia 
// {
//     name: 'Ali',
//     age: 25,
//     hobby: 'Reading'
// }

// Ab tumhare user object main hobby property bhi add ho gayi hai bina existing user object ko modify kiye.

// Agar tum koi dusri property bhi add karna chaho ya existing property ko update karna chaho:


// name property ko update karte hain aur city property add karte hain
user6 = { ...user6, name: 'Ahmed', city: 'Lahore' };

//console.log(user6);

// Ab y out put hoga
// {
//     name: 'Ahmed',
//     age: 25,
//     hobby: 'Reading',
//     city: 'Lahore'
// }


//-----------------------------------------Object.setPrototypeOf:----------------------------------------

// Ab hum Object.setPrototypeOf ka use samajhte hain. Ye method kisi specified object ka prototype (internal [[Prototype]] property) ko dusre object ya null pe set kar deta hai.

// Example ke zariye samajhte hain:

// Pehle user object define karte hain
let user = {
    name: 'Ali',
    age: 25
};

// Ek object define karte hain additional properties ke sath
const additionalProperties = {
    favoriteColor: 'blue',
    greet: function() {
        //console.log(`Hello, my name is ${this.name}`);
    }
};

// Ab hum user object ka prototype additionalProperties object pe set karte hain
Object.setPrototypeOf(user, additionalProperties);

// Ab user object se greet function call karte hain
user.greet(); //----output---Hello, my name is Ali

// Is example main:

// 1)user object define kiya jisme name aur age properties hain.
// 2)additionalProperties object define kiya jisme favoriteColor property aur greet function hain.
// 3)Object.setPrototypeOf(user, additionalProperties) ka use karke user object ka prototype additionalProperties object pe set kiya.
// Jab hum user.greet() call karte hain, to output hoga:

// Iska matlab greet function, jo additionalProperties object ka part tha, ab user object se access kiya ja sakta hai kyunki humne user ka prototype additionalProperties pe set kiya hai. Aur this.name user object ki name property ko refer karta hai.

// Is tarah se tum Object.setPrototypeOf ka use karke ek object ka prototype dusre object pe set kar sakte ho, jis se wo object dusre object ke properties aur methods ko inherit kar leta hai.

// ---------------------------------------------Prototype Ka Faida:--------------------------------------
// Tum multiple objects mein common properties aur methods ko share kar sakte ho bina unhe har object mein duplicate kiye.
// Ye inheritance ka ek tarika hai jo objects ko reusability aur flexibility deta hai.


// ----------------------------------------------Prototype Chain:--------------------------------------
// Jab tum kisi object ki property ya method ko access karte ho aur wo us object mein nahi milti, to JavaScript uske prototype chain mein search karti hai jab tak usse wo property ya method mil jaye ya chain end ho jaye.







