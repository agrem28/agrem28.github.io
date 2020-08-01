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

function nonFriends(name, array) {
    var newArray = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (!(array[i].name === name)) {
    //         if (array[i].friends && array[i].friends.length > 0) {
    //             for (let j = 0; j < array[i].friends.length; j++) {
    //                 if (array[i].friends[j] === name) {
    //                     break;
    //                 }
    //             } newArray.push(array[i].name);
    //         }
    //     }
    // }
    for (var i = 0; i < array.length; i++) {
        if (!array[i].friends.includes(name) && array[i].name !== name) {
            newArray.push(array[i].name);
        }
    }
    return newArray;
}
var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
console.log(nonFriends("Jimmy", data));
