/*
* FUNCTIONS:
* 
* 0. Functions are blocks of code that can be called as needed to perform a specific task.
* Functions will ONLY be executed when called. They can occur anywhere in the code and be 
* referenced everywhere. Functions are especially useful when needing to perform one task 
* on many different values. These values are called the arguments of the function. These 
* specific arguments are then passed as parameters, or the general placeholders of the 
* values, in the function. 
*/

// 1. Function Purpose //
// To properly utilize a function, it must have a specific task to complete. That task is 
//    executed within the code block of the function only when it is called upon, (or invoked)
//    This allows the code to be reused as many times as necessary with potentially different
//    arguments for different results.
function hello() {          // function defined
    console.log("Hello");
}
hello();    // hello function called and executed

// 2. Parameters vs. Arguments //
// parameters are the variables used in the design of the function
function name(parameter) {
    console.log("My name is ", parameter);
} 
// arguments are the specific values used to pass to the function and execute the task
name("Andrew Gremillion"); // "Andrew Gremillion"  is the argument of the function name

// 3. Inputs and Outputs //
// The inputs of a function are the parameters defined when naming the function. These
//    variables decide how the function outputs a result. The output is then logged with the 
//    keyword return. 
function toUpperCase(string) {  // string is the input or parameter of the function
    return string.toUpperCase();  // return signifies the output will be the input string
}                                 //    set to uppercase
console.log(toUpperCase("abcd")); // prints the output of the toUpperCase function: ABCD

// 4. Scope //
// Variables created within a function are only accessable from inside the function. Therefore,
//    different functions are able to have variables of the same name. Global variables are 
//    able to be utilized within all functions.
function makeString() {
    var str = "string";
}
// console.log(str); // returns undefined because str is contained within makeString
