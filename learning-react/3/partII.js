// const insideFn = logger => {
//   console.log("logger::", logger.toString());
//   logger("They can be sent to other functions as arguments");
// };

// insideFn(message => console.log(message));



// const string = "Restaurants in Hanalei";
// const newString = string.split(" ")
//   .reduce((currentValue, arrayItem) => currentValue ? currentValue + "-" + arrayItem : arrayItem, "");
// console.log("newString", newString); // Restaurants-in-Hanalei

// const array = [1, 2, 3];
// console.log(array.reduce((a, b, c) => {
//   console.log("a:", a, "b:", b, "c:", c);
//   return a + b;
// }, 0));



// loop vs recursion
// const check = (param, arr, i = 0) => {
  // for (let index = 0; index <= arr.length; index++) {
  //     if (arr[index] === param) return "YEAP!";
  //   }
  // return `${param} does not belong to [${arr}]`;

  // recursion
  // console.log("=", param, arr, i, arr[i]);
  // if (arr[i] === param) return true;
  // return ((i === arr.length -1) ? false : check(param, arr, ++i));
  // OR
// }

// const check = (param, arr, i = 0) => (arr[i] === param) ? true : ((i === arr.length -1) ? false : check(param, arr, ++i));
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(check(5, array));



// // generate an array
// // 1- simplest way, with empty positions
// console.log(Array(10));
// // 2- simple way, with the positions equal to index
// console.log([...Array(10)].map((_, i) => i)); // similar way ([...Array(5).keys()].map(foo => foo + 1))

// // 3- another way, where it is possible define starting and ending point, plus step
// const newArray = (from, to, step = 1) => [...Array(Math.floor((to - from) / step))].map((_, i) => from + (i * step));
// console.log("newArray", newArray(5, 510, 3));
// console.log(check(47, newArray(5, 510, 3)));



// copy objects, spread operator
const originalObj = {name: "Bob", age: "12"};
console.log("1- originalObj", originalObj);

// below, it returns a new object, based on the original one, without changing the original one
const func = objRecv => ({
  // console.log("objRecv:", objRecv);
  ...objRecv,
  "new-item": "asd"
  // return objRecv["new-item"] = "asd";
});

console.log(func(originalObj));
console.log("2- originalObj", originalObj);