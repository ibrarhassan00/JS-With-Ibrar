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

//Dot Notation:

//This is the simplest and most common way to add a property to an object.

// let user = { 
//     name: "Ibrar",
//     contactNo: 3470243582,
//     email: "ibrar@gmail.com"
// };

// user.age = 30;  // Adding a new property
// console.log(user);

// Bracket Notation:

// This is useful when the property name is dynamic or not a valid identifier.

// user["address"] = "123 Main St";
// console.log(user);

// Object.defineProperty:

// This method allows more control over the property being added, such as setting it to be read-only or not enumerable.

// Object.defineProperty(user, 'country', {
//     value: 'USA',
//     writable: true,  // Can be changed
//     enumerable: true,  // Will show up in loops
//     configurable: true  // Can be deleted or changed
// });
// console.log(user);

// Spread Operator:

// This method creates a new object with the added properties, useful for creating immutable updates.
// user = { ...user, hobby: "Reading" };
// console.log(user);

// Object.setPrototypeOf:

// This method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
// const additionalProperties = {
//     favoriteColor: 'blue',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// Object.setPrototypeOf(user, additionalProperties);
// user.greet();
