// https://ui.dev/javascript-visualizer/
// this is a tool for showing the steps that a js program goes through.
// It is based on ES5
// https://www.youtube.com/watch?v=Nt-qa_LlUH0&feature=youtu.be

/*
Steps for a JS program to run:
1- creation
2- execution
3- finished

  In the browser, the default environment always will have 'window' and 'this' objects
  Node will have 'this' and 'global' (which is the 'window' browser's objects)
*/

/**
creation fase in the global execution context
1- Create a global Object
2- Create an object called 'this'
3- Set up memory space for variables and functions
4- Asssign varaible declarations a default value of "undefined" while placing any function declaration in memory (hoisting)
*/

/*
function execution context creation:
1- create an arguments object - yes, this and arguments are valid keywords in a function
2- Create an object called 'this'
3- Set up memory space for variables and functions
4- Asssign varaible declarations a default value of "undefined" while placing any function declaration in memory (hoisting)
*/

// // here, it show that hoisting does not work for function variables 
// console.log(x); // error!!!
// function xx(){
//   var x = 10;
// }
// xx();

// // even in the case below
// function asd(){
//   var v = "text";
//   console.log(v);
// }
// asd();
// console.log(v);


// // FIRST, a variable is searched in its own context execution
// // and after, the program looks at the closest execution parent and so on
// // function variables ARE NOT hosted!
// function first() {
//   // var letter = "A";
//   function firstA() {
//     console.log(letter);
//   }
//   firstA();
// }

// function second() {
//   var letter = "b";
//   console.log(letter);
// }
// console.log(letter);
// var letter = "Y";
// first();
// second();
// console.log(letter);


// // arguments is an object
// function y(){
//   console.log("arguments", arguments); // it is an object
// }
// y(1, 2);


// CLOSURES
// 1- a function that returns other function
// 2- the inner function returned creates a closure
//  AND it keeps the first variable for all the time it gets invoked
// It means, a function will keep a value and its operation/action.

// Whenever there is a function inside of another function (which is returned by the first one),
// even if the parents function's execution context is removed from the stack, 
// the inner function will still remain access to the variable environment of the 
// parent function's execution context. 
// 
// function addition(first){
//   return function(second){
//     return first + second;
//   }
// }

// // closure by arrow function
// const addition = first => second => first + second;

// let addition3 = addition(3);
// console.log(addition3(4));
// let number = 1;
// number += addition3(5);
// console.log(number);


// more complex example from the video in the beggining
var counter = (function() {
  var privateCounter = 0;
  const print = console.log;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      // return privateCounter;
      print(privateCounter);
    }
  };
})();

counter.value();
counter.increment();
counter.increment();
counter.value();
counter.decrement();
counter.value();
