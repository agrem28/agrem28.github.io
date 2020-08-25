/**
 * SCOPE:
 * 
 * 0. Scope refers to where a variable is able to be accessed within certain
 * sections, or blocks, of code. The var keyword has global scope and function
 * scope, while let and const give global scope and block scope, meaning it
 * also conforms to if statements and for loops. Varaibles declared within a
 * more confining scope cannot be accessed outside it.
 */
 
 // 1. Global Scope //
 // Global variables are variables declared outside a block of code.
 var scope = "global";
 console.log(scope); // prints -> global
 // 2. Function Scope // 
 // Variables declared within a function a have function scope.
 function whatsTheScope() {
  var scope = "function";
  console.log(scope); // prints -> function
 }
 whatsTheScope();
 
 // scope redeclared with var creates a new variable called scope separate from
 //   the one declared globally
 console.log(scope); // prints -> global
 
 function whatsTheScope2() {
  scope = "function";
  console.log(scope); // prints function
 }
 whatsTheScope2();
 console.log(scope); //prints -> function
 
 // 3. Block Scope // 
 // The let and const keywords also have block scope, meaning that when declared
 //   inside if statements and loops they are treated like function scope. Var 
 //   keyword variables ignore block scope.
 let scope2 = 'global';
 if (true) {
  let scope2 = 'block';
  console.log(scope2); // prints -> block
 }
 console.log(scope2); // prints -> global
 
 var scope3 = 'global';
 if (true) {
  var scope3 = 'block';
  console.log(scope3); // prints -> block
 }
 console.log(scope3); // prints -> block