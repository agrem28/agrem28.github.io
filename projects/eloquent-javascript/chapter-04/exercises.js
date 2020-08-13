////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  var range = [];
  if (step < 1) return range; // returns empty array for invalid step value
  if (start < end) {
    for (let i = start; i <= end; i+=(step||1)) { // increment is either step or 1
      range.push(i); 
    }
  } else if (start > end) {
    for (let i = end; i <= start; i+=(step||1)) {
      range.push(i);
    }
  } 
  return range;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var sum = 0;
  for (let element of array) {
    sum += element;
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var newArray = [];
  for (let element of array) {
    newArray.unshift(element);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length/2); i++) {
    var placeholder = array[i];
    array[i] = array[array.length-i-1];  // swapping elements of opposite indexes in array
    array[array.length-i-1] = placeholder;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  var list = {
    value: array[array.length-1],  // creates the innermost object
    rest: null
  };
  for (let i = 1; i < array.length; i++) {
    list = {
      value: array[array.length-i-1],   // creates the parent object during each iteration of the loop
      rest: list
    };
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {
    value: value,
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (n < 0) return undefined;
  if (n === 0) {
    if (list === null) {
      return undefined;
    }
    return list.value;
  } else {
    return nth(list.rest, n-1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function deepEqual(value1, value2) {
//   if (!(value1 instanceof Object) && !(value2 instanceof Object)) {
//     return value1 === value2;
//   } else if (value1 === null || value2 === null) {
//     return false;
//   } else {
//     if (Object.keys(value1).length === 0) {
//       if (Object.keys(value2).length === 0) {
//         return true;
//       } else return false;
//     } else if (Object.keys(value2).length === 0) return false;
//     return deepEqual(Object.keys(value1)[0], Object.keys(value2)[0]);
//   }
// }

function deepEqual(value1, value2) {
  if (value1 === value2) return true; // if both value1 and value2 are null or undefined and exactly the same
  if (!(value1 instanceof Object) || !(value2 instanceof Object)) return false; // if they are not strictly equal, they both need to be Objects
  if (typeof value1 !== typeof value2) return false;
  for (var p in value1) {
    if (!value1.hasOwnProperty(p)) continue;
    if (!value2.hasOwnProperty(p)) return false; // allows to compare value1[p] and value2[p] when set to undefined
    if (value1[p] === value2[p]) continue; // if they have the same strict value or identity then they are equal
    if (typeof(value1[p]) !== "object") return false; // Numbers, Strings, Functions, Booleans must be strictly equal
    if (!deepEqual(value1[p], value2[p])) return false; // Objects and Arrays must be tested recursively
  }
  for (p in value2) {
    if (value2.hasOwnProperty(p) && !value1.hasOwnProperty(p)) return false;
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
