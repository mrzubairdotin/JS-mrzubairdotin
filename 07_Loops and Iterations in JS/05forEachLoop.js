// forEach
// In JavaScript, the forEach() method executes a provided function once for each array element. It's a convenient way to iterate over arrays and perform an action for each element without the need for a traditional for loop.
// HINDI : JavaScript में, forEach() विधि द्वारा प्रदान किए गए फ़ंक्शन को प्रत्येक एरे तत्व के लिए एक बार चलाया जाता है। यह एरे के सभी तत्वों पर एक एक्शन को करने का एक सुविधाजनक तरीका है और पारंपरिक for लूप की आवश्यकता नहीं होती।

/* 
   syntax
   array.forEach(function(currentValue, index, array) {
  // code to execute for each element
  });
*/
// array: This is the array you want to iterate over.
//function(currentValue, index, array): This is the callback function that will be called once for each element in the array. It can take up to three arguments:
//urrentValue: The current element being processed in the array.
//index (optional): The index of the current element being processed.
//array (optional): The array forEach was called upon.


const files = ["mp3", "mp4", "pdf", "docs", "txt"]

// files.forEach(function (data){ // // esme call back funtion hota hai esliye esma function ka naam likne ki koi jrurt nhi hai
// console.log(data);
// })

// files.forEach((data) => console.log(data)) // ye arrow funtion se bhi kar sakte hai


const studentNames = ["Arman","Anas","Anam","Arnab"];

function printMe(name){
  console.log(name);
}
// studentNames.forEach(printMe) // hme funtion ka refernce dena hai sirf example printMe funtion ko exute nhi karna hai console ke aandar example printMe()

//  studentNames.forEach((item,index,arr) => {console.log(item,index,arr);})  // Ye hame sirf item hi nhi deta hai ye index or array bhi de sakte hai or deta hai


const myData = [
    {
        fileType: "Audio",
        fileName: "mp3"
    },
    {
        fileType: "Video",
        fileName: "mp4"
    },
    {
        fileType: "Text",
        fileName: "txt"
    }
] //ye array ke aandar  object hai

myData.forEach( (data) => {
    console.log(data.fileType);
} )























const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val){ console.log(val);}); // esme call back funtion hota hai esliye esma funion ka naam likne ki koi jrurt nhi hai

// coding.forEach((item) => { console.log(item);}) // ye arrow funtion se bhi kar sakte hai

// function printMe(itm){
// console.log(itm);
// }

// coding.forEach(printMe)  // Ham ehse bhi funtion bnakar value le sakte hai


// coding.forEach((item,index,arr) => {console.log(item,index,arr);})  // Ye hame sirf item hi nhi deta hai ye index or array bhi de sakte hai or deta hai

// const myCoding = [
//     {
//         fileType: "Java",
//         fileName: "Java"
//     },
//     {
//         fileType: "Python",
//         fileName: "py"
//     },
//     {
//         fileType: "Java Script",
//         fileName: "js"
//     }
// ] //ye array ke aandar  object hai

// myCoding.forEach((item) => {console.log(item.fileType);})

// agar hm value
