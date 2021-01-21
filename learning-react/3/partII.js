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



const check = (param, arr, i = 0) => {
  // for (let index = 0; index <= arr.length; index++) {
    //   if (arr[index] === param) return "YEAP!";
    // }
  // return `${param} does not belong to [${arr}]`;

  // recursion
  // console.log("=", param, arr, i, arr[i]);
  if (arr[i] === param) return true;
  return ((i === arr.length -1) ? false : check(param, arr, ++i));
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(check(55, array));