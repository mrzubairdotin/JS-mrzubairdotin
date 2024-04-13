// In JavaScript, the map() method creates a new array with the results of calling a provided function on every element in the calling array. This method allows you to process each element of an array in a specified way and create a new array with the modified elements.
// HINDI : JavaScript में, map() विधि एक नया एरे बनाती है जिसमें हर तत्व को दिए गए फ़ंक्शन के द्वारा परिवर्तित किया जाता है। इस विधि को प्रयोग करके हम एक एरे के हर तत्व को किसी निर्दिष्ट तरीके से प्रोसेस कर सकते हैं और एक नया एरे बना सकते हैं।

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(function(number) {
//   return number * number;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// chaining
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums); // [ 41, 51,  61, 71, 81, 91, 101]
