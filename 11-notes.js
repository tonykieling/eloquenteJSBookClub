/*
// CALLBACK
const f = () => setTimeout(() => {
  console.log("this is first's output");
}, 2000);

const s = () => "second's output";

const t = input => setTimeout(() =>
  console.log(input)
, 1000);

const m = async (a, b, c) => {
  //*** async/await does NOT work with callbacks, due to that not be asynchronous
  console.log("### this is main function");
  console.log("1 - first function output:");
  await a();
  console.log("2 - second function output:", b());
  console.log("3 - third function output:");
  c("random text");
}

m(f, s, t);
*/


// PROMISE
/*
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`)); // → Got 15
*/

/*
const myPromise = param => new Promise((resolve, reject) => {
  console.log("inside myPromise");
  console.time("1");
  if (param) {
    const to = 2000;
    setTimeout(() => {
      console.timeEnd("1");
      resolve(`Okay after ${to/1000} seconds:)`);
    }, to);
  } else
    reject(new Error("OOOps :("))
});

const mp = () => {
  console.log("printing mp");
  console.time("2");
  console.timeEnd("2");
  return Promise.resolve("promise resolved!!");
  // return Promise.reject(":/")
}

const anotherOne = () => new Promise((resolve, reject) => {
  console.log("*** 1 after promise");
  console.time("3");
  setTimeout(() => {
    // return ("*** it was the first one after promise");
    // return Promise.resolve("******");
    console.timeEnd("3");
    resolve("*******");
  }, 2000);
});

// a Promise.resolve only does not work within a setTimeout
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
  myPromise(1)
    .then(r => console.log(r))
    .then(_ => fourth()
      .then(m => console.log(m)))
    .then(_ => anotherOne()
      .then(m => console.log(m)))
    .then(_ => mp()
      .then(m => console.log("message received from 2nd promise is: ", m))
      .catch(er => console.log("error from 2nd promise is:", er.message || er))
    )
    .catch(e => console.log("ERROR:", e.message || e));

};

main();

// (async() => await main())();
*/


/*
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

