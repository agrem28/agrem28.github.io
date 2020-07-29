/*
* FUNCTIONS:
* 
* 0. 
* 
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
function name(parameter) {} 
// arguments are the specific values used to pass to the function and execute the task
name("Andrew Gremillion"); // "Andrew Gremillion"  is the argument of the function name

// 3. Named Functions //


// 4. Inputs and Outputs //
// The inputs of a function are the parameters defined when naming the function. These
//    variables decide how the function outputs a result. The output is then logged with the 
//    keyword return. 
function toUpperCase(string) {  // string is the input or parameter of the function
    return string.toUpperCase();  // return signifies the output will be the input string
}                                 //    set to uppercase

// 5. Scope //
// Variables created within a function are only accessable from inside the function. Therefore,
//    different functions are able to have variables of the same name. Global variables are 
//    able to be utilized within all functions.
function makeString() {
    var str = "string";
}
// console.log(str); // returns undefined because str is contained within makeString

// 6. Closures //