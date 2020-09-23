
// CALLBACK
/*
const f = () => setTimeout(() => {
  console.log("this is first's output");
}, 2000);

const s = () => "second's output";

const t = input => setTimeout(() =>
  console.log(input)
, 1000);

const m = (a, b, c) => {
  //*** async/await does NOT work with callbacks, due to that not be async
  console.log("### this is main function");
  console.log("1 - first function output:");
  console.log("2 - second function output:", b());
  console.log("3 - third function output:");
  c("random text");
}

m(f, s, t);
*/


// PROMISE
/* 11111
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`)); // → Got 15
*/

/* 22222
const myPromise = param => new Promise((resolve, reject) => {
  console.log("inside myPromise");
  console.time("1");
  if (param) {
    const to = 1000;
    setTimeout(() => {
      console.timeEnd("1");
      resolve(`Okay after ${to/1000} seconds:)`);
    }, to);
  } else
    reject(new Error("OOOps 💩"))
});

const mp = error => {
  console.log("printing mp");
  console.time("2");
  console.timeEnd("2");
  if (!error)
    return Promise.resolve("promise resolved!!");
  return Promise.reject(":/")
}

const anotherOne = () => new Promise((resolve, reject) => {
  console.log("*** 1 after promise");
  console.time("3");
  const to = 1000;
  setTimeout(() => {
    // return ("*** it was the first one after promise");
    // return Promise.resolve("******");
    console.timeEnd("3");
    resolve("*******");
  }, to);
});

// a Promise.resolve does not work within a setTimeout
// it has to be a new Promise as anotherOne function (above)
const fourth = () => {
  console.log("444 FOURTH");
  console.time("4");
  setTimeout(async() => {
    console.timeEnd("4");
    return await Promise.resolve("returning fourth!!!");
  }, 1000);
};


function main(){
  myPromise(10)
    .then(r => console.log(r)
      // .then(_ => fourth()
      //   .then(m => console.log(m)))
    )
    
    .then(_ => anotherOne()
      .then(m => console.log(m)))

    .then(() => mp(1)
      // in case a .then handle error, it should receive it as the second parameter like below
      .then(
        //first parameter
        (m => console.log("message received from 2nd promise is:", m)),
        //second parameter
        (e => {
          console.log("got an errorrrrrrrr 💩");
          throw new Error(e);
        })
    ))

    .catch(e => console.log("ERROR:", e.message || e));
};

main();

// (async() => await main())();
*/


/* 33333
new Promise((r, reject) => {
  console.log("r:", r);
  console.log("reject:", reject);
  // reject(new Error("Fail"));
})
.then(value => console.log("Handler 1"))
.catch(reason => {
  console.log("Caught failure " + reason);
  return "nothing";
})
.then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing
*/


// ASYNC/AWAIT
/*
async function test1(receivedTime){
  const to = Number(receivedTime) || 1000;
  console.log("within test1");
  console.time(to);
  const result = await new Promise((res, rej) => setTimeout(() => {
    console.log(`\ttest after ${to / 1000} seconds`)
    console.timeEnd(to);
    res(`test's okay - to = ${to}`);
  }, to));
  console.log("\tresult before returning from test1 is:", result)
  return(result);
}

// const test1 = async(param) => {
//   console.log("within test1");
//   // return("test's okay!!");
//   if (param)
//     return Promise.reject("ohoh");

//   return Promise.resolve("test's okay!!");
// }

// function test1(receivedTime){
//   console.log("111- within test1")
//   return new Promise((resolve, reject) => {
//     const to = receivedTime || 1000;
//     setTimeout(() => {
//       console.log(`test after ${to / 1000} seconds`);
//       resolve("test's okay");
//     } , to);
//   }
// )}

// console.log(test1.toString());

test1("error")
  .then(m => console.log("message from test1 IS:::", m))
  .then(_ => console.log("anything"))
  .catch(e => console.log("error:::", e.message || e || "💩"))
  .finally(_ => console.log("finally"));

// (async() => await test1())();
*/

const x = (i, v) => new Promise((res, rej) => {
  // console.log("\n");
  console.time(i);
  return (setTimeout(() => {
    console.timeEnd(i);
    // res(`\n${i}- SOLVED @ ${v}`);
    res(i * 100);
  }, v));
  // if (v)
  //   res("SOLVED");
  // else
  //   rej("REJECTED");
});

// (async() => {
//   console.log("111111111");
//   const x1 = await x(1, 500);
//   const x2 = await x(2, 600);
//   const x3 = await x(3, 700);
//   const x4 = await x(4, 800);
//   const x5 = await x(5, 900);
//   const result = await Promise.all([x1, x2, x3, x4, x5]);
//   console.log("result===" + result);
// })();

x(1, 500)
  // .then(m => console.log(m))
  .then(y => x(2, y)
    .then(m => console.log(m))
  )
  // .then(console.log("m"))
  // .then(process.stdout.write("asd"))
  .catch(console.log)

// process.stdout.write("asd")