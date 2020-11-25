// more about JS primitives:
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
/**
 # There are 6 primitive data types: 
    - string, 
    - number, 
    - bigint (added in 2020), 
    - boolean, 
    - undefined, and 
    - symbol. 
    There also is null, which is seemingly primitive, but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.

  Most of the time, a primitive value is represented directly at the lowest level of the language implementation.


  # Six non-primitive data types:
    - Wrapper Objects are temporary objects created that give primitives access to properties and methods.
    - Object Object You can declare an object two ways, literally, let obj = {}; or with a constructor let o = new Object.
    - Array Object, in JavaScript array’s are objects. In laymen terms, you can think of them as a “list”. You can declare an array two ways, literally,let groceryList = ['Apple', 'Banana']; or with the constructor method, const cars = new Array(“Saab”, “Volvo”, “BMW”);.
    - RegEx or Regular Expressions are “patterns used to match character combinations in strings”.
    - Function is a wrapper around a code snippet that can be reused, modified, etc.
    - Date “represents a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.”


primitive types are immutable whereas non-primitives are mutable.
- PRIMITIVES = All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

- NON-PRIMITIVE OBJECTS, or basically anything that has a reference value, is mutable unless you use const and other methods such as seal or freeze methods.

*/

// https://medium.com/javascript-in-plain-english/what-do-you-really-know-about-variables-data-types-and-immutability-in-javascript-1730835a9e87
// In general, programming languages have 3 steps for working with variables:
// let x;              // 1- declaration, creating a variable.
// x = 10;             // 2- assignment, providing a variable with a value.
// console.log(x * 7); // 3- usage, when the code runs the variable.


// IMMUTABILITY
// const will be immutable only when dealing with primitives values
/*
- let and const are both block scope and neither are magically immutable. A variable with const must be declared and assigned a value or it will remain empty because the declaration type disables reassignment and throws a type error when you try.
- “True” immutability happens only when we are working with const, primitive-types or when we use additional methods to non-primitives such as freeze, seal, etc. This means var, let and const can all be immutable and the only difference is the scope of the variable and whether or not you can reassign the value.
*/

// const number = [100];
// Object.freeze(number);
// // Object.seal(number);
// // https://www.geeksforgeeks.org/what-is-the-difference-between-freeze-and-seal-in-javascript/
// // number = [...number, 3]; // const does NOT allow it
// number.pop();
// number.push(200);
// number[0] += 1;
// console.log("number", number);

// let x = 0;
// Object.freeze(x);
// x = 10;   // freeze does not work for let, only for CONST
// console.log("x", ++x);


/**
 * Scope in Javascript
  - Global
    Browser = window
    NodeJS  = global
  - Local (block and function)
    let and const
  - Lexical
    google, and the article, says:
    “a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true, the variables defined inside a function will not be accessible outside that function.”
 */