const nodeFetch = require("node-fetch");
const URL   = "https://api.randomuser.me/?nat=US&results=1";

// @1 using node-fetch and promises
// nodeFetch(URL)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error.message));


// @2 using node-fetch and async/await
(async() => {
  try {
    const query = await nodeFetch(URL);
    const data = await query.json();
    console.log("data::: ", data);
  } catch (err){
    console.log("ERROR: ", err.message);
  }
})();
// runApp();