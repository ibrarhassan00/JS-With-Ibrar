let personName = ["ibrar","hassan","ali","hassan"]
console.log(personName);           // [ 'ibrar', 'hassan', 'ali', 'hassan' ]
console.log(typeof personName);   // object
console.log(personName.length);      // 4    .lenght y property hai 

console.log(personName[2]);          // ali ( index 0 sy start hota hai 02 indec per ali isliye print ali howa hai )
console.log(personName[5]);          // undefined ( agr koi yesy element ko print karwa rahin hain jo arry nahi hai to undefine dega )

console.log(personName.indexOf("ali"));  // element ali ki position ko print karega as per index ( agr koi yesa elemet pass karahin ho arry nahi hai to y -1 show karta hai)
console.log(personName.includes("ali"))  // checking and reply with true or faluse 

//-------------------------------------// value replace in array ---------------------------------------------

personName[1]="Bilal"

console.log(personName)  // [ 'ibrar', 'Bilal', 'ali', 'hassan' ]

//-------------------------------String bhi object hota hai but string ky word ko index wise change nahi karsakty hain---------

let lastName = new String ("ibrar")
lastName[0]="b"
console.log(lastName[0]); //i

//---------------------------------array convert into siting----------------------------------------

console.log(personName);           // [ 'ibrar', 'hassan', 'ali', 'hassan' ]    ( orignal Arry )
console.log(personName.toString()) // ibrar,hassan,ali,hassan                  (String main convert hone ky bad)

//----------------------------------slice just arry ki copy banata hai ( 0 , 5 )-- ( akhri number ko ignor karta hai )ap jo bhi index number do sirif osko print karaye ga , start to end tak ka number desakty hain kahan sy kahan tako print karana hai 

console.log(personName);           // [ 'ibrar', 'hassan', 'ali', 'hassan' ] 
console.log(personName.slice(0,2)); // [ 'ibrar', 'hassan' ]

//--------------------------------//Splice--Value delet or replace on same position--------------------------------------------

let personName1 = ["ibrar","hassan","ali","hassan"]

personName1.splice(1,0,"Imran") //index one per jake 0 ( 0 matlub wahi index element jis per start kia hai ) take ki value ko delet karo or inki jaga ( Imran ko add karo )

console.log(personName1) // [ 'ibrar', 'Imran', 'hassan', 'ali', 'hassan' ]

//----------------------------------Arry Mehthode-------------------------------------------------------------------------

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

myArr.push(6)   // add element in last
myArr.push(7)   // add element in last
myArr.pop()     // last element remove         ( y removed value ko return bhi karta )

myArr.unshift(9) // add element in start 
myArr.shift()    // remove element from start  ( y removed value ko return bhi karta )

const newArr = myArr.join()     // .join() mehthode arry ko string banany keliye hota hai

console.log(myArr);             // output arry
console.log( newArr);           // output string
console.log( typeof newArr);       // String

//----------------------------------------------Add Arry into Arry by using .push----------------------------------------

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const pak_heros = [ "artugrul ghazi","usman","suleman shah"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);         // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]   
console.log(marvel_heros[3][1]);   // flash
 
//-----------------------------------------------Add arry into by using .concat------------------------------------------------

const allHeros = marvel_heros.concat(dc_heros,pak_heros)

console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman','artugrul ghazi','usman','suleman shah' ]

//-----------------------------------------------Add arry into arry by (...) with variable name & sepraded by ( , ) 

const all_new_heros = [...marvel_heros, ...dc_heros]  

console.log(all_new_heros);   // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//------------------------make single arry form multiple layer arry by using .flat()---------------------------------

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);                           

// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

//--------------------------------------checking any data is arry or not by using .isarry(variable name or data)----------------

console.log(Array.isArray("Hitesh"))   /// false

//-----------------------------------------making any string into arry by using .form()----------------------------

console.log(Array.from("Hitesh"))      ///  [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})) // interesting

//-------------------------make single arry by different variable data by using .of(varialeName)-------------------

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]

.sort()
// https://www.youtube.com/watch?v=hmg_Tv753No