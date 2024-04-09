// 1. () perntisis
// 2. [] Spuare Birakit
// 3. {} Cerlibresis 

// How to declear array
let studentsMarks = [45,86,57,64,58]
let myHero = ["Ben-10","Moto-Patlu","Choto-Bheem"]
let arry2 = new Array(1,5,8,9)
studentsMarks.push(6) // Push mtbl ye jo ham () me value dege wo value bhi add ho jayegi 
studentsMarks.pop() // Esshe last ki value delet ho jayegi

studentsMarks.unshift(55) // Ye value ko starting me add kardeta hai per ye agar data jyada ho to unshift karne per computer per bhi bhot jyada load aata hai 
studentsMarks.shift() // Ye starting ki value ko delet kar deta hai
console.log(studentsMarks.includes(86)); // Includes mean jo aap usme value hogi wo hai ya nhi T/F

console.log(studentsMarks.indexOf(57));// Value kon se index per hai
console.log(studentsMarks.indexOf(55)) // galt value dene per -1 show krega

const newStudentMarks = studentsMarks.join()  // Esse jo studentsMarks ka data newStudentMarks ke aandar cla jayega wo bhi string ke rop me 
console.log(newStudentMarks);
console.log(typeof newStudentMarks);



console.log(studentsMarks);


// Slice and Splice
let orinalArry = [12,25,16,46,30,78]
console.log("A",orinalArry)

const myn1 = orinalArry.slice(1,3) // jo slice hota hai wo end range ko include nhi karta yai eshme 3 ko nhi lega bs result me 1 or 2 show krega 
console.log(myn1) 
console.log("B",orinalArry) // Slice use karne ke bhad orginal value me koi change nhi hota 

const myn2 = orinalArry.splice(1,3) // spice me end range bhi deta hai or ye orginal value ko bhi alag hi splice yani kat deta hai
console.log(myn2)
console.log("C",orinalArry)

// ------------------------------------------------ //


const desiCar = ["Van","Ecco","i10"]
const vipCar = ["BMW","RRR","Creta"]

desiCar.push(vipCar)  // per ye toda confuse kar sakta hai ab jo vip car hai wo ek alg element hai pura uski value ko acces karne ke liya (0-2) 3 eliment to desi car ke aandr hai ab vip car 3 eliment bn gya hai uski value ko acces karne ke liya hme vipcar[3][0] esha karne pdega 
console.log(desiCar)
console.log(desiCar[3][0]);

const allCar = desiCar.concat(vipCar)
console.log(allCar); // Ye bhi trika hai esshe ek new arry ke aandar value cli jati hai ushe aap simple access kar sakte hai 
console.log(allCar[5]);


const allNewCar = [...desiCar,...vipCar] // ye spreb operato hai ye bhi value ko jodne ke kaam aata hai esme esha hot hai jise hm ek glass pani fakte hai to wo bikar jata hai same eshme jitna cyhe pani fak sakte hai
console.log(allNewCar);
console.log(allNewCar[3])


// ------ Confuse arry ki value ko simple one line kre ---- //

const boysWeigth = [25,57,78,[45,85,89,],45,85,88] 
const simpleWeigth = boysWeigth.flat(Infinity)
console.log(simpleWeigth);

// ------- Check karne ke liya arry hai ya nhi or kaise array bnaye ----//
console.log(Array.isArray("Zubair")); // fasle q ki ye to ek string hai
console.log(Array.from("Code Money")); // ab ye string arry me convert ho jayegi 
console.log(Array.from({name: "Zubair"})); // eshe me jab ab esshe object ke aandar ki value ko convert krege to empty {} object dega

const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;

console.log(Array.of(score1,score2,score3,score4))// eshe ye sb var ki value sigle arry ke aadar aa jayegi

