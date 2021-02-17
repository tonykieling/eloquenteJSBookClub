const express = require("express");
const app = express();
const PORT = 3333;

// console.log("__dirname", __dirname);
// console.log("process.cwd()", process.cwd());

// app.use(express.static("public"));

// /*
// app.get("/", (req, res) => {
//   console.log(`1- app.get("/")`);
//   return res.sendFile('./home.html', { root: __dirname });
//   // res.sendFile('./landing-page/home.html', { root: __dirname }); // it does NOT work
// });

app.get("/home", (req, res) => {
  console.log(`2- app.get("/home")`);
  return res.sendFile("./home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  console.log(`3- app.get("/about")`);
  return res.sendFile("./home.html", { root: __dirname });
});
// */

app.get("/", (req, res) => {
  console.log(`4- app.get("/")`);
  app.use(express.static("public"));
});

// app.use("/", express.static("public"));


app.listen(PORT, () => console.log(`\n###Server listening on ${PORT}`));