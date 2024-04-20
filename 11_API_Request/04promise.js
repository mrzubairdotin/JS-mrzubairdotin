// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise(function(resolve,reject){
    // ye kya karta hai - ye async task ko karta hai 
    // ye DataBase(DB) ko calls karta hai or cryptograpy and network

    setTimeout(function(){
        console.log('Asyn task is complelte');
        resolve()
    },1000)
})

promiseOne.then(function(){  // jo eshme .than ka jo work hota hai wo sidha reslove hai jo setTimeout ke aandar likha hai us kaam ke karne ke bhad sidha resolve yani promiseOne.then code work krega
    console.log('Promise consumed');
})


new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log('Async 2 task is completed');
        reslove()
    },1000)
}).then(function(){
    console.log('Async 2 resloved');
}) // es ke aandar hme alag promise ka naam na dikar yhi per .then lgakar kar sakte hai

const promiseThree = new Promise(function(reslove,reject){
    setTimeout(function(){
        reslove({ username:'mrzubairdotinn',email:'mrzubair@.in' }) // Resolve ke aandar ham [] or {} bhi de sakte hai 
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
}) // .then ke aandar jo user hai uske aandar resolve ka sara data hai 



// const promiseFour = new Promise(function(reslove,reject){
//     setTimeout(function(){
//        let error = false;
//        if(!error){
//         reslove({username:'mrzubiardotin',password:'zub123'})
//        }else{
//          reject('ERROR: Something went wrong')
//        }
//     },2000)
// })

// promiseFour.then(function(user){
//     // console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){ // .catch me wo run hota hia jisse ham reject me dete hai ya erro ke liye dete hai jo hme erro me show krana ho jab error aaye
//     console.log(error);
// }).finally(function(){ // .fanally ke aandar ye code run hota hi hota chaye rejct ho ya resolve huaa ho 
//     console.log('The promise is either resolved or rejected');
// })


// const promiseFive = new Promise(function(reslove,rejct){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//          reslove({language:'JavaScript',fileName:'JS'})
//         }else{
//          rejct('ERROR: Something went wrong in js')
//         }
//      },2000)    
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response); // esme response ke aandar hmne await krke promiiseFive ka data le liya hai fir uhe hmne response naam ke varible me store kre diye hai
//     } catch(reject){
//         console.log(reject);   // ye esme rejct part ko show krega 
//     }
// } // Ye same kaam karna hai Pormise ki trh

// consumePromiseFive() // agar bina try or catch ke  aap error ki value false rhene dete ha to ye output show kardega varna ye recject ke liye nhi bnaya gya ye usme khud run nhi krega or erro show krega rejcetd is not defien


// In JavaScript, the await keyword is used to pause the execution of an asynchronous code block until a promise is fulfilled. It's part of the async and await feature.
//The await keyword only works inside async functions. It suspends the rest of the code there until the promise resolves. await can only be used with objects that return promises, typically functions that are marked as async.
// JavaScript में await शब्द का उपयोग एक असिंक्रोनस कोड ब्लॉक को सिंक्रोनस तरीके से चलाने के लिए किया जाता है। यह async और await की फीचर हैं।
// await केवल async फँक्शन्स के भीतर काम करता है। await का प्रयोग वास्तविक बाकी कोड को वहाँ रोक देता है, जब तक कि Promise रिजल्ट प्राप्त नहीं होता है। await का प्रयोग केवल उन Promise वाले ऑब्जेक्ट्स के साथ हो सकता है जिनके लिए वे async फँक्शन्स बनाए गए हैं।



// async function zuberGitHub(){
//     try{
//         const response = await fetch('https://api.github.com/users/mrzubairdotin')
//         // console.log(response); // api ke data ko respoce me store kra liye 
//         const data = await response.json() // respsve ko json me convert kar diya or data name ke vareble me store kar diye
//         console.log(data); // ab ye json data show krega
//     }catch(erro){
//         console.log("ERROR ",erro);
//     }
// }
// zuberGitHub() // Note : Await sirf async ke sath hi lagta hia or esme await likna bhat jruru hai 


fetch('https://api.github.com/users/mrzubairdotin')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(erro){
    console.log(erro);
})
// Ye bhi same hi kaam karta hai esme await karne ki koi jrurt nhi hai 
// NOTE : jo fetch jo hota hai wo thoda fast run hota hai q ki JS engine me ushe fecht ke liye speceial micro task queue hota hai jo ki ham es code me bhi dhak sakthe hai agar uper wala ka time sirf 1sec bhi rakde tho phele fecth hi run krega uske bhad baki data show krega 

// fetch() ek JavaScript function hai jo server se asynchronous HTTP requests bhejne ke liye istemal hota hai. Isse aap web server ya kisi aur online resource se data bhej sakte hain aur receive kar sakte hain.

//Yahan fetch() kaam kaise karta hai:

// Request Bhejna: Aapko wo resource ka URL provide karna hota hai jise aap fetch karna chahte hain, sath hi optional configurations jaise headers, request method, etc. bhi de sakte hain.
// Asynchronous Operation: fetch() ek Promise return karta hai. Ye resource fetch karne ka process background me start karta hai jabki aapka baki ka code execute hota rahta hai.
// Response Handle Karna: Jab server response deta hai, fetch() dwara return ki gayi Promise resolve hoti hai, aur ye ek Response object return karta hai. Aap is Response object par json(), text(), blob(), etc. jaise methods ka istemal karke response body se data extract kar sakte hain.
// Error Handle Karna: Agar request fail hoti hai (jaise network error ho, ya server error response return kare), to Promise reject hoti hai, aur aap .catch() ka istemal karke error ko handle kar sakte hain.
