// Ternary Operator
// In JavaScript, the ternary operator is a short way to write conditional statements. It's also called the conditional operator. It has three parts: first comes a condition, then a question mark (?), then we use the expression that will run if the condition is true, and then comes a colon (:), followed by the expression that will run if the condition is false.
// HINDI : जावास्क्रिप्ट में टर्नरी ऑपरेटर एक छोटा तरीका है जिससे हम कंडीशनल स्टेटमेंट्स लिख सकते हैं। इसे कंडीशनल ऑपरेटर भी कहते हैं। यह तीन हिस्सों से मिलता है: पहले एक कंडीशन आता है, उसके बाद एक प्रश्न चिह्न (?), फिर उस एक्सप्रेशन का उपयोग करते हैं जो कंडीशन सच होने पर चलेगा, और फिर एक वीर्ग (:) आता है, उसके बाद उस एक्सप्रेशन का उपयोग करते हैं जो कंडीशन गलत होने पर चलेगा।

/*
   syntax 
   condition ? expressionIfTrue : expressionIfFalse;
*/

const age = 20;
const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult); // Output: Yes
