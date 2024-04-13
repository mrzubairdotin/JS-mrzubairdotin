// for
/* 
   syntax
   for (initialization; condition; increment/decrement) {
   // code to be executed in each iteration
   }
*/
// Initialization: This is where you initialize your loop variable. It's typically where you set a counter variable to start at a specific value.
// Condition: This is the condition that will be evaluated before each iteration of the loop. If the condition is true, the loop will continue to run; if it's false, the loop will stop.
// Increment/Decrement: This part is where you modify the loop variable. It's usually where you increment or decrement the counter variable so that the loop moves towards its termination condition.

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     }

// for (let i = 1; i <= 10; i++) {
//     if(i == 7){
//       console.log("7 is best number");
//       continue;
//     }
//     console.log(i);
//   }
  // continue : continue statement works in JavaScript within loops. It's used to skip the current iteration of a loop and continue with the next iteration.


// Table 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}`);
//    for(let j = 1; j<10; j++){
//     // console.log(i + '*' + j + ' = ' + i*j ); // Witout backtiks ``
//     // console.log(`${i} * ${j} = ${i*j}`); // with backtiks ``
//    }
// }


// let myArray = ["BMW","RRR","Creta"];
// // console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
   
//     // let values = myArray[i]
//     // console.log(values);
//     // console.log(myArray[i]); // ONE LINE

// }


const fruitsName = ["apple" ,"banana","graps","orange"]
for(let i = 0; i < fruitsName.length; i++){
  if(fruitsName[i] === "graps"){
    console.log("Found graps! Exiting loop."); 
    break; // Exit the loop when "graps" is found
  }
  console.log("Current fruit:",fruitsName[i]);
}
// break : the break statement works in JavaScript within loops. It's used to exit a loop prematurely, regardless of the loop's condition.
