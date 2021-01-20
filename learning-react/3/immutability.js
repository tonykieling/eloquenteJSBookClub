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


// ********************************
// // https://css-tricks.com/understanding-immutability-in-javascript/
// // when a new object is assigned to another one, it is made by reference
// // this means that any changes, still in as object format, it will reflect in the other one (both directions)
// let obj1 = {a: 1, b:2};
// let obj2 = obj1;
// console.log("obj1", obj1, "obj2", obj2);
// obj2.b = "b";
// obj1.c = 3;
// // obj1 = "no more an object";
// // obj2 = "no more an object";
// console.log("obj1", obj1, "obj2", obj2);
// // In React, for instance, the reconciliation process (https://css-tricks.com/how-react-reconciliation-works/) will check the changes before it takes place.
// // As far as I understood, 
// // 1- it will receive an element, its previous state and the current one.
// // 2- check both states to make sure whether it needs to update the state
// // 3- if so, it does that


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

/**
 JavaScript Array Methods: Mutating vs. Non-Mutating
 https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/

 About arryas, JS has 2 types of methods: mutating and non-mutating.
 The article above talks about that.
 
 - ex1. '.push' is mutating
  it is gonna work in both let and const variables
 - ex2. '= [...arr1, 2]' is not mutating
  it only works on let variables
  Why? I do not know for sure..
    Now I know: because spread operator, in the above case, is an immutable function.
    It means it is possible to simple do [...arr1, 2], but it does not change the array.
    In order to change arr1 one has to do arr1 = [...arr1, 2] (for example)
    But, if arr1 is const, it wont work.
    Well, still, push mutates an const array. Language rules..

*/


// // how to prevent changing the original object passed as argument
// const originalObject = { text: "hi there"};
// const changingObject = object => {
//   // not pure function, it changes the original object
//   // return object.name = "Bob"; 

//   // pure function, it DOES NOT change the original object
//   const tempObject = Object.assign({}, object);
//   tempObject["name"] = "Bob";
//   return tempObject;
// };
// const newObject = changingObject(originalObject);
// console.log("newObject:", newObject);
// console.log("originalObject:", originalObject);

// same above to array instead of object
// how to prevent changing the original object passed as argument
const originalArray = [1, 2, 3];
const changingArray = object => {
  // not pure function, it changes the original object
  // return object.name = "Bob"; 

  // pure function, it DOES NOT change the original object
  const tempArray = Object.assign([], object);
  tempArray.push("more stuff");
  return tempArray;
};
const newArray = changingArray(originalArray);
console.log("newArray:", newArray);
console.log("originalArray:", originalArray);