// In JavaScript, values are often evaluated in Boolean contexts, such as in if statements or as operands for logical operators (&&, ||, !). In these contexts, non-boolean values are automatically coerced to booleans. Values that are considered "truthy" will evaluate to true, while values that are considered "falsy" will evaluate to false.
// HINDI : जावास्क्रिप्ट में, जब हम कुछ चेक करते हैं, जैसे कि कोड में "if" वाले जगह, तो वहाँ हमें पता चलता है कि क्या कोई चीज़ सही है या गलत। यदि यह चीज़ सही होती है, तो हम "true" कहते हैं, और अगर गलत होती है, तो हम "false" कहते हैं। कुछ चीज़ें स्वयं में सही या गलत होती हैं, और कुछ ऐसी भी होती हैं जो हम बना देते हैं। जब भी यह सही होती है, हम "true" कहते हैं, और जब गलत होती है, तो हम "false" कहते हैं।

const userEmail = []
if (userEmail) {
    console.log("Got user email"); // Agar userEmail me value true hogi to if run krega
} else {
    console.log("Don't have user email"); // Agar userEmail me value false ho tu else run krega
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

console.log(false == 0); // Output : true
console.log(false == ''); // Output : true
console.log(0 == ''); // Output : true


const myArray = []
if (myArray.length === 0) {
    console.log("Array is empty");
} else{
    console.log("Array Lenth is not empty");
}


const myObj = { 
    name: "Zubair",
    age: 21
}
// console.log(Object.keys(myObj)) // eshe ham array ki key ko array me kar kaste hai 

if (Object.keys(myObj).length === 0) { // (Object.keys(myObj) ese karne se object array ban jata hai fir ham aray ko .lenth se ham check kar rhe hai
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}


