/*
function repeat(n, action) {
  //// one way, which repeat the number passed
  // let count = 0;
  // while(count < n){
  //   action(count);
  //   count++;
  // }

  ////another way, it repeat until the number passed - it can be prune to error
  for (let count = 0; count < n; count++)
    action(count);
}

let labels = [];
repeat(5, i => labels.push(`Unit ${i + 1}`));
console.log(labels);
*/

const SCRIPTS = require("./5-SCRIPTS.js");

/*
function greaterThan(n) {
  console.log("nnn:", n)
  return m => m > n;
}

// const greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

const n = 3;
const greaterThanNumber = {};
greaterThanNumber[n] = greaterThan(n);
console.log("asd:", greaterThanNumber[n](3));
*/

/*
function noisy(f) {
  // console.log("-", ...args);
  console.log("---f:", f(...args));
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
console.log(noisy(Math.min)(3, 2, 1));
*/

/* FOREACH
["A", "B"].forEach(l => console.log(l));
*/

/*
require("./5-SCRIPTS.js");
function filter(array, test) {
  let passed = [];
  for (let element of array)
    (test(element)) && passed.push(element);

  return passed;
}
// console.log(filter(SCRIPTS, script => script.living));
console.log(filter(SCRIPTS, script => script.living && script.year > 1940).length);
console.log(SCRIPTS.filter(script => script.living && script.year > 1940).length);
*/

