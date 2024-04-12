// if
/* Syntax
if(condition){

}
NOTE : agar condition true hogi tho if ka code run hoga agar false ho gi to code run nhi hoga
*/

// const temp = 35;
// if(temp < 35){
//     console.log("Temp is less than 35");

// } else if(temp === 35){
//     console.log("Temp is 35")
// }
// else{
//     console.log("Temp is grater than 35")
// }


// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // Eror : power is not defined ( Scope ke bhar ham varible ko accses nhi kar sakte)


// Implicit Scope - ye one line ke aandar bhi code ko run kra deta hai
const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"); // this example of Implicit scope ye use mat karna  

// Nested If Else
// const phonePayBalance = -45;
// if(phonePayBalance === 1000){
//     console.log("Balance is ",phonePayBalance);
// }else if (phonePayBalance > 1000){
//     console.log("Balance is grather than 1k , ",phonePayBalance);
// }else if(phonePayBalance > 750){
//     console.log("Balance is grather than 750 ");
// }
// else if(phonePayBalance > 550){
//     console.log("Balance is grather than 550 ");
// }
// else if(phonePayBalance > 320){
//     console.log("Balance is grather than 320 ");
// }else if(phonePayBalance > 100){
//     console.log("Balance is grather than 100 ");
// }else if(phonePayBalance > 0){
//     console.log("Balance is grather than 0 ");
// }else{
//     console.log("Negative Value");
// }


const userLoggedIn = true
const upi = true
const loggedInFromNumber = false
const loggedInFromEmail = true

if (userLoggedIn && upi) {
    console.log("Allow to buy reedem code");
} // && : esme dono condition correct hogi tb code run hoga

if (loggedInFromNumber || loggedInFromEmail) {
    console.log("User logged in");
} // || : esme kio ek condiiton bhi shi hogi to code run hoga

