/*
* DATA TYPES:
* 
* 0. Data type refers to how each variable will be used and the types of operations and methods
* that can be passed to it. In Javascript, the types of data are number, string, boolean, array,
* object and function. 
*
* 1. The variable's data type determines how it will be treated by the machine during runtime. This
* affects operator functions and methods. 
*/

// 1. Number //
var num = 10; 
// The variable "num" is the integer 10 and can have normal mathematical expressions passed to it.

// 2. String //
var str = "abcd";
// The variable "str" is the string of characters abcd because of the quotation marks around the
// characters. Either single quotes ('') or double quotes ("") may be used.

// 3. Boolean //
var bool1 = true;
var bool2 = false;
// Boolean variables can only have 2 values: true and false. 

// 4. Array //
var arr = [1, "2", "abcd", true];
// Arrays are a collection of values in a single variable within square brackets. Arrays can hold 
//    any other type of data, including entire objects and functions.

// The values of an array are accessed using bracket notation (arr[0]), where each value has its own
//    index starting from 0.
console.log(arr[0]); // prints => 1 
console.log(arr[arr.length-1]); // prints => true

// The .length method returns the amount of values within the array. 
console.log(arr.length); // prints => 4 

// The .push(i) method adds a value to the end of the array and returns the new length.
arr.push("Andrew"); // new arr is [1, "2", "abcd", true, "Andrew"]

// The .unshift(i) method adds a value  to the beginning of the array and returns the new length.
arr.unshift(false); // new arr is [false, 1, "2", "abcd", true, "Andrew"]

// The .pop() method removes the value at the end of the array and returns that value.
arr.pop(); // new arr is [false, 1, "2", "abcd", true]

// The .shift() method removes the value at the beginning of the array and returns that value.
arr.shift(); //new arr is [1, "2", "abcd", true]

// The .splice(m,n,i) method removes n number of values from the m position and inserts any 
//    additional parameters i to that position.
arr.splice(2, 1, "DCBA"); // //new arr is [1, "2", "DCBA", true]

// 5. Object //
var obj = {
    firstName: "Andrew",
    lastName: "Gremillion"
};
// Objects are a collection of values stored as name:value pairs called properties. 
// There are two ways to access properties: dot notation and bracket notation
console.log(obj.firstName); // dot notation; prints => Andrew
console.log(obj["lastName"]); // bracket notation; prints => Gremillion

// To add a property simply declare and assign one using either dot or bracket notation.
obj.id = 1; // adds the name:value pair 'id: 1' to obj
obj["city"] = "Metairie"; // adds the name:value pair 'city: "Metairie"' to obj

// 6. Function //
function greeting() {
    console.log("Hello World!");
}
// Functions are blocks of code designed to execute a particular task. 


// 7. undefined, null, NaN //
// A variable is undefined if it hasn't been assigned a value.
var str3; 
// The value null is used when a variable contains nothing.
// Undefined and null is essentially the same except for type; null is an object in Javascript.
var str4 = null; 
// NaN stands for "not a number" and is a term used to describe an illegal operation.
var num2 = 10 * "Andrew"; // num2 = NaN

// 8. Infinity and -Infinity //
// Infinity is the Javascript term for a number outside the largest possible calculable number.
// -Infinity is the value for outside the lowest possible number.
while (num < Infinity) { // infinite loop
    num += num;
}

// 9. Primitive vs. Complex Data Types //
// Primitive data is any single data type with no additional properties or methods. These include
//    strings, numbers, booleans, and undefined.
// Complex data refers to collections and functions. In Javascript, arrays fall under the object
//    umbrella along with null and the Date method. 