// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-agrem28');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./agrem28.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.filter(array, function(customerObj){
        return customerObj.gender === 'male';
    }).length;
};

var femaleCount = function(array) {
    //if the first element of the array is not the same datatype as the expected output i need a seed
    return _.reduce(array, function(counter, customerObj){
        if (customerObj.gender === 'female') counter++;
        return counter;
    }, 0);
};

var oldestCustomer = function(array) {
    var oldestCust = array[0];
    for (var element of array) {
        if (element.age > oldestCust.age) {
            oldestCust = element;
        }
    }
    return oldestCust.name;
};

var youngestCustomer = function(array) {
    var youngestCust = array[0];
    for (var element of array) {
        if (element.age < youngestCust.age) {
            youngestCust = element;
        }
    }
    return youngestCust.name;
};

var averageBalance = function(array) {
    var sum = 0;
    for (let element of array) {
        var comma = element.balance.indexOf(",");
        sum += parseFloat(element.balance.slice(1, comma) + element.balance.slice(comma+1, element.balance.length));
    }
    return sum/array.length;
};

var firstLetterCount = function(array, letter) {
    return _.filter(array, function(customerObj){
        return customerObj.name[0] === letter.toUpperCase();
    }).length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    for (let element of array) {
        if (element.name === customer) {
            return _.filter(element.friends, function(friendObj){
                return friendObj.name[0] === letter.toUpperCase();
            }).length;
        }
    }
};

var friendsCount = function(array, name) {
    return _.reduce(array, function(seed, customerObj){
        for (let element of customerObj.friends) {
            if (element.name === name) seed.push(customerObj.name);
        }
        return seed;
    }, []);
};

var topThreeTags = function(array) {
    var tagsObj = [];
    for (let element of array) {
        for (let tag of element.tags) {
            if (tagsObj.hasOwnProperty(tag)) {
                tagsObj[tag]++;
            } else tagsObj[tag] = 1;
        }
    }
    var sortable = [];
    for (let tag in tagsObj) {
        sortable.push([tag, tagsObj[tag]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    var topTags = [sortable[sortable.length-1][0], sortable[sortable.length-2][0], sortable[sortable.length-3][0]];
    return topTags;
};

var genderCount = function(array) {
    return {
        'male': _.reduce(array, function(counter, customerObj){
            if (customerObj.gender === 'male') counter++;
            return counter;
        }, 0),
        'female': _.reduce(array, function(counter, customerObj){
            if (customerObj.gender === 'female') counter++;
            return counter;
        }, 0),
        'non-binary':_.reduce(array, function(counter, customerObj){
            if (customerObj.gender === 'non-binary') counter++;
            return counter;
        }, 0)
    };
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
