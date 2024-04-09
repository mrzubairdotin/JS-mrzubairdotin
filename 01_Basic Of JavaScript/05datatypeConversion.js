// In JavaScript, data type conversion is the process of converting a value from one data type to another. This can happen implicitly (automatically by JavaScript) or explicitly (manually by the programmer).

// ------------ Implicit Conversion ------------- //
// JavaScript automatically performs conversions in certain situations, such as when using operators between different data types or passing arguments to functions expecting a different type.
let x = 10; // Number
let y = "5"; // String
let result = x + y; // JavaScript will implicitly convert y to a number
console.log(result); // Output: "105" (string concatenation)


// ------------- Explicit Conversion ------------- //
// Developers can explicitly convert data types using built-in functions or methods.

// String to Number
let str = "123";
let num = Number(str); // Explicitly convert string to number
console.log(num); // Output: 123

// Number to String
let num1 = 123;
let str2 = num.toString(); // Explicitly convert number to string
console.log(str2); // Output: "123"

// Boolean to Number
let bool = true;
let num3 = Number(bool); // Explicitly convert boolean to number
console.log(num3); // Output: 1 (true is converted to 1)

// String to Boolean
let str4 = "true";
let bool1 = Boolean(str4); // Explicitly convert string to boolean
console.log(bool1); // Output: true (non-empty string is converted to true)

// Number to Boolean
let num5 = 0;
let bool2 = Boolean(num5); // Explicitly convert number to boolean
console.log(bool2); // Output: false (0 is converted to false)

// Using parseInt and parseFloat for String to Number conversion
let str6 = "123.45";
let num6 = parseFloat(str6); // Explicitly convert string to float
console.log(num6); // Output: 123.45

// Using String() constructor for Explicit String Conversion
let num7 = 123;
let str7 = String(num7); // Explicitly convert number to string
console.log(str7); // Output: "123"


// ------------------------------------------------- //

let score = "112abc"

console.log(typeof score); // Output: "string"
// console.log(typeof(score)); // Output: "string"

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // Output: "number"
// console.log(valueInNumber); // Output: 123


// "33" => Output: 33
// "33abc" => Output: NaN
//  true => Output: 1; false => Output: 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Zubair" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);         // Output: "33"
console.log(typeof stringNumber);  // Output: "string"


// ---------------- Operations ---------------------- //

let value = 3;
let negValue = -value;
console.log(negValue);         // Output: -3

console.log(2 + 2);            // Output: 4
console.log(2 - 2);            // Output: 0
console.log(2 * 2);            // Output: 4
console.log(2 ** 3);           // Output: 8
console.log(2 / 3);            // Output: 0.6666666666666666
console.log(2 % 3);            // Output: 2

let str13 = "Mr";
let str14 = " Zubair";

let str15 = str3 + str4;
console.log(str15);             // Output: "Mr Zubair"

console.log("1" + 2);          // Output: "12"
console.log(1 + "2");          // Output: "12"
console.log("1" + 2 + 2);      // Output: "122"
console.log(1 + 2 + "2");      // Output: "32"

console.log((3 + 4) * 5 % 3);  // Output: 2

console.log(+true);            // Output: 1
console.log(+ "");             // Output: 0

let num10, num11, num12;
num10 = num11 = num12 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);      // Output: 101


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

