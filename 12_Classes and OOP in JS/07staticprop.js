class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    } // It has a static method createId which returns a constant ID (here '123'). Static methods are at the class level and are called from the class name, not from the object instance. HINDI : इसमें एक स्टैटिक मेथड createId है जो एक स्थिर आईडी (यहाँ '123') रिटर्न करता है। स्टैटिक मेथड्स क्लास लेवल पर होते हैं और उन्हें क्लास नाम से कॉल किया जाता है, न कि ऑब्जेक्ट इंस्टेंस से।
}

const zubair = new User("zubair")
// console.log(zubair.createId()) // createId is a static method and cannot be called from the object. It can be called only by class name. HINDI : createId एक स्टैटिक मेथड है और इसे ऑब्जेक्ट से कॉल नहीं किया जा सकता। इसे केवल क्लास नाम से कॉल किया जा सकता है।

class Teacher extends User {
    constructor(username, email){
        super(username) // Using super(username) the constructor of the User class is called, setting the username HINDI : super(username) का उपयोग करके User क्लास के कंस्ट्रक्टर को कॉल किया जाता है, जिससे username सेट हो जाता है।
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // console.log(iphone.createId()) कॉल करने से एरर आएगा क्योंकि createId एक स्टैटिक मेथड है और इसे ऑब्जेक्ट से कॉल नहीं किया जा सकता। इसे केवल User क्लास नाम से कॉल किया जा सकता है।


// Calling static methods correctly
console.log(User.createId()); // Output: 123
