/*
* LOOPS:
*
* 0. Loops are used to repeat a block of code while a condition is true. This is achieved by 
* using a conditional statement and a change in the expression to be tested. 
*
*/

// 1. While Loops //
// While loops run if and while a condition is met
var x = 1;
while (x <= 10) {
    console.log(x);   //prints the numbers 1-10
    x++;
}

// 2. For Loops //
// For loops iterate a specific number of times. This is represented by the statements within
//    the for loop's syntax. 
// for (starting point; end point; increment)
// The starting point by convention is usually a new variable called i. The end point 
//    determines the number of times looped. The increment is what drives the loop to the end.
for (var i = 1; i <= 10; i++) {   // prints the numbers 1-10
    console.log(i);
}

// 3. Looping over an Array // 
// The easiest way to loop over an array is with a for of loop. Each iteration of the loop
//    changes the variable to the next element in the array.
var arr = [1,2,3,4,5,6];
for (var i of arr) {
    console.log(i);   // prints the items of the array
}

// 4. Looping over an Object // 
// The for-in loop is used to loop through the properties of an object. Each iteration of the 
//    loop changes the variable to the value of the next key in the object.
var obj = {
    id: 1,
    firstName: "Andrew",
    lastName: "Gremillion"
}
for (var key in obj) {
    console.log(obj[key]);  // prints the values for each key in the obj
}