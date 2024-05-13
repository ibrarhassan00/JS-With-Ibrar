let personName = ["ibrar","hassan","ali","hassan"]
// console.log(personName);           // [ 'ibrar', 'hassan', 'ali', 'hassan' ]
// console.log(typeof personName);   // object
// console.log(personName.length);      // 4    .lenght y property hai 

// console.log(personName[2]);          // ali ( index 0 sy start hota hai 02 indec per ali isliye print ali howa hai )
// console.log(personName[5]);          // undefined ( agr koi yesy element ko print karwa rahin hain jo arry nahi hai to undefine dega )

// console.log(personName.indexOf("ali"));  // index value ky agaist arry jo element ho os position per os ko print karaye ga. ( agr koi yesa elemet pass karahin ho arry nahi hai to y -1 show karta hai)
// console.log(personName.includes("ali"))  // checking and reply with true or faluse 

//-------------------------------------// value replace in array ---------------------------------------------

// personName[1]="Bilal"

// console.log(personName)  // [ 'ibrar', 'Bilal', 'ali', 'hassan' ]

//-------------------------------String bhi object hota hai but string ky word ko index wise change nahi karsakty hain---------

// let lastName = new String ("ibrar")
// lastName[0]="b"
// console.log(lastName[0]); //i

//---------------------------------array convert into siting----------------------------------------

// console.log(personName);           // [ 'ibrar', 'hassan', 'ali', 'hassan' ]    ( orignal Arry )
// console.log(personName.toString()) // ibrar,hassan,ali,hassan                  (String main convert hone ky bad)

//----------------------------------slice just arry ki copy banata hai ( 0 , 5 )-- ( akhri number ko ignor karta hai )ap jo bhi index number do sirif osko print karaye ga , start to end tak ka number desakty hain kahan sy kahan tako print karana hai 

// console.log(personName);           // [ 'ibrar', 'hassan', 'ali', 'hassan' ] 
//console.log(personName.slice(0,2)); // [ 'ibrar', 'hassan' ]

//--------------------------------//Splice--Value delet or replace on same position--------------------------------------------

// let personName1 = ["ibrar","hassan","ali","hassan"]

// personName1.splice(1,0,"Imran") //index  per jake 0 take ki value ko delet karo or inki jaga ( Imran ko add karo )

// console.log(personName1) // [ 'ibrar', 'Imran', 'hassan', 'ali', 'hassan' ]


