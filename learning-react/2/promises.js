// const p = (time = 3000) => {
//   return new Promise(resolve => setTimeout(() => resolve(`after ${time / 1000}s`), time));
// }
// 
// p(2000)
//   .then(console.log)
//   .catch(error => console.log(error));


// same as above
// async function will wrapp a "return new Promise"
// const p = async(time = 2000) => {
//   setTimeout(() => console.log(`after ${time / 1000}s`), time);
// }

// p();



// Im trying to use the received promise (by using await) as a value and then print it, but not success
const p = async(time = 2000) => {
  setTimeout(() => (`after ${time / 1000}s`), time);
}

// const print = input => console.log(input);

// (async function mainF() {
//   const text = await p(1500);
//   print(text);

// // console.log(await p());
//   // print(await p());
// })();


// the line 11 is not true in the code below when trying to execute line 21
p()
  .then(i => console.log(i));