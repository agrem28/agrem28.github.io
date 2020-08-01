/*
* STRING MANIPULATION:
* 
* 0. Strings are a primitve data type made up of a sequence of characters. They are used
* to display data in the form of text. 
* 
* 
*/

// 1. Operators //
// Characters in a string can be accessed by its index in much the same way as an array.
//    The first character is index 0 and the last is string.length-1;
// Concatonation is used to join two strings into one.
var str = "Andrew " + "Gremillion"; // str = Andrew Gremillion
// The \ character is used to insert a character that would otherwise disrupt a string.
str = 'don\'t'; // str = don't
str = "I said, \"Hello.\""; // str = I said, "Hello."
str = "\\ is a backslash."; // str = \ is a backslash.

// \ is also used in conjunction with certain letters to perform actions on the console.
str = "Andrew\nGremillion"; // puts "Gremillion" on a new line
str = "Andrew\tGremillion"; // puts a tab between "Andrew" and "Gremillion"

// 2. Methods //
// There are various methods that can be applied to strings to perfom different actions. All
//    string methods do not modify the original string. Instead, they return a new string.
str = "Andrew Gremillion";
str.length; // returns the amount of characters in the string
str.concat(" ", "rocks!"); // adds the parameter values to the end of the string
str.slice(0, 6); // copies the characters from first parameter (inclusive) to last parameter
//    (exclusive) and returns the removed string
str.substr(7, 10); // similar to slice method but the second parameter is the length of the 
//    string to be removed
str.replace("Andrew", "Kevin"); //  replaces the first instance of the specified string with 
//    a new value; does not change the original string; returns the new string; case sensitive
str.replace(/Andrew/g, "Kevin"); // using a regular expression as so will replace all instances
//   of the string
str.toUpperCase(); // converts the string to all uppercase
str.toLowerCase(); // converts the string to all lowercase
