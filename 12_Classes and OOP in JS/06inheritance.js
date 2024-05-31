class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ //It inherits from the User class, meaning all the properties and methods of the User will be available in the Teacher class
    constructor(username, email, password){
        super(username) // Using super(username) the constructor of the User class is called, setting the username.(super(username) का उपयोग करके User क्लास के कंस्ट्रक्टर को कॉल किया जाता है, जिससे username सेट हो जाता है।)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Zubair", "zubair@teacher.com", "123")

chai.logMe() // chai.logMe() कॉल करने पर USERNAME is Zubair प्रिंट होगा, क्योंकि logMe मेथड User क्लास से विरासत में मिला है।
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User); //  यह चेक करता है कि chai ऑब्जेक्ट User का इंस्टेंस है या नहीं। इसका आउटपुट true होगा, क्योंकि Teacher क्लास User से विरासत लेता है।