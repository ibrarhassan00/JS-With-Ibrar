// // Dates today date is 12-05-2024

// // let myDate = new Date() // for current date 
// // console.log(myDate)

// // console.log(myDate.getDate());             // 12
// // console.log(myDate.getDay());              // 0  week sunday sy start hota hai isliye sunday ko 0 
// // console.log(myDate.getFullYear());         //2024
// // console.log(myDate.getHours());            // Greenwish Mean Time GMT ( 7 ) and Pakistan Standard time PKT 12 
// // console.log(myDate.getMilliseconds());     // 712
// // console.log(myDate.getMonth());            // 4    q ky januanry 0 hota hai
// // console.log(myDate.getSeconds());          // 45
// // console.log(myDate.getTime());             // 1st january 1970 sy abtak y current time tak ka secound.
// // console.log(myDate.getTimezoneOffset());      // Agar aap UTC ka waqt (UTC+0) aur PKT ka waqt (UTC+5) dekhte hain, to aapko PKT ka waqt UTC ka waqt se 5 ghante aage milayga.  Iske baad aap is time difference ko minutes mein convert kar sakte hain. Ek ghanta mein 60 minutes hote hain, is tarah 5 ghante mein (5 * 60) = 300 minutes hote hain
// // console.log(myDate.getUTCDate());          // 12 universal time coordinated UTC 
// // console.log(myDate.getUTCDay());           // 0  as per universal time coordinated week sunday sy start hota hai isliye sunday ko 0
// // console.log(myDate.getUTCFullYear());      // 2024
// // console.log(myDate.getUTCHours());            // output as per GMT & UTC 
// // console.log(myDate.getUTCMilliseconds());     // 255
// // console.log(myDate.getUTCMinutes());          // 22
// // console.log(myDate.getUTCMonth());            // 4    q ky januanry 0 hota hai
// // console.log(myDate.getUTCSeconds());          // 49


// let newDate=myDate.setFullYear(2025);
// newDate=myDate.toLocaleDateString()
// // console.log(newDate)


// // let myCreatedDate = new Date(2023, 0, 23)
// // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// // let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// // console.log(Math.floor(Date.now()/1000));

// // let newDate = new Date()
// // console.log(newDate);
// // console.log(newDate.getMonth() + 1);
// // console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `
 


let myDate = new Date();

newDate.toLocaleString('default', {
    weekday: "long",  
})

console.log(myDate);


