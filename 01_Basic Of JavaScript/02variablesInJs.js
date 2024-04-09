// ----- var ------
/* var: This keyword is used for variable declaration in older versions of JavaScript. Variables declared with var are function-scoped or globally scoped, but not block-scoped. This means that variables declared with var are accessible throughout the entire function or globally, regardless of the block in which they are declared. */
var x = 10;
function myVar() {
    var y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
myVar()
console.log(x); // Output: 10
// console.log(y); // Error: y is not defined

// ----- let --------
/* let: Introduced in ECMAScript 6 (ES6), let allows block-scoping of variables. Variables declared with let are limited to the block (e.g., a loop or an if statement) in which they are declared. */
let a = 10;
if (true) {
    let b = 20;
    console.log(a); // Output: 10
    console.log(b); // Output: 20
}
console.log(a); // Output: 10
// console.log(b); // Error: b is not defined

// ------ const -------
/* const: Also introduced in ES6, const is used to declare constants. Constants must be initialized during declaration and cannot be reassigned a new value. Like let, const is also block-scoped. */
const c = 10;
if (true) {
    const d = 20;
    console.log(c); // Output: 10
    console.log(d); // Output: 20
}
console.log(c); // Output: 10
// console.log(d); // Error: d is not defined

// --------- Variable Naming Rules in JS ---------
// Start with a letter, underscore (_), or dollar sign ($): Variable names must begin with a letter, an underscore (_), or a dollar sign ($). They cannot start with a number or any other special character.
// Subsequent characters can include letters, digits, underscores, or dollar signs
// Avoid using reserved keywords
// Case sensitivity
// Camel case convention:\
// Descriptive and meaningful

// Examples of valid variable names
var myVariable;
var _myVariable;
var $myVariable;
var myVariable2;
var camelCaseVariable;
var firstName;

// Examples of invalid variable names
// var 2myVariable; // Cannot start with a number
// var my-Variable; // Hyphens are not allowed
// var var; // Reserved keyword
// var MyVariable; // Case mismatch


let age = 21
const name = 'Mr. Zubair'
const email = 'mrzubair@github.com'

console.table([age,name,email])

