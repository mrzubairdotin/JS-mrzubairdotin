// Immeditely Invoked Funtion Expression (IIFE)
// iife tb use karte hai jb code me bhot jyada polution ho ya jyada code ho or hme kio funtion sabse phele run krana ho to iffe use kate hai 

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})(); // agr ek hi iffe use karna hai to bina ; ke bhi kaam krega

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Zubairrr")