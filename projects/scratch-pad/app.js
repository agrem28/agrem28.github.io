#!/usr/bin/env node

'use strict';
/*
var greeting = 'Welcome to Operation Spark';
console.log(greeting);

console.log(greeting.length);
console.log(greeting.toLowerCase());
console.log(greeting.replace(/ /gi, "-"));

var args = ["Hello ", "there, ", "king!"];
var result = "";
for (var i = 0; i < args.length; i++) {
    result = result + args[i];
}
console.log(result);
//for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);
console.log(typeof args);
var x = 2;
console.log(`${x} + ${x} = ${x+x}`);*/
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            for (var i in contacts) {
                if (fullName === (contacts[i].nameFirst + contacts[i].nameLast)) {
                    return contacts[i];
                }
            }
            return undefined;
        },
        removeContact: function(contact) {
            for (var i in contacts) {
                if (contacts[i].id === contact.id && contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast) {
                    contacts.splice(i,1);
                    break;
                }
            }
        },
        printAllContactNames: function() {
            for (var i in contacts) {
                console.log(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
            }
        },
        printAllObjects: function() {
            console.log(contacts);
        }
    }
}

var contacts = makeContactList();
console.log(contacts.length());
contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
contacts.addContact(makeContact('2', 'John', 'Fraboni'));
var contactNames = contacts.printAllContactNames();
//contacts.printAllObjects();
