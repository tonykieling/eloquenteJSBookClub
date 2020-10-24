// const server = require("express");
// const app = server();
const app = require("express")();
const PORT = process.env.PORT || 7890;

app.use((req, res, next) => {
  console.log("inside app.use");
  res.header("Access-Control-Allow-Origin", "http://localhost:5500");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/hello", (req, res) => {
  console.log("1- received hello from the client by the server");
  console.log("2- req.headers", req.headers);
  console.log("3- res.get.headers", JSON.stringify(res.getHeaders()));
  // console.log("3- res.get.headers", res.header()._headers);
  res.send(`hello to you too: ${JSON.stringify(res.getHeaderNames())}`);
});

app.listen(PORT, () => console.log(`server running at port ${PORT}`))