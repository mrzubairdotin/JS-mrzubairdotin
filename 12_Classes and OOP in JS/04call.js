function SetUsername(username){
    //Example complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // इसमें SetUsername.call(this, username) लाइन का उपयोग किया गया है, जो SetUsername फ़ंक्शन को वर्तमान ऑब्जेक्ट के संदर्भ (this) के साथ कॉल करता है। इस तरह SetUsername फ़ंक्शन username को सेट कर देता है।
   
    this.email = email
    this.password = password
}

const profileInfo = new createUser("zubair", "zubair.in", "0110")
console.log(profileInfo);