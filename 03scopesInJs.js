// In JavaScript, there are primarily three types of scopes: global scope, function scope, and block scope.

// ------ Global Scope ------- //
/* Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the JavaScript code. */
// Global scope variable
var globalVariable = "I am in global scope";

function testFunction() {
    console.log(globalVariable); // Accessible
}
testFunction(); // Output: I am in global scope


// ------- Function Scope ------- //
/* Variables declared within a function have function scope. They are accessible only within that function. */
function myFunction() {
    // Function scope variable
    var functionVariable = "I am in function scope";
    console.log(functionVariable); // Accessible
}

myFunction(); // Output: I am in function scope
console.log(functionVariable); // Error: functionVariable is not defined


// ------ Block Scope ------- //
/* Introduced in ECMAScript 6 (ES6), variables declared using let or const within a block (inside curly braces) have block scope. This includes variables declared inside loops, conditionals, and other blocks. */
if (true) {
    // Block scope variable
    let blockVariable = "I am in block scope";
    console.log(blockVariable); // Accessible
}

console.log(blockVariable); // Error: blockVariable is not defined

// Another example of block scope
for (let i = 0; i < 5; i++) {
    console.log(i); // Accessible
}

console.log(i); // Error: i is not defined

