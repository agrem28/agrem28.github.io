#!/usr/bin/env node

'use strict';
// console.log(greeting);
// var greeting = 'Welcome to Operation Spark';
// console.log(greeting);

// console.log(greeting.length);
// console.log(greeting.toLowerCase());
// console.log(greeting.replace(/ /gi, "-"));

// var args = ["Hello ", "there, ", "king!"];
// var result = "";
// for (var i = 0; i < args.length; i++) {
//     result = result + args[i];
// }
// console.log(result);
// //for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);
// console.log(typeof args);
// var x = 2;
// console.log(`${x} + ${x} = ${x+x}`);

// //contacts.printAllObjects();

function CaesarCipher(str, num) {

    str = str.toLowerCase();
    var result = '';
    var charcode = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)){
            charcode = (str[i].charCodeAt()) + num;
            result += String.fromCharCode(charcode);
        } else result += str[i];
    }
    return result;

}
console.log(CaesarCipher("he$l!l&o1", 1));