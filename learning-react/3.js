
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
  *   - immutability, 
  *   - purity, 
  *   - data transformation, 
  *   - higher-order functions, and 
  *   - recursion
  */
 
// Immutability
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

