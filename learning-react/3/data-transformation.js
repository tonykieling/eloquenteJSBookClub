// const letters = ["A", "b", "C", "d", "bees", "abc"];
// console.log("### letters", letters);
// const stringOfLetters = letters.join("X").split("X");
// console.log("stringOfLetter", stringOfLetters);
// const onlyAs = letters.filter(e => e[0].toLowerCase() === "a");
// console.log("onlyAs", onlyAs);

// const functionToCutStartingB = arr => arr.filter(e => e[0].toLowerCase() !== "b");
// const cutBs = functionToCutStartingB(letters);
// console.log("cutBs:", ("\n\t").trim(), cutBs.join("\n\t"));

// const functionAddLetter = arr => arr.map(e => ({name: `letter ${e}`}));
// const addLetter = functionAddLetter(letters);
// console.log("addLetter", addLetter);

// const changeBees = arr => arr.map(e => e === "bees" ? ({name: "honey"}) : ({name: `letter ${e}`}));
// const cB = changeBees(letters);
// console.log("cB", cB);

// console.log("### letters", letters);


// const schools = [
//   { name: "Yorktown" },
//   { name: "Stratford" },
//   { name: "Washington & Liberty" },
//   { name: "Wakefield" }
// ];
// const editSchool = (oldName, newName, arr) => arr.map(e => {
//   console.log("e", e, "oldName", oldName, "newName", newName);
//   return ((e.name === oldName) ? ({...e, name: newName}) : ({...e}));
// });
// console.log(editSchool("Wakefield", "NEW NAME", schools));
// console.log(schools);


// // tranform an array into an object
// let ar = [1, 0];
// const m = 6;
// const n = [7];
// console.log([...ar, 4, 3, ...n, m]);
// console.log(Object.keys(ar));
// const newObj = ar.map((e, i) => ({index: i, score: e}));
// console.log("newObj", newObj);


// // // tranform an object in an array of objects
// let states = {rs: 1, sc: 2, pr: 3, sp: 4};
// // console.log({...states, b: "asd"});
// // console.log(Object.entries(states));
// // console.log(Object.values(states));
// // console.log(Object.keys(states));
// const newArr = Object.keys(states).map(e => ({name: e, number: states[e]})); 
// // const newArr = Object.entries(states).map(e => ({name: e[0], number: e[1]})); // another way to do the same thing above
// console.log(newArr);


// const ages = [21, 18, 42, 40, 64, 63, 34];
// // const maxAge = ages.reduce((max, age) => {
// //   console.log(`${age} > ${max} = ${age > max}`);
// //   if (age > max) {
// //     return age;
// //   } else {
// //     return max;
// //   }
// // }, 0);
// const maxAge = ages.reduce((max, age) => ((max > age) ? max : age), 0); // it does the same as above

// // // how reduce works: previous can be the accumulator if there is some action on it
// // //  here, previous is gonna happen because the function ends returning the current (it will be previous in the next round)
// // TAKE AWAY from this is:
// // reduces receives two arguments: a callback and a initial value
// // const maxAge = ages.reduce(
// //  (previous, current) => { // this is the callback
// //     console.log("accumulator", previous, "current", current);
// //     return current;
// //   }, 
// //   0  // initial value
// // );

// console.log("maxAge", maxAge);


// //more about REDUCE
// const t = [1, 2, 3].reduce( // same as for reduceRight
//   //1- callback function
//   (accumulator, current) => {
//     console.log("accumulator", accumulator, "current", current);
//     return current + accumulator;
//   },
//   //2- initial value to the accumulator
//   0
// );
const t = [1, 2, 3].reduceRight((acc, cur) => acc + cur, 0);
console.log("reduce's result = ", t);