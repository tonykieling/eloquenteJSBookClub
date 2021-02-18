const PORT = 7890;
const express = require("express");
const app = express();
// const path = require("path");

// it uses a midleware to delivery files from a directory passed as parameter
app.use(express.static("public"));

// it deliveres front-end files to the client/browser
// app.get("*", (req, res) => {
//   console.log("receiving request");
//   return res.sendFile(path.join(__dirname, "./public", "index.html"));
// });

// app.get("*", (req, res) => {
//   console.log("data is coming");
//   return res.send("OK");
// });

app.listen(PORT, () => console.log(`\n### Server listening at http://localhost:${PORT}`));