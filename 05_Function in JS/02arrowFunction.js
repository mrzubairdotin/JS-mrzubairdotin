const user = {
    name: "Zubiar",
    age: 24,

    welcomeMsg: function (){
        console.log(`${this.name} , welcome to your own website`)
        console.log(this); // ye wala this es scop ki sari value or elment ko show kar dega 
    }
    
}

 user.welcomeMsg()
user.welcomeMsg = "Aalam"
user.welcomeMsg()

console.log(this); //Output: {} ye objest ya funtion ke sare element ko janta hai esliye tho hm this ks use  karte hai liken brower me ye {} nhi hota ye ek window file hoti hai **** JO brower ke aandaar global object hai wo window onbject hai

function codeMoney(){
    name: "Nadeem"
    console.log(this.name); // agar eske uper hm koi value de to ye undifind show karta hai ye sirf object ke aandar hi kaam karta hai agr sirf this hi run krene de tho ye pura docment bta dega 
}
codeMoney()

const chai = function(){
    name: "Mohdmad"
    console.log(this.name);
}// dono me same undifind hi show krega
chai()


//----------------------------------------------------//
// How to declear arrow funtion and work
const code_Money = () => {
    let username = "Zubair khan"
    console.log(this)
}
code_Money() // Output : {}

// ------ Basic arrow funtion -----------//
// Esse hm Explicit return jisme retun keyword lgana hota hai 
const addnumber = (num1,num2) => {
   return num1 + num2
}
console.log(addnumber(45,45));

// // Esko implisit return bolte hai
const newAddNumber = (num1,num2) => num1 + num2  // agar { } use krege to return use karna pdega eshe bhi kar salte hai niche dheke
const newAddNumber2 = (num1,num2) => (num1 + num2)
const newAddNumber3 = (num1,num2) =>  ({username: "Zubair ali"})

console.log(newAddNumber(45,45));  
