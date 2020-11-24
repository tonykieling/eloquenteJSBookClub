// more about JS primitives:
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
/**
 * There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol. There also is null, which is seemingly primitive, but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.

  Most of the time, a primitive value is represented directly at the lowest level of the language implementation.
 */

// https://medium.com/javascript-in-plain-english/what-do-you-really-know-about-variables-data-types-and-immutability-in-javascript-1730835a9e87
// In general, programming languages have 3 steps for working with variables:
// let x;              // 1- declaration, creating a variable.
// x = 10;             // 2- assignment, providing a variable with a value.
// console.log(x * 7); // 3- usage, when the code runs the variable.


// trying to test the difference btw math methods
// *in hackerrank, sometimes it may be relevant
// for (let c = 0; c < 10; c++) {
//   console.log("### num * num");
//   console.time("a");
//   console.log([...Array(10000000).keys()].reduce((a, b) => b * b));
//   console.timeEnd("a");
// }

// for (let c = 0; c < 10; c++) {
  // console.log("### num ** 2");
  // console.time("a");
  // console.log([...Array(10000000).keys()].reduce((a, b) => b ** 2));
  // console.timeEnd("a");
// }

// for (let c = 0; c < 10; c++) {
//   console.log("### Math.pow(num, 2");
//   console.time("a");
//   console.log([...Array(10000000).keys()].reduce((a, b) => Math.pow(b, 2)));
//   console.timeEnd("a");
// }