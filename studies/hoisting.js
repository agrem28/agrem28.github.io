/**
 * HOISTING
 * 
 * 0. When a program is executed, all var and function declarations are hoisted to the top of 
 * the code. If referenced before declaration, these variables will have a value of undefined.
 * Let and const variables are not hoisted and will throw a ReferenceError if referenced 
 * before declaration.
 */
 
 // 1. Variables //
 // Variables are hoisted to the top of the scope it was declared in. 
 console.log(a);
 var a = 10;
 function hoisting() {
     console.log(string);
     var string = "Hoisted";
 }
 hoisting();
 
 // 2. Functions // 
 // function declarations hoist the entire block to the top, allowing them to be accessed anywhere
 hoisting2();
 function hoisting2() {
     console.log("hoisted");
 }
 // function expressions are not hoisted
 hoisting3(); // throws TypeError
 var hoisting3 = function() {
     console.log("hoisted?");
 };
 
 // 3. JS Interpreter //
 // The JS interpreter is the engine that reads the lines of code one by one and converts the 
 // actions into computer-readable code. Hoisting allows the interpreter to read variables 
 // before initialization.