/*
* OPERATORS:
* 
* 0. Operators are the symbols used in the initialization and manipulation of data. This includes 
* assignment, arithmetic, comparison, logical unary and ternary operators. 
* 
* 
* 
* 
*/

// 1. Assignment //
// The assignment operator is the equal sign. It assigns a value to a variable.
var x = 10; 
// Assignment and arithmetic can be combined to execute both at once.
x += 2; // same as num = num + 2
// This method can be applied to any arithmetic operator.
x -= 2; // same as num = num - 2
x *= 2; // same as num = num * 2
x /= 2; // same as num = num / 2
x %= 2; // same as num = num % 2

// 2. Arithmetic //
// The arithmetic operators are used to manipulate numerical data. These include + for addition, -
//    for subtraction, * for multiplication, / for division, ** for exponentiation, % for modulus
//    (remainder), ++ for increment, and -- decrement.
var y = 3 ** 2 // y is 3 to the power of 2
y++; // adds 1 to y

// 3. Comparison //
var compTest;
x = 10;
// Comparison operators are used to test for true or false. These tests are used in if statements. 
compTest = x == 10; // tests for equal value; returns true
compTest = x == "10"; // returns true
compTest = x == 8; // returns false
compTest = x === 10; // tests for equal value and type; returns true
compTest = x === "10"; // returns false
compTest = x != 8; // tests for inequality; returns true
compTest = x > 3; // tests if x is greater than 3; returns true
compTest = x < 3; // tests if x is less than 3; returns false
compTest = x >= 3; // tests if x is greater than or equal to 3; returns true
compTest = x <= 3; // tests is x is less than or equal to 3; returns false

// 4. Logical //
// Logical operators are used to test the logic between values.
compTest = true && false; // both must be true to pass; returns false
compTest = true || false; // only one must be true to pass; returns true;
compTest = !true; // returns the opposite; returns false

// 5. Unary //
// The typeof operator returns the type of the variable passed to it
typeof x; // returns number
typeof "Andrew"; // returns string
typeof compTest; // returns boolean
typeof []; // returns object
typeof {id:1}; // returns object
typeof function () {}; // returns function
typeof z; // returns undefined 

// 6. Ternary //
// The ternary operator, or the conditional operator, assigns a value to a variable if a condition
//    is met.
var time = 6;
var isMorning = (time < 12) ? "Morning":"Afternoon"; 
// If the variable time is less than 12, isMorning will be equal to "Morning"; otherwise isMorning
//    is equal to "Afternoon"