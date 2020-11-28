
/**
 * FUNCTIONAL PROGRAMMING
 * 
 * A function is considered a first-class member when it can be declared as a variable and sent to functions as an argument. These functions can even be returned from functions.
 * 
 * functional programming techniques, including arrow functions, promises, and the spread operator.
 */

// // functions as an array element
// const messages = [
//   "They can be inserted into arrays",
//   message => console.log(message),
//   "like variables",
//   message => console.log(message)
// ];
// messages[1](messages[0]);
// messages[3](messages[2]);


// // Functions can be sent to other functions as arguments, just like other variables:
// const insideFn = logger => {
//   console.log("logger = ", logger.toString())
//   logger("They can be sent to other functions as arguments");
// };
// insideFn(message => console.log(message));

// // similar as above
// ((x = "test text") => console.log(x))();


// // They can also be returned from other functions, just like variables:
// // also similar as the above
// // const createScream = logger => message => logger(message.toUpperCase() + "!!!");
// //more details from the line above:
// const createScream = logger => {
//   console.log("1- logger::", logger.toString());
//   return message => {
//     console.log("2- message::", message);
//     logger(message.toUpperCase() + "!!!");
//   };
// };
// const scream = createScream(message => console.log(message));
// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");

//If you see more than one arrow used during a function declaration, this means that you’re using a higher-order function.

// We can say that JavaScript supports functional programming because its functions are first-class citizens. 
// This means that functions are data. They can be saved, retrieved, or flow through your applications just like variables.



/**
 * Imperative Versus Declarative
 * Functional programming is a part of a larger programming paradigm: declarative programming. Declarative programming is a style of programming where applications are structured in a way that prioritizes describing what should happen over defining how it should happen.
 * 
 * React is declarative because you can handle DOM elements with JSX instead of using getElement, appende them and so on.
 */



 /**
  * Functional Concepts
  * 
  * core concepts of functional programming:
  *   - 1/5 immutability, 
  *   - 2/5 purity, 
  *   - 3/5 data transformation, 
  *   - 4/5 higher-order functions, and 
  *   - 5/5 recursion
  */
 
// Immutability (1/5)
// // copy objects - shallow and deep ways
// //* https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
// let color = {
//   color: "green",
//   rating: 0
// };

// console.log("color:", color);
// // let cp = {...color}; 
// // // one way to do a shallow copy - it is gonna work for objects containing primitives, but not for objects
// // console.log("cp:", cp);
// // cp.rating = 10;
// // console.log("cp:", cp);

// //deep copy
// let cp_deep = JSON.parse(JSON.stringify(color));
// cp_deep.rating = 30;
// console.log("cp_deep::", cp_deep);


// const rate_color = (color, rating) => ({
//   ...color,
//   rating
// });

// console.log(rate_color(color, 10));
// console.log("color:", color);

// let newHouse = rate_color(color, 22);
// console.log("newHouse", newHouse);

// let ar = [];
// console.log("1-ar", ar);
// ar.push(1);
// console.log("2-ar", ar);
// ar = [...ar, 33];
// console.log("3-ar", ar);


// Pure Functions (2/5)
/*
A pure function is a function that returns a value that’s computed based on its arguments. Pure functions take at least one argument and always return a value or another function. They do not cause side effects, set global variables, or change anything about application state. They treat their arguments as immutable data.
*/
// More examples on 3/pure-functipn.js file
const testingPF = obj => {
  console.log("inside testing Pure Function");
  obj = {};
  return obj;
}

let sendObj = { a: 1, b: "b"};
console.log("sendObj", sendObj);
const newObj = testingPF(sendObj);
sendObj = {...sendObj, ...newObj};
console.log("sendObj", sendObj);

/**
 * When writing functions in React, one needs to try the following rules:
      1- The function should take in at least one argument.
      2- The function should return a value or another function.
      3- The function should not change or mutate any of its arguments
 */


// Data Transformations (3/5)
/**
 * It is when the computed data by pure functions are put in place, changing the "world"
 */
// more info on 3/data-transformation.js