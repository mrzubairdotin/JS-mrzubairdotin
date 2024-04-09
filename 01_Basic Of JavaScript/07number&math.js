const age = 100
console.log(age); // Output: 100

const value = new Number(545.455)
console.log(value); // Output: [Number: 545.455]
console.log(value.toString()); // Output: "545.455"
console.log(value.toString().length); // Output: 7
console.log(typeof value) // Output: "object"
console.log(value.toFixed(2)) // Output: "545.46" // value ki value ke vhat .00 lag jayega

console.log(value.toPrecision(5)) // Output: "545.46" // More deatled serach on google

const larNum = 1001545587;
// console.log(larNum.toLocaleString()) // to amicican way
console.log(larNum.toLocaleString('en-In'));  // Output: "1,001,545,587" // To indian way

// --------- Example and use of Math ----------
console.log(Math);
console.log(Math.abs(-10)); // abs negitive value ko positive me concert kar data hai or positive ko positive hi rhene data hai
console.log(Math.round(45.458)); // esme decimal ke bhad ki value show nhi karta 
console.log(Math.ceil(4.4)); // Eshme agr ek decimal ke bhad 1 bhi point hone ke bhad value ko pura kar deta hai jais 4.6 ko wo 5 smjega
console.log(Math.floor(5.6)); // Esme ceil se ulta hai
console.log(Math.min(45,25,57,444));  // sabse choti value btata hai
console.log(Math.max(45,25,57,444));  // sabse bdi value btata hai

console.log(Math.random()); // randam ki value 0 se 1 ke bhich me aati hai
console.log((Math.random()*10) + 1);// ab ye 1 se 10 tk randam valu dega point ke rop me 
console.log(Math.floor(Math.random()*10) + 1); // ab ye 1 se 10 tk randam value dega pina .Point ke

const min = 1;
const max = 6;
console.log(Math.floor(Math.random()*(max-min + 1))+min) //ab ye  1 se 6 tk value dega jaise ludo me jati hai

 