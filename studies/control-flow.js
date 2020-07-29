/*
* CONTROL FLOW:
*
* 0. If statements are used to control which code blocks to run and when. Essentially, the 
* computer is making desicions based on your conditions. If the condition is true, the code
* runs. If it's false, the block is ignored and we move on to either the next condition or the
* end of the if-else statement.
* 
*/

// 1. If Statements // 
// If statements execute a piece of code only if a condition is met otherwise the section is ignored.
if (3 > 4) {                // does not execute the code because 3 > 4 is false
    console.log("Hello");
}
if (true) {                 // executes the code because true
    console.log("Hello");
}

// 2. Else Statements // 
// Else statements provide a fallback plan of sorts if the original test does not pass
if (false) {                // prints => Goodbye because false
    console.log("Hello");
} else {
    console.log("Goodbye");
}

// 3. Else-If Statements // 
// Multiple if statements can be linked to specify a new condition if the previous was false. All
//    subsequent else-ifs will be ignored if a condition passes.
var stoplight = "red";          
if (stoplight === "green") {         // false
    console.log("GO");
} else if (stoplight === "red") {    // true; prints => STOP
    console.log("STOP");
} else if (stoplight === "yellow") { // skipped
    console.log("SLOW DOWN");
}


// 4. Switch Statements // 
// Switch statements work similarly to else-if statements. The original expression is read and is
//    compared to each case. If there's a match, the code is executed. Otherwise the default case
//    is executed.
switch("red") {
    case "green": 
        console.log("GO");
        break;
    case "red": 
        console.log("STOP");
        break;
    case "yellow": 
        console.log("SLOW DOWN");
        break;
    default: 
        console.log("Invalid color");
}