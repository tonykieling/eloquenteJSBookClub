const nodeFetch = require("node-fetch");
const URL   = "https://api.randomuser.me/?nat=US&results=1";

// @1 using node-fetch and promises
// nodeFetch(URL)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message));


// // @2 using node-fetch and async/await
// (async() => {
//   try {
//     const query = await nodeFetch(URL);
//     const { results } = await query.json();
//     console.log("data::: ", results);
//   } catch (err){
//     console.error("ERROR: ", err.message);
//   }
// })();
// // runApp();


// @3 Creating a new Promise function
const myPromise = data => new Promise((resolve, reject) => {
    if (data.toUpperCase() === "Y") resolve("your data is okay!");
    else reject("NOT okay :(");
  });

// using the promise created above
(async() => {
  // myPromise("yu")
  //   .then(console.log)
  //   .catch(console.error);
  try {
    const test = await myPromise("test");
    console.log("test", test);
  } catch(error){
    console.error("ERROR:", error);
  }
})();
