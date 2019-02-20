"use strict";

window.builtins = {};

// In this exercise, we'll be recreating some common JavaScript built-in
// functions such as contains() and trim() using the skills we already know.

// For a reference to all JavaScript built-in objects and functions,
// check out this MDN reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// ----------------------------------------------------------------------------

// Exercise 1. trim() using loops and conditionals

// Write a function that takes a string and returns the same string without
// leading and trailing spaces.

// ex. builtins.trim('  Horizons  ') -> 'Horizons'
// ex. builtins.trim('Hello World!    ') -> 'Hello World!'
builtins.trim = function(str) {
  let newStr = "";
  let start = 0, end = str.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      start = i;
      break;
    }
  }
  for (let j = str.length; j >= 0; j--) {
    if (str[j-1] !== " ") {
      end = j;
      break;
    }
  }
  return str.substring(start,end);
};

// ----------------------------------------------------------------------------

// Exercise 2. contains() using indexOf()

// Write a function that takes a string to be searched and a string to
// search for, returning true or false as to whether or not the latter
// was found in the source string.

// ex. builtins.search('Horizons', 'o') -> true
// ex. builtins.search('Horizons', 'oz') -> false
// ex. builtins.search('rizo', 'Horizons') -> false
// ex. builtins.search('', 'Horizons') -> false
// ex. builtins.search('Horizons', '') -> true
// ex. builtins.search('Horizons', 'h') -> false

builtins.search = function(sourceString, searchString) {
  if (sourceString.indexOf(searchString) != -1) {
    return true;
  } else {
    return false;
  }
};

// ----------------------------------------------------------------------------

// Exercise 3. Rewriting reverse()

// Write a function that takes an array and returns the array in reversed order
// (by indices).

// ex. builtins.reverse([1, 2, 3]) -> [3, 2, 1]
// ex. builtins.reverse(['dogs', 'cats', 'moose']) -> ['moose', 'cats', 'dogs']
// ex. builtins.reverse([]) -> []
// ex. builtins.reverse([123]) -> [123]

builtins.reverse = function(arr) {
  if (arr.length === 1 | arr.length === 0) {
    return arr;
  }
  let next = arr.shift();
  return builtins.reverse(arr).concat(next);
};
