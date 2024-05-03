// \n newline
// \t create specific space
// \r remove backwords
// length
// toUpperCase() is main specific alphabed ko nahi karsakty pora change hoga
// toLowerCase()
// slice() is ke argument hum index value pass karengy jo index hoga osy phaly ke sare words ko remove karde ga ( 0-index )


console.log("ibrarI".toUpperCase()); // IBRARI
console.log("ibrarI".toLowerCase()); //ibrari
console.log("ibrarI".slice(2)); // rarI
console.log("ibrarI".slice(2,-1)); // rar
console.log("ibrarI".charCodeAt(5)); // 73
console.log("ibrarI".charCodeAt(0)); // 105
console.log("ibrarI".charAt(2)); // r
console.log("ibrarI".indexOf("i")); // 0
console.log("ibrar".replace("ibrar","hassan")); // hassan
console.log("ibrar hassan is a boy as well as ibrar is a developer".replaceAll("ibrar","hassan")); // all ibrar replaced by hassan

let lang = "java_Script_Phython";
let arr = lang.split("_");
console.log(arr); // [ 'java', 'Script', 'Phython' ]
console.log(arr[0]); // java

console.log("     ibrar   Hassan    ".trim()); // ibrar   Hassan
console.log("     ibrar   Hassan    ".trimStart()); // ibrar   Hassan
console.log("     ibrar   Hassan    ".trimEnd()); //      ibrar   Hassan

let id = 42401
console.log("ibrarHassan".concat(" is a boy ").concat(id)); // ibrarHassan is a boy 42401
