// -------- Data Type -------- //

// ---- Primitive Data Types ----- //

// String: Represents a sequence of characters, enclosed within single or double quotes.
let naam = "Zubair";
let message = 'hey-dear-user';

// Number: Represents numeric values, including integers and floating-point numbers.
let umar = 25;
let pi = 3.14;

// Boolean: Represents a logical value indicating true or false.
let isStudent = true;
let isWorking = false;

// Undefined: Represents a variable that has been declared but not assigned a value.
let x;

// Null: Represents the intentional absence of any object value.
let y = null;

// Symbol: Represents a unique and immutable value that may be used as the key of an Object property.
const mySymbol = Symbol('description');

// ------ Composite Data Types -------- //

// Object: Represents a collection of properties.
let person = {
    name: "Zubair",
    age: 21,
    isStudent: false
};
console.log(person.name)

// Array: Represents a collection of elements, indexed by integers.
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1])

// Function: Represents a reusable block of code that can be called.
function greet(name) {
    return "Hello, " + name + "!";
}

// Calling the function with a specific name
// let greeting = greet("Zubair");
// console.log(greeting); // Output: "Hello, Zubair!"






"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Zubair")

let name = "Zubair"  // String Data Type
let age = 18  // Number Data Type 
let isLoggedIn = false // boolean Data Type
let state; //  undefined

// number => 2 to power 53
// bigint => very large value
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
