let myDates = new Date();
console.log(myDates);
console.log(myDates.toString());

 let myCreateDate = new Date(2024,0,13); // 0 mean 1 yani january
console.log(myCreateDate.toDateString());
let myCreateDate1 = new Date(2024,0,13,5,3);
console.log(myCreateDate1.toDateString());


console.log("toDateString -> ", myDates.toDateString());
console.log("toISOString -> ", myDates.toISOString());
console.log("toJSON -> ",myDates.toJSON());
console.log("toLocaleDateString -> " ,myDates.toLocaleDateString());
console.log("toTimeString -> ",myDates.toTimeString());

let myDate3 = new Date("2024-05-08");
let myDate4 = new Date("10-07-2045");
console.log(myDate3.toDateString());
console.log(myDate4.toDateString());


Milisecend
let myTimeStamp = Date.now(); // This is show milisecond // jab es funtion ko bnaya new keyword use na kre
console.log(myTimeStamp);
console.log(myDate4.getTime()); // Esse bhi data ki value ko milisecoond me deta hai

// Agar value second me chaye to
console.log(Math.floor(Date.now()/1000)); //ab ye second me value dega


const newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1); // Esme index 0 se start hota hai tho user confuse na ho esliya 1 apne aap hi add kar sakte hai
console.log(newDate.getHours());

newDate.toLocaleDateString('default',{
    weekday: "long",
})  // hm jo tolocalstring hai uske aandar hm object bhi define kar sakte hai 