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

 