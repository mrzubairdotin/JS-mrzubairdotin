// for...in 
// Ye object per bhi kaam karta hai or array per bhi
// Map per kaam nhi karta
// In JavaScript, the for...in loop is used to iterate over the properties of an object. It loops through all enumerable properties of an object, including its inherited properties from the prototype chain.
// HINDI : JavaScript में, for...in लूप का उपयोग ऑब्जेक्ट की प्रॉपर्टिज़ के लिए यात्रा करने के लिए किया जाता है। यह ऑब्जेक्ट की सभी गिनतीय गुणों के माध्यम से यात्रा करता है, जिसमें प्रोटोटाइप श्रृंखला से विरासती गुण होते हैं।

// const person = {
//     name: 'zubair',
//     age: 21,
//     city: 'New York'
//   };
  
//   for (const key in person) {
//     // console.log(key); // Output : only key 
//     console.log(`${key}: ${person[key]}`); // Output : key or value
//   }

let myArray = ["Ravi","Shivam","Sachin"]
for (const key in myArray) {
//  console.log(key , myArray[key]); // Output :0 Ravi 1 Shivam 2 Sachin 
    console.log(myArray[key]); // Output : Ravi Shivam  Sachin
}

// const myMap = new Map()
// myMap.set('name','zubair')
// myMap.set('age','21')
// myMap.set('state','uttar pradesh')

// for(const key in myMap){
//     console.log(key);
// }// map for in me iteratble nhi hai es per loops nhi lag sakta


