// for of 
// The for...of loop in JavaScript is used to go through things one by one, like arrays, strings, maps, sets, etc. It makes it easy to write code in a simple and short way when we want to loop through the elements of something.
// HINDI : JavaScript में for...of लूप का उपयोग वे वस्तुओं पर किया जाता है जो हमें एक एक करके जानने वाली हैं, जैसे कि एरे, स्ट्रिंग्स, मैप्स, सेट्स आदि। यह एक सरल और संक्षेपित तरीके से कोड लिखने की सुविधा प्रदान करता है जब हम किसी वस्तु के तत्वों पर एक एक करके लूप करना चाहते हैं।
/* syntax
   for (variable of iterable) {
  // code block to be executed
}
*/

// ["", "", ""] // array ke andar multiple string
// [{}, {}, {}] // array ke aandar multiple object
//en sab per lagta hai array per object or string per or docs me pde

// for...of in string
// const str = 'zubair';

// for (const char of str) {
//   console.log(char); // This will output each character of the string 'zubair' on a separate line
// }


// for...of in array
// const arr = [14, 9, 18, 4, 16]
// for (const num of arr) {
//     console.log(num);
// }

// const fruits = ['apple', 'banana', 'cherry'];
// for(const frut of fruits){
//     console.log(frut);
// }
//frut एक चर वेरिएबल है जो प्रत्येक लूप के उद्देश्य से एक एक element का मान लेता है।
//fruits वह array है जिस पर iterate किया जाता है।
  

// maps
// In JavaScript, a Map is a built-in data structure that allows you to store key-value pairs where both the keys and the values can be of any data type.
// JavaScript में, एक Map एक बिल्ट-इन डेटा संरचना है जिसमें आप कुंजी-मूल्य जोड़ सकते हैं जहाँ कुंजियाँ और मूल्य दोनों ही किसी भी डेटा प्रकार के हो सकते हैं।

// Creating a Map
// const myMap = new Map();

// // Setting key-value pairs
// myMap.set('name', 'John');
// myMap.set(1, 'One');
// myMap.set(true, 'Yes');

// // Getting values
// console.log(myMap.get('name')); // Output: John
// console.log(myMap.get(1));      // Output: One
// console.log(myMap.get(true));   // Output: Yes

// // Checking if a key exists
// console.log(myMap.has('name')); // Output: true
// console.log(myMap.has('age'));  // Output: false

// // Deleting a key-value pair
// myMap.delete(1);

// // Iterating over key-value pairs
// for (const [key, value] of myMap) {
//   console.log(`${key} => ${value}`);
// }


const myMap = new Map()
myMap.set('name','zubair')
myMap.set('age','21')
myMap.set('state','uttar pradesh')

// console.table(myMap);

for(const [key, value] of myMap){
    console.log(key, ':-', value);
}


//Object
// const myObject = {
//     name: "Zubair",
//     Village: "Shaulana"
//   }
  
//   for (const obj of myObject) {
//       console.log(obj);
//   } // Ye kaam nhi karrta ye itreable hai