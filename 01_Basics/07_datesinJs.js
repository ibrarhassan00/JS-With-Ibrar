// Dates today date is 12-05-2024
//------------------------------------------myDate----------------------------------------------------------

let myDate = new Date()                    // for current date 
console.log(myDate)

console.log(myDate.getDate());             // 12
console.log(myDate.getDay());              // 0  week sunday sy start hota hai isliye sunday ko 0 
console.log(myDate.getFullYear());         //2024
console.log(myDate.getHours());            // Greenwish Mean Time GMT ( 7 ) and Pakistan Standard time PKT 12 
console.log(myDate.getMilliseconds());     // 712
console.log(myDate.getMonth());            // 4    q ky januanry 0 hota hai
console.log(myDate.getSeconds());          // 45
console.log(myDate.getTime());             // 1st january 1970 sy abtak y current time tak ka secound.
console.log(myDate.getTimezoneOffset());      // Agar aap UTC ka waqt (UTC+0) aur PKT ka waqt (UTC+5) dekhte hain, to aapko PKT ka waqt UTC ka waqt se 5 ghante aage milayga.  Iske baad aap is time difference ko minutes mein convert kar sakte hain. Ek ghanta mein 60 minutes hote hain, is tarah 5 ghante mein (5 * 60) = 300 minutes hote hain
console.log(myDate.getUTCDate());          // 12 universal time coordinated UTC 
console.log(myDate.getUTCDay());           // 0  as per universal time coordinated week sunday sy start hota hai isliye sunday ko 0
console.log(myDate.getUTCFullYear());      // 2024
console.log(myDate.getUTCHours());            // output as per GMT & UTC 
console.log(myDate.getUTCMilliseconds());     // 255
console.log(myDate.getUTCMinutes());          // 22
console.log(myDate.getUTCMonth());            // 4    q ky januanry 0 hota hai
console.log(myDate.getUTCSeconds());          // 49

//----------------------------------------------------myDate1---------------------------------------------------------------

let myDate1= new Date()
let newDate=myDate1.setFullYear(2025);   // 1747082259795 y return hai next line ise string main convert kia hai
newDate=myDate1.toLocaleDateString()     // string convert or year update ky ouput 5/12/2025
console.log(newDate) 

//-----------------------------------------------------------myCreatedDate1,2,3----------------------------------------------------\

let myCreatedDate = new Date(2023, 0, 23)         //random
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)   // random
let myCreatedDate2 = new Date("2023-01-14")        // yymmdd
let myCreatedDate3 = new Date("01-14-2023")        // mmddyy
console.log(myCreatedDate.toString());             // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreatedDate.toLocaleString());       // 1/23/2023, 12:00:00 AM

// -------------------------------------------------------myTimeSatamp--------------------------------------------------------

let myTimeStamp = Date.now()
console.log(myTimeStamp);                     // 1715546702584
console.log(myCreatedDate.getTime());         // 1674432000000
console.log((Date.now()/1000));               // 1715546702.59
console.log(Math.floor(Date.now()/1000));    // 1715546702

//--------------------------------------------------------myDate2--------------------------------------------------------------
 
const myDate2 = new Date();
let options = { weekday: 'long', year:'numeric', month: 'long', day: 'numeric' };
console.log('myDate2.toLocaleString("en-US")', myDate2.toLocaleString("en-US"));         //myDate2.toLocaleString("en-US") 5/12/2024, 8:46:35 PM
console.log('myDate2.toLocaleString("en-US")', myDate2.toLocaleString("en-US", options));//myDate2.toLocaleString("en-US") Sunday, May 12, 2024

//-------------------------------------------------------myDate3-----------------------------------------------------------

let myDate3 = new Date();

myDate3 = myDate3.toLocaleString('default', {
    weekday: 'long',       // Sunday
    year: 'numeric',       // 2024
    month: 'long',         // May 
    day: 'numeric',        // 12
    hour: 'numeric',       // 8
    minute: 'numeric',     //47
    second: 'numeric',     //44
    timeZoneName:'short',  // UTC
});

console.log(myDate3);


//------------------------------------------------------myDate4-----------------------------------------------------------

let myDate4 = new Date();

console.log(myDate4.toDateString()) // Sun May 12 2024
console.log(myDate4.toISOString())  // 2024-05-12T20:50:54.237Z
console.log(myDate4.toJSON())       // 2024-05-12T20:50:54.237Z
console.log(myDate4.toLocaleDateString())  // 5/12/2024
console.log(myDate4.toLocaleString())      // 5/12/2024, 8:50:54 PM
console.log(myDate4.toLocaleTimeString())  // 8:50:54 PM
console.log(myDate4.toString())            // Sun May 12 2024 20:50:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate4.toTimeString())        // 20:50:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate4.toUTCString())         // Sun, 12 May 2024 20:50:54 GMT
console.log(myDate4.toLocaleString("default",{timeZoneName:"short"}));  //  5/12/2024, 8:50:54 PM UTC