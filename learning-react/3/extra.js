
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

const obj = { bs: 12 };
function w() {
  const { bs } = obj;
  console.log("ah...........", bs);
  // const obj = "something here";
}
w();