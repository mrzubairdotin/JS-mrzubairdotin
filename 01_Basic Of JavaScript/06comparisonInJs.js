// In JavaScript, comparison operations are used to compare values and return a boolean result (either true or false) based on the comparison.

// Equal (==): Checks if two values are equal.
console.log(5 == 5);   // Output: true
console.log(5 == '5'); // Output: true (coerces string to number)
console.log(5 == 6);   // Output: false

// Not Equal (!=): Checks if two values are not equal.
console.log(5 != 5);   // Output: false
console.log(5 != '5'); // Output: false (coerces string to number)
console.log(5 != 6);   // Output: true

// Strict Equal (===): Checks if two values are equal without type conversion (strict equality).
console.log(5 === 5);   // Output: true
console.log(5 === '5'); // Output: false (different types)
console.log(5 === 6);   // Output: false

// Strict Not Equal (!==): Checks if two values are not equal without type conversion (strict inequality).
console.log(5 !== 5);   // Output: false
console.log(5 !== '5'); // Output: true (different types)
console.log(5 !== 6);   // Output: true

// Greater Than (>): Checks if the left operand is greater than the right operand.
console.log(5 > 3);   // Output: true
console.log(5 > 5);   // Output: false
console.log(5 > 7);   // Output: false

// Less Than (<): Checks if the left operand is less than the right operand.
console.log(5 < 3);   // Output: false
console.log(5 < 5);   // Output: false
console.log(5 < 7);   // Output: true

// Greater Than or Equal To (>=): Checks if the left operand is greater than or equal to the right operand.
console.log(5 >= 3);   // Output: true
console.log(5 >= 5);   // Output: true
console.log(5 >= 7);   // Output: false

// Less Than or Equal To (<=): Checks if the left operand is less than or equal to the right operand.
console.log(5 <= 3);   // Output: false
console.log(5 <= 5);   // Output: true
console.log(5 <= 7);   // Output: true


// ----------------------- Example ----------------------- //

console.log(2 > 1);          // Output: true
console.log(2 >= 1);         // Output: true
console.log(2 < 1);          // Output: false
console.log(2 == 1);         // Output: false
console.log(2 != 1);         // Output: true
console.log("2" > 1);        // Output: true
console.log("02" > 1);       // Output: true
console.log(null > 0);       // Output: false
console.log(null == 0);      // Output: false
console.log(null >= 0);      // Output: true
console.log(undefined == 0); // Output: false
console.log(undefined > 0);  // Output: false
console.log(undefined < 0);  // Output: false
console.log("2" === 2);      // Output: false
