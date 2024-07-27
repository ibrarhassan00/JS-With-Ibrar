
//------------------------------------Destructuring----------------------------------------------------

const user0 = {
    name: "John",   // user.name
    age: 30,        // user.age
    city: "New York" // user.city
};

// Destructuring
const { name, age, city } = user0;  // Variables created: name, age, city

// Values assigned:
console.log(name); // Output: John  (name variable created and assigned user.name)
console.log(age);  // Output: 30   (age variable created and assigned user.age)
console.log(city); // Output: New York (city variable created and assigned user.city)

//------------------------------------------------------Renaming Variables in Destructuring-----------------------------
const user = {
    name: "John",
    age: 30,
    city: "New York"
};

// Destructuring with renaming
const { name: userName, age: userAge, city: userCity } = user;

console.log(userName); // Output: John
console.log(userAge);  // Output: 30
console.log(userCity); // Output: New York
