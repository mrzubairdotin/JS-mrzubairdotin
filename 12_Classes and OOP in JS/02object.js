// Object literal
const raviInfo = {
    name: "Ravi Kumar",
    age: 25,
    phoneNo: 45885544
}
const user = {
    username: "zubairdotin",
    loginCount: 1,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // bina this is username is not define show krega qki getUserDetails ek alg funtion hai per hai uske aandar hi esliye hme btana padta hai ki ham eshi full object me se value chaye
        // console.log(this); // user ki sari key and value aajayeingi 
    }
}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this); // output : {} ye khali pertisis ya object deta nodejs me broswer per full window object deta hai jo ki global object hai 


// --------- Constructor function ---------- //

// const prmiseOne = new Promise() // esme new keyword ek constructr ka kaam kar rhi rhi eskme ham multiple instancce bna sakte hai or use kar sakte hai mermory ke aandar har bar nye mermory generte hogi

function User(username, loginCount, isLoggedIn){
    this.username = username; // esme jo this.username hai wo varible hai or = username hai permeter wala username hai 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // esko retern kra ya na kre ye automatic ya implicet apne aap hi return hota hai
}

const userOne = new User("zubair", 12, true) // userOne ke aandar User ka ek nya instance hai
const userTwo = new User("aalam", 11, false)
console.log(userOne.constructor); // Ye apne khud ke bare me btata hai
//console.log(userTwo);
// note : ham ye bhi check kar sakte hai ki userOne or  userTwo same hai ha nhi 


// ------- new --------
//1. Jaise hi aap new keyword use kroge to sapse phele ek empty object create hota hai jisko instance bola jata hai ( yani nya object crate hota hai)
//2. constructer funtion call hota hai new keywork ke karan ye jitne bhi argument hote hai un sab ko pack karke dedeta hai
// 3. or fir jo this keyword hai wo ko apne argument likhe hai wo sab suke aandar inject ho jate hai

// -------- instanceof -------- //
//In JavaScript, instanceof is a keyword used to check whether an object belongs to a specific class or type.
//Object: Everything in JavaScript is an object, like strings, arrays, functions, etc.
//Class or Type: This refers to the blueprint or category of objects.
//instanceof: It's like asking JavaScript, "Hey, is this object an instance (an example) of a particular class or type?"

//JavaScript में, instanceof एक कीवर्ड है जिसका उपयोग किया जाता है ताकि पता लगाया जा सके कि एक ऑब्जेक्ट किसी विशेष क्लास या प्रकार का है या नहीं।

//ऑब्जेक्ट: JavaScript में सभी चीज़ें एक ऑब्जेक्ट होती हैं, जैसे कि स्ट्रिंग, एरे, फ़ंक्शन, आदि।
//क्लास या प्रकार: यह ऑब्जेक्टों का ब्लूप्रिंट या श्रेणी को संदर्भित करता है।
//instanceof: यह JavaScript से पूछने जैसा है, "अरे, क्या यह ऑब्जेक्ट एक विशेष क्लास या प्रकार का उदाहरण है?"
// तो, जब आप instanceof का उपयोग करते हैं, तो आप बुनियादी रूप से चेक कर रहे हैं कि क्या एक ऑब्जेक्ट किसी विशेष कंस्ट्रक्टर फ़ंक्शन या क्लास से बनाया गया है या नहीं।

class Car {
    constructor(brand) {
      this.brand = brand;
    }
  }
  
  const myCar = new Car('Toyota');
  
  console.log(myCar instanceof Car); // Output will be true
// In this example, myCar instanceof Car checks if myCar is an instance of the Car class. Since myCar was created using the Car class constructor (new Car('Toyota')), it returns true. If myCar was created using another constructor or not a Car instance, it would return false.
// HINDI : इस उदाहरण में, myCar instanceof Car यह चेक करता है कि क्या myCar Car क्लास का एक उदाहरण है। क्योंकि myCar Car क्लास कंस्ट्रक्टर (new Car('Toyota')) का उपयोग करके बनाया गया था, यह true वापस करता है। अगर myCar किसी अन्य कंस्ट्रक्टर का उपयोग करके या Car उदाहरण नहीं होता, तो यह false वापस करता।  