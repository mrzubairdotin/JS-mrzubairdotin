const myArray = ['BMW','VAN','ECCO'];
// console.log(myArray); // brwoser console ke aandar hme arro ko click karen per eske prototpe bhi show krega jaise lenth or index more.
// and prototype ke aandar or bhi prototype ho sakte hai js har nhi manti or eshi ko ham js me js inheritance bhi bolte hai

// Array => Object => null
// Funtion => Funtion => Object => null
// String => Object => null
// eska matlab hai ki jo Array hai wo bhi ek object hi hai or object null hota hai deep me same string bhi object hai hai
// JS ke aandar har ek chiz object hoti hai eshe ham Prototype Js inhertancne bhi bolte hai 

function multipleby10(num){
    return num*10
}

multipleby10.power = 2;

// console.log(multipleby10(5));
// console.log(multipleby10.power);
// console.log(multipleby10.prototype); //esme empty object show hoga  


function studentInfo(name,age){
    this.name = name
    this.age = age
}

studentInfo.prototype.incresAge = function(){
    // this.age++
    console.log(this.age + 1);
}

studentInfo.prototype.printToScreen = function(){
    console.log(`Age is ${this.age}`);
}

let zubair = new studentInfo("Zubair",21)
let zunad = new studentInfo("Zunad",13)

// zubair.printToScreen() // hem sirf prototype ke aage wala varable dena hai bs 
// zunad.incresAge()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



let myName = "zubair    "
let myWebsite = "mrzubair.in     "

console.log(myName.trueLength);


let myToys = ["Airoplan", "Tesla"]


let myToysPower = {
    airoplan: "FLY",
    tesla: "AUTOMATIC DRIVEING",

    getAiroplanPower: function(){
        console.log(`Airoplan power is ${this.airoplan}`);
    }
}

Object.prototype.objZubair = function(){
    console.log(`zubair is present in all objects`);
}

Array.prototype.arryZubair = function(){
    console.log(`zubair is only avilable on Array`);
}

// myToysPower.objZubair()
// myToysPower.arryZubair() // esko ham sirf arry me hi accces kar skte hai esliye ye error show krega
// myToys.arryZubair()



// inheritance

const User = {
    name: "zubair",
    email: "mrzubair.in"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //__proto__: TeachingSupport (this means that properties and methods of TeachingSupport will also be available in TASupport)
}

Teacher.__proto__ = User // This means that the Teacher object will also have access to the properties and methods of the User object.

// console.log(User.name);  // Output: zubair
// console.log(User.email); // Output: mrzubair.in

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // इसका मतलब है कि अब TeachingSupport ऑब्जेक्ट के पास Teacher ऑब्जेक्ट के प्रॉपर्टीज और मेथड्स भी उपलब्ध होंगे।

let anotherUsername = "codemoney     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"zubair".trueLength()
"codemoney".trueLength()