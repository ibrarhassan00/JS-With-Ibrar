//------------------------object.Assign Kisi 2 y 2 sy ziada object ko murgh kerke ek new object banata hai--


let object1 = { name: "Ali" };
let object2 = { age: 25 };

let target = Object.assign({}, object1, object2);

console.log(target); // { name: "Ali", age: 25 }

//Yahaan pe Object.assign function object1 aur object2 ke properties ko ek naye object {} mein copy kar raha hai, aur phir us naye object ko target variable mein save kar raha hai. Iske baad target object ke paas name aur age dono properties hain jo object1 aur object2 se aayi hain.

//Note Object.assign jin bhi object murge karta agr oski value same hoi to wo osy ek sumhaj kar ek hi bar print kare ga.

let user = {

    name : "ibrar",
    contact : 3402324873,
    email : "abc@gmail.com"
}

let user1 = {

    name : "ibrar",
    contact : 3402324873,
    email : "abc@gmail.com"
}

let opps = Object.assign(user,user1);
 console.log(opps)

//-------------------------------obcjectConvertInToArryByKeysValuesAndBoth-----------------------

 let user2 = {
    name: "ibrar",
    contact: 3402324873,
    email: "abc@gmail.com"
};

let user3 = {
    name: "ibrar",
    contact: 3402324873,
    email: "abc@gmail.com"
};

// Get the keys of the user object
let keys = Object.keys(user2);
console.log("Keys:", keys);         // ["name", "contact", "email"]

// Get the values of the user object
let values = Object.values(user2);
console.log("Values:", values);    //   ["ibrar", 3402324873, "abc@gmail.com"]


// Get both keys and values of the user object as entries
let entries = Object.entries(user2);
console.log("Entries:", entries); ///[["name", "ibrar"], ["contact", 3402324873], ["email", "abc@gmail.com"]]

