// In JavaScript, the reduce() method is used to reduce the elements of an array to a single value. It executes a provided function for each element of the array (from left to right) and accumulates the result into a single value. This method can be used to perform operations like summing up all elements, finding the maximum or minimum value, or transforming an array into a different data structure.
// HINDI : JavaScript में, reduce() विधि का उपयोग एक एरे के तत्वों को एकल मूल्य में कम करने के लिए किया जाता है। यह एक प्रदान किए गए फ़ंक्शन को प्रत्येक एरे तत्व के लिए (बाएं से दाएं) निष्पादित करता है और परिणाम को एकल मूल्य में एकत्रित करता है। इस विधि का उपयोग सभी तत्वों को जोड़ने, अधिकतम या न्यूनतम मान का खोजने, या एक एरे को एक अलग डेटा संरचना में बदलने जैसे ऑपरेशन करने के लिए किया जा सकता है।

/* 
  The syntax of reduce()
  array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
*/

// const mynum = [1,2,3]

// const myTotal = mynum.reduce(function(acc,cval){
//     console.log(`acc value is : ${acc} current value is ${cval}`);
//     return acc + cval;
// },0) // }, ki bhad hm acc ki value dete hai
// console.log(myTotal);


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15


// const marks = [41,58,36,75,75]
// const totalMarks = marks.reduce( (acc,curVal) => acc + curVal,0 )
// console.log(totalMarks);

// const persontage = totalMarks / 5;
// console.log("Total persontage : ",persontage);


const shoppingCart = [
    {
        itemName: "kite",
        price: 5
    },
    {
        itemName: "mobile cover",
        price: 70
    },
    {
        itemName: "earphone",
        price: 100
    },
    {
        itemName: "ice-cream",
        price: 20
    }
]

let totalPayPrice = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(totalPayPrice);
