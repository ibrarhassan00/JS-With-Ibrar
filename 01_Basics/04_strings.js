// \n newline
// \t create specific space
// \r remove backwords
// length
// toUpperCase() is main specific alphabed ko nahi karsakty pora change hoga
// toLowerCase()
// slice() is ke argument hum index value pass karengy jo index hoga osy phaly ke sare words ko remove karde ga ( 0-index )
// charCodeAt() is ke argument hum index value pass karengy number main os per jo alphabet hoga oska ek unique number hota wo y output dega. all alphabed small 0r capital letter ki value alg alg hoti hai. 79 sy 122 for capital
// charAt() is ke argument hum index value pass karengy number main os per jo alphabet hoga osko y print karde ga agr koi yesa number deten hain jis per koi word nahi to kuch bhi print nahi hoga
// indexOf() is ke argument hum alphabet pass karte like a string y osy number data sy match karke index value show karta hai . agr koi word dia hai jo data main nahi to y -1 print kare ga


console.log("ibrarI".toUpperCase()); // IBRARI
console.log("ibrarI".toLowerCase()); //ibrari
console.log("ibrarI".slice(2)); // rarI
console.log("ibrarI".slice(2,-1)); // rar
console.log("ibrarI".charCodeAt(5)); // 73
console.log("ibrarI".charCodeAt(0)); // 105
console.log("ibrarI".charAt(2)); // r
console.log("ibrarI".indexOf("i")); // 0
console.log("ibrarIbrar".lastIndexOf("I")); // 5
console.log("ibrar".replace("ibrar","hassan")); // hassan
console.log("ibrar hassan is a boy as well as ibrar is a developer".replaceAll("ibrar","hassan")); // all ibrar replaced by hassan

let repeat = "ibrar".repeat(2);
console.log(repeat); // ibraribrar

let lang = "java_Script_Phython";
let arr = lang.split("_");
console.log(arr); // [ 'java', 'Script', 'Phython' ]
console.log(arr[0]); // java

console.log("     ibrar   Hassan    ".trim()); // ibrar   Hassan
console.log("     ibrar   Hassan    ".trimStart()); // ibrar   Hassan
console.log("     ibrar   Hassan    ".trimEnd()); //      ibrar   Hassan

let id = 42401
console.log("ibrarHassan".concat(" is a boy ").concat(id)); // ibrarHassan is a boy 42401

let name="ibrar hassan";
let check=name.includes("ibrar");
console.log(check); // true

let padVariable= "ibrar";
let padVariableCheck=padVariable.padEnd(10,"*");
let padVariableCheck1=padVariable.padStart(10,"0");
// console.log(`pad apply end ${padVariableCheck} and this is pad apply at start ${padVariableCheck1}`); // pad apply start ibrar***** and this is pad apply at end 00000ibrar


let startsWith = "ibrar hassan".startsWith("ibrar");
let endWith = "ibrar Hassan".endsWith("Hassan");
let startsWith01 = "ibrar hassan".startsWith("I")
// console.log(`this start with ${startsWith} and this End with ${endWith} one more startwith ${startsWith01}`); //this start with true and this End with true one more startwith false



// const anotherstring = "hitesh-hc".slice(0, 4);
// console.log(anotherstring); // hite 

// const anotherstring1="hitesh-hc".slice(-8,4);
// console.log(anotherstring1); // h i t e s h - h c  so -8 is "i" out is "ite" -8 1st isliye start with "i" 2nd is 4 means 0 to 4 liken 1st humny -8 lia hai jo posite sy 1 hai isliye -8 or 1 sy phaly ki value ko print nahi kare ga
//                              // 0 1 2 3 4 5 6 7 8  so 4 is "s"

const string = "hitesh-hc".slice(-2, 4);
console.log(string); // out nothing q 1st -2 jo posite main 7 hai 2nd value 4 hai jo ky index mian 1st vale ke under hai.

const substring = "hitesh-hc".substring(-2, 4);
console.log(substring); // substring - value ko 0 bana deta hian isliye 0 sy sart kare per "hite" is output.

let str0 = "Hello world welcome to JavaScript!";
let pos0 = str.search("welcome");
console.log(pos0); // Output: 12

let str = "Hello world, welcome to JavaScript!";
let pos = str.search("Python");
console.log(pos); // Output: -1

