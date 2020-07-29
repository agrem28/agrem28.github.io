/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use a declaration keyword (var, let, or const) followed by a name (id 
 * or alias) for our variable. When naming a variable, it must be unique and is case sensitive. The
 * best practice is to use names that are relevant to the purpose of the variable and to capitalize
 * the first letter of each word for names with multiple words, which is called camel case. 
 * 
 * 2. The "var" keyword is used so the variable will have function scope; that is, the variable
 * will be able to the called anywhere within the function in which it was declared and assigned.  
 * The "let" keyword is used so the variable will have block scope, such that the variable is only 
 * able to be called within the bracket of code in which it was initialized. The "const" keyword is
 * used for variables which will not be able to change. It must be declared and assigned at the 
 * same time and cannot be overwritten.
 *
 * 3. There are 2 phases of using variables: declaration and initialization (or assignment). 
 * Declaration is so called because the variable is named and the memory space is created for the 
 * variable. Initialization is when the variable gets its value. 
 */

// 1. declaration //
var myName;
/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to any value.
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
{
    let newVar = 1;  // newVar is constrained to this block of code
    console.log(newVar); // prints => 1
} 
// console.log(newVar); // ReferenceError: newVar is not defined
const constant = 3;
// constant = 4; // TypeError: Assignment to constant variable

const weather = 'sunny';
if(weather === 'sunny') {
    const message = 'nice day, eh?';
}
console.log(message);