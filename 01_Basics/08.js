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

console.log(user5);
//y out out hai--------{ country: 'USA' }
// Is example main, humne user object main country property add ki aur usay 'USA' set kiya. Humne specify kiya ke:

// writable: true matlab country property ka value change kiya ja sakta hai.
// enumerable: true matlab ye property loops (jaise for...in) main show hogi.
// configurable: true matlab ye property delete ya change kiya ja sakta hai.
//---------------------------------------------------------------------------------------------------
//Yani user object main country property add ho gayi hai aur uska value 'USA' set ho gaya hai. Ab tum is property ko access kar sakte ho:

console.log(user5.country); // Output: 'USA'

// Agar tum user.country ka value change karna chaho:

user5.country = 'Canada';
console.log(user5.country); // Output: 'Canada'

//Aur agar tumhe property ko delete karna ho:

delete user5.country;
console.log(user5); // Output: {}

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

console.log(user6);

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

console.log(user6);

// Ab y out put hoga
// {
//     name: 'Ahmed',
//     age: 25,
//     hobby: 'Reading',
//     city: 'Lahore'
// }


//-----------------------------------------Object.setPrototypeOf:----------------------------------------

// This method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
// const additionalProperties = {
//     favoriteColor: 'blue',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// Object.setPrototypeOf(user, additionalProperties);
// user.greet();
