// singleton objcts -> ye wo object hot hai jiska jissa class me koi or nhi nhi hota ushe hm singleton khete hia conster se jab bhi object bnega wo singleton hi bnega
// singleton bnane ke liya object.create{} ehse bnete or ye hi constructure hota hai



// ------literals object------- (ye singleton ke ulte hote hai ya usshe alg hote hai)

const sym = Symbol("My fist symbol")

const jsUser = {
    name: "Zubair",
    "bio": "Code Money",
    sym: "mrzubairi",//per ye typeof se abhi symbhal nhi hai ye ek string bn chuka hai 
    [sym]: "Code money" ,// ab ye object ke aandar bhi symbol hi hai eske [ ] lgana pdega jab bhi symbol hi use karna hai  or access karne ke liya bhi [] use karte hai ecxaple [sym]
    age: 18,
    p1: "my name is zubair ",
    phoneNumber: 974588565, 

}

console.log(jsUser.name);
console.log(jsUser["p1"]) // hm value ko string ke rop me bhi le sakte hai 
console.log(jsUser["bio"]) // object ke aandar vese tho by defualt string hi hoti hai key ki value chye to hm khucd string bhi de sakte hai or access kar sakte hai

console.log(typeof jsUser.sym)

// Value change and freze krne ke liya
jsUser.name = "Rohit Sharma" // valeue change karna
console.log(jsUser.name);

Object.freeze(jsUser) // ab object hm koi change nhi kar sakte value vhi milegi
jsUser.age = 25;
console.log(jsUser);


// ------ funtion --------- //
jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
// console.log(jsUser)

jsUser.greetingTwo = function(){
    console.log(`This is seconde value but name is  ${this.name}`);// agar refrence lena ho tho esse lege agar refrnce same object me se lena ho to this ka use krege
}
console.log(jsUser.greetingTwo())



// -------- Singleton Object ------- //
const istaUser = new Object() // This is singleton object with the help of contructer
const fbUser = {} // Non-sigleton object 
// But result dono ka smae hi hoga
console.log(tinderUser);
console.log(fbUser);

const tinderUser = new Object()
tinderUser.id = "mrperfect@yaho"
tinderUser.name = "Mr Zubair"
console.log(tinderUser);

const regularUser = {
    fullname: {
        firstName: "Zubair",
        lastName: "khan"
    }
}
console.log(regularUser.fullname.firstName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj7 = {5: "e",6:"f"}

const obj3 = {obj1,obj2} // But esme thodi presani hoti hai answer clear nhi hota
const obj4 = Object.assign(obj1,obj2)
const obj5 = Object.assign({},obj1,obj2) // this is  way esme answer yhi aata hai uper wale me kabhi mistake bhi ho saktha hai

console.log(obj4);
console.log(obj5);

const objspirt = {...obj1,...obj2,...obj7} //ye new obj me anser detahai sao ka ek shath
console.log(objspirt)

const newtinderUser = new Object()
newtinderUser.id = "mrperfect@yaho"
newtinderUser.name = "Mr Zubair"
console.log(newtinderUser);
console.log(Object.keys(newtinderUser));
console.log(Object.values(newtinderUser));
console.log(Object.entries(newtinderUser));
console.log(newtinderUser.hasOwnProperty('name')) // mtlb name hai ya nhi


// jab database se deta lete hai to wo arrry obj ke rop me leta hai
const users = [
    {
        id: 455,
        name: "Mohit"
    },
    {
        id: 485,
        name: "Sumit"
    }
]

console.log(users[1].name)



// ------------------------------------------- //

const coures = {
    name: "ravi",
    coursePrice: 999,
    gamilOnlyForUser: "ravi@gmail.com",

}

const {coursePrice} = coures; // Esse ye fayda hai jab bhi aap ko coursePrice janna ho to aap ko pura syntax nhi likna pdega ab
console.log(coursePrice)

const {gamilOnlyForUser: mail} = coures; // esshe hm us var ka naam bhi chota kar sakte hai
console.log(mail)




