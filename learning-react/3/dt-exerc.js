const arr = [{
    id: 10,
    name: "blue",
    comp: "AB"
  }, 
  {
    id: 20,
    name: "green",
    comp: "XY"
  }, {
    id: 30,
    name: "yellow",
    comp: "TK"
  }, {
    id: 40,
    name: "red",
    comp: "SK"
}];

console.table(arr);
// const obj = arr.reduce((acc, curr) => {
//   return curr
// }, {});
let obj = {};

//using forEach, instead of reduce in order to differentiate them
// see more in the reduces.js file
arr.forEach(e => {
  // console.log("1- e:", e);
  // console.log("1- obj:::", obj);
  obj[e.id] = {name: e.name, composition: e.comp};
  // console.log("\t2- obj:::", obj);
});
console.log("obj", obj);