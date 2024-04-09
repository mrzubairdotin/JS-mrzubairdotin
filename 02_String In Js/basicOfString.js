// In JavaScript, a string is a sequence of characters enclosed within either single quotes (') or double quotes (").
let str1 = 'Hello, world!';
let str2 = "This is a string.";
let str3 = '123'; // String containing numeric characters
let str4 = ""; // An empty string
let str5 = ' '; // A string containing a single space
let str6 = "It's raining."; // String with single quotes inside double quotes
let str7 = 'He said, "Hello!"'; // String with double quotes inside single quotes
let str8 = `Backticks can also be used for strings.`; // String using backticks (template literals)

// Multiline string using backticks
let multilineStr = `
    This is a multiline
    string in JavaScript.
    It spans across
    multiple lines.
`;

// ------------------------- 

const name = "Zubair ";
const repoCount = 21;

console.log(name + repoCount + " Value");   // Output: Zubair 21 Value
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Output: Hello my name is Zubair  and my repo count is 21

const myName = new String('zubair-khan-com');

console.log(myName[0]);  // Output: z
console.log(myName.__proto__); // Output: [String: '']
console.log(myName.length);   // Output: 15
console.log(myName.toUpperCase());  // Output: ZUBAIR-KHAN-COM
console.log(myName.charAt(2)); // Output: b
console.log(myName.indexOf('t')); // Output: 5

const newString = myName.substring(0, 4);
console.log(newString); // Output: zuba
const anotherString = myName.slice(-8, 4);
console.log(anotherString);  // Output: 

const newStringOne = "   zubair    ";
console.log(newStringOne);  // Output:    zubair    
console.log(newStringOne.trim()); // Output: zubair

const url = "https://Zukbair.com/zubair%20khan";
console.log(url.replace('%20', '-')); // Output: https://Zukbair.com/zubair-khan
console.log(url.includes('ravi')); // Output: false
console.log(myName.split('-'));  // Output: [ 'zubair', 'khan', 'com' ]