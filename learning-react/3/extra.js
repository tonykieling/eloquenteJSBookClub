
// trying to test the difference btw math methods
// *in hackerrank, sometimes it may be relevant
// for (let c = 0; c < 10; c++) {
//   console.log("### num * num");
//   console.time("a");
//   console.log([...Array(10000000).keys()].reduce((a, b) => b * b));
//   console.timeEnd("a");
// }

// for (let c = 0; c < 10; c++) {
  // console.log("### num ** 2");
  // console.time("a");
  // console.log([...Array(10000000).keys()].reduce((a, b) => b ** 2));
  // console.timeEnd("a");
// }

// for (let c = 0; c < 10; c++) {
//   console.log("### Math.pow(num, 2");
//   console.time("a");
//   console.log([...Array(10000000).keys()].reduce((a, b) => Math.pow(b, 2)));
//   console.timeEnd("a");
// }


const v = "something to be checked."
const v1 = v.split(" ");
console.log(v1[v1.length - 1])
console.log(v.slice(1));

// const obj = { bs: 12 };
// function w() {
//   const { bs } = obj;
//   console.log("ah...........", bs);
//   const obj = "something here";
// }
// w();
// // GOTCHA:
// // first, in the creation step, the program list all binders.
// // in the w function context, it declares all variables: bs and obj, initializing each as undefined, 
// //  even though there is the same binder one level above (obj).
// // That means, in the first stage, it does not assign any value for the binder.
// // Because that, it will get an error
