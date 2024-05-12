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
let newDate=myDate1.setFullYear(2025);
newDate=myDate1.toLocaleDateString()
console.log(newDate)

//-----------------------------------------------------------myCreatedDate1,2,3----------------------------------------------------\

let myCreatedDate = new Date(2023, 0, 23)         //random
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)   // random
let myCreatedDate2 = new Date("2023-01-14")        // yymmdd
let myCreatedDate3 = new Date("01-14-2023")        // mmddyy
console.log(myCreatedDate.toLocaleString());

// -------------------------------------------------------myTimeSatamp--------------------------------------------------------

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

//--------------------------------------------------------myDate2--------------------------------------------------------------
 
const myDate2 = new Date();
let options = { weekday: 'long', year:'numeric', month: 'long', day: 'numeric' };
console.log('myDate2.toLocaleString("en-US")', myDate.toLocaleString("en-US"));
console.log('myDate2.toLocaleString("en-US")', myDate.toLocaleString("en-US", options));

//-------------------------------------------------------myDate3-----------------------------------------------------------

let myDate3 = new Date();

myDate3 = myDate3.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName:'short',
});

console.log(myDate3);


//------------------------------------------------------myDate4-----------------------------------------------------------

let myDate4 = new Date();

console.log(myDate4.toDateString())
console.log(myDate4.toISOString())
console.log(myDate4.toJSON())
console.log(myDate4.toLocaleDateString())
console.log(myDate4.toLocaleString())
console.log(myDate4.toLocaleTimeString())
console.log(myDate4.toString())
console.log(myDate4.toTimeString())
console.log(myDate4.toUTCString())
console.log(myDate4.toLocaleString("default",{timeZoneName:"short"}));