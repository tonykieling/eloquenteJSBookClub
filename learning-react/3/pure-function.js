// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false
// };

// const selfEducate = person => 
// { // NOT pure function
//   person.canRead = true;
//   person.canWrite = true;
//   return person;
// };
// // pure function
// // ({...person, canRead: "YEAH"}); // Option 1
// // { // Option 2
// //   let personCopy = JSON.parse(JSON.stringify(person));
// //   personCopy.canRead = "MAYBE";
// //   return(personCopy);
// // }

// console.log(selfEducate(frederick));
// console.log(frederick);



/**
 * When an array or object are passed to a function, it does via reference.
 * It means all change in the reference will change the original variable.
 * PAY ATENTIOM!!!!
 * 
 * On the other hand, primitives are passed as values!
 * 
*/


let a = "10";
let b = [9, 78];
let c = { a: 1, b:2 };
const f1 = (a, b, c) => {
  console.log(a, b, c);
  a = 0;
  // b = [...b, 6]; // when using a "=", it creates a new local variable
  b.push(7);
  c = 0;
  console.log(a, b, c);
}
// const f1 = (x, y, z) => { // it does not matters for the thing about 'reference X value' - as far as I can see
                             // whether it is a arrow function or not
// // function f1(x, y, z) {
//   console.log("1- receiving: ", x, y, z);
//   x++;
//   y.push("something");
//   // y = [...y, "something"]; // there is a huge diff when using spread operator
//   // because it will create a new local variable and work as value not reference
//   z = {...z, c: "c"};
//   console.log("1- changes: ", x, y, z);
// }
f1(a, b, c);
console.log("2-", a, b, c);


// https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value
// // example 1
// function f(a,b,c) {
//   // Argument a is re-assigned to a new value.
//   // The object or primitive referenced by the original a is unchanged.
//   a = 3;
//   // Calling b.push changes its properties - it adds
//   // a new property b[b.length] with the value "foo".
//   // So the object referenced by b has been changed.
//   b.push("foo");
//   // b = [...b, "foo"]; // what I added to confirm that spread operator creates a new local variable
//   // The "first" property of argument c has been changed.
//   // So the object referenced by c has been changed (unless c is a primitive)
//   c.first = false;
// }

// var x = 4;
// var y = ["eeny", "miny", "mo"];
// var z = {first: true};
// f(x,y,z);
// console.log(x, y, z.first); // 4, ["eeny", "miny", "mo", "foo"], false

// // example2
// let a = [1, 2, 3];
// let b = a[1];
// let c = a[2];
// console.log(a, b, c);
// a[1] = "b";
// a[2] = "c";
// console.log(a, b, c);


// https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing
// https://snook.ca/archives/javascript/javascript_pass