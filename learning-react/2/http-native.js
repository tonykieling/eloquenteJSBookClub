// this is the node native way to fetch data in another server via http methods
// https://www.valentinog.com/blog/http-js/

const https = require("https");
const URL   = "https://api.randomuser.me/?nat=US&results=1";

https.get(URL, res => {
  res.setEncoding("utf8");
  let receveidData = "";
  res.on("data", data => receveidData += data); // "data" it's the 'listener' for data coming
  res.on("end", () => console.log("- receveidData: ", JSON.parse(receveidData)));
});