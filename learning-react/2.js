// /**
//  * Function Declaration
//  * It's hosted and it's possible to call it from anywhere in the program (before or after its declaration)
//  */
// console.log(sayHi("Bob"));
// function sayHi(name){
//   console.log(this);
//   return(`Hi ${name}`);
// }
// console.log(sayHi("Bob"));

// /**
//  * Function Expression
//  * It's NOT hosted - only possible to call it after its declaration
//  */
// // console.log(sayHi("Bob")); // ###ERROR
// const sayHi = function(name, message = "Hello"){
//   console.log(this);
//   return(`${message} ${name}`);
// }
// console.log(sayHi("Bob"));

/**
 * Arrow Function
 * It's NOT hosted - only possible to call it after its declaration + THIS has a diff value
 */
// console.log(sayHi("Bob")); // ###ERROR
// const sayHi = (name, message = "Hello") => {
//   console.log(this);
//   return(`${message} ${name}`);
// }
// OR
// const sayHi = (name, message = "Hello") => `${message} ${name}`;
// console.log(sayHi("Bob", "Hey my friend"));
// console.log(sayHi());

// const person = (firstName, lastName) => 
// // {"message": "asd"} // it gives an ERROR // the solution is warpping the object with parentheses
//     ({
//         first: firstName,
//         last: lastName
//     })

// console.log(person("Brad", "Janson"));


// const tahoe = {
//   mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
//   print: function(delay = 500) {
//     setTimeout(() => { // this function will access 'this' from the upper print function, which is mountains
//       console.log(this.mountains.join(", "));
//     }, delay);
//   }
// };

// tahoe.print(); // Uncaught TypeError: Cannot


/**
 * COMPILATION
 */
// Babel makes JavaScript similar to other languages.
//    The resulting JavaScript is more widely supported.
// The process of JavaScript compilation is typically automated by a build tool like webpack or Parcel.



/**
 * DESTRUCTURING
 */

 // // # Objects
// const myObject = {
//   a: "a",
//   b: 2,
//   c: ["first", 2],
//   d: {
//       fa: "this is the first argument",
//       sa: 2
//     }
// };
// const { a } = myObject;
// console.log(`a is equalt to ${a}`);
// // const { d: { fa } } = myObject;
// const fa = myObject.d.fa; // does the same as the line above
// console.log("-fa", fa);

// // when a function argument is an object, it works like so
// const f = ({d: { fa }}) => {
//   console.log("FA: ", fa);
// }
// f(myObject);


// // # Arrays
// const [, , thirdAnimal] = ["Squirrel", "Beaver", "Cow"];
// console.log("thirdAnimal = ", thirdAnimal.toUpperCase());


// // Object literal enhancement is the opposite of destructuring.
// const 
//   name  = "Bob",
//   city  = "Van";
// // const printPerson = ({p}) => console.log(`Person's name is: ${p.name}`); //object methods
// const printPerson = () => { 
//   console.log(`Person's name is: ${this.name}`);
// }; //object methods
// const person = { name, city, printPerson };
// console.log("person: ", person);
// // person.printPerson();

// //* when defining object methods
// const person = {
//   name: "Alice",
//   printName(){ console.log(`Person's name = ${this.name}`)}
// }
// person.printName();


// # Spread operators
// it performs several different tasks. 
// 1- allows us to combine the contents of diff, making a specific array that combines the others one:
// const arr1 = [1, 2, 3];
// const arr2 = ["a", "b", "c"];
// const arr3 = [[1, "a"], ["b", 3, 78]];
// const allArraysPlus = [...arr1, ...arr2, ...arr3, "Plus"];
// console.log("allArrays", allArraysPlus);
// const allArraysPlusCOPY = [...allArraysPlus]; // it copies the array
// allArraysPlusCOPY.reverse();
// console.log("allArraysPlus", allArraysPlus, "allArraysPlusCOPY", allArraysPlusCOPY);
// const [firstElement, ...theRest] = allArraysPlus; // how to get remaining elements of an array
// console.log("firstElement", firstElement, "theRest", theRest.join(" - "));

// // Spread operators are also used to receive a list of arguments in a function and treat them as an array
// const mFunction = (...args) => {
//   const [, , thirdElement ] = args;
//   console.log("args", args, "- thirdElement", thirdElement);
// }
// mFunction(1, 2, "3c");

// // spread operator with objects is similar to using it with arrays
// const fo = { name: "Ted"};
// const so = { city: "Burnaby"};
// const to = {
//   ...fo,
//   ...so,
//   so  //realize the diff btw with and no spread operator
// };
// console.log("third object is: ", to);


/**
 * ASYNCHRONOUS JavaScript
 */
// see directory 2


/**
 * Classes, directory 2
 */


 /**
  * ES6 Modules: This import and export syntax is not yet fully supported by all browsers or by Node. 
  * However, like any emerging JavaScript syntax, it’s supported by Babel. 
  * This means you can use these statements in your source code and Babel will know where to find the modules you want to include in *your compiled JavaScript.
  * *** REACT is okay to use them
  */

// // file myExports.js
// export const print=(message) => console.log(message, new Date())
// export const log=(message, timestamp) => console.log(`${timestamp.toString()}: ${message}`);
// // or expor default ... when only one item (function, binder, etc) to be exported in a file

// // file myimports.js
// import { print, log } from "./text-helpers";
// print("printing a message");
// // import * as all from "./file.js" // => it is used to import all exports from 'file.js'


// CommonJs - used as default by Node
// see directory 2/commonjs1.js and commonjs2.js


/**
 * In functional JavaScript, we can think of our code as being a collection of functions that can be composed into applications.
 */


 