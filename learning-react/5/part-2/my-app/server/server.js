const express = require("express");
const app = express();
const PORT = 7878;
// const path = require("path");

app.use(express.static("public"));

// the server code below is not working
// console.log("__dirname", __dirname + "/public/index.html")
// app.get("/", (req, res) => {
//   console.log("inside GET");
//   // return res.sendFile(__dirname + "/public/index.html");
//   return res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.listen(PORT, () => console.log(`\nServer running at http://localhost:${PORT}`));
