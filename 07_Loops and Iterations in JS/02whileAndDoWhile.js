// while : In JavaScript, a while loop repeatedly executes a block of code as long as a specified condition is true.
// HINDI : JavaScript में, एक while लूप बार-बार एक ब्लॉक कोड को चलाता है जब तक निर्दिष्ट शर्त सत्य है।
/* syntax
   while (condition) {
  // code block to be executed
 }
*/

// let index = 0; // agar bhar inslease kre to value jrur de
// while(index <= 10){
//     console.log(`Value of index : ${index}`);
//     index = index + 2;
// }

// let myArray = ['Name','Fame','Money']
// let arr = 0;
// while(arr < myArray.length){
//     console.log(`My array value is : ${myArray[arr]}`);
//     // arr++;
// }

// do-while
// In JavaScript, the do while loop executes a block of code repeatedly as long as a specified condition is true, and then checks the condition.
// JavaScript में, do while लूप एक विशिष्ट शर्त के तहत एक ब्लॉक कोड को बार-बार चलाता है, और उसके बाद शर्त की जाँच की जाती है।
/* syntax
   do {
  // code block to be executed
} while (condition);
*/
// पहले ब्लॉक कोड चलाया जाता है, फिर शर्त की जाँच की जाती है।
// यदि शर्त सत्य है, तो लूप फिर से शुरू होता है और ब्लॉक कोड फिर से चलाया जाता है।
// अगर शर्त गलत है, तो लूप बंद होता है और कोड का अगला खंड चलाया जाता है।


let score = 11;
do{
    console.log(`Score value is : ${score}`);
    score++
}while(score <= 10)

