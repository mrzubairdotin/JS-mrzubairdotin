// The Nullish Coalescing Operator (??) in JavaScript provides a concise way to handle default values when dealing with potentially null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, otherwise, it returns the left-hand operand.
// In simple way : Children, when we need to check the value of something and if that value is 'null' or 'undefined', we might need to use another value. For this, we use the 'Nullish Coalescing Operator (??)'. It tells us that if the first value is 'null' or 'undefined', then we should use the second value, otherwise, we should use the first value.
// HINDI : जब हमें किसी चीज़ की मूल्य चेक करनी हो और अगर वह वैल्यू 'null' या 'undefined' होती है, तो हमें दूसरी वैल्यू का उपयोग करना हो सकता है। इसके लिए हम 'Nullish Coalescing Operator (??)' का उपयोग करते हैं। यह हमें बताता है कि यदि पहली वैल्यू 'null' या 'undefined' हो, तो हमें दूसरी वैल्यू का उपयोग करना है, अन्यथा हमें पहली वैल्यू का उपयोग करना है।

const username = null;
const displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"
// In this example, username is null, so the expression username ?? "Guest" evaluates to "Guest". If username had a non-null value, the expression would have evaluated to that value instead.

let value;
value = 5 ?? 10 // Output: 5
value = null ?? 10 // Output: 10
value = undefined ?? 15 // Output: 15
value = null ?? 10 ?? 20 // agar value bhaut sari hai to nul or unde. ko chodkar sabse pheli value ko lega Output: 10

