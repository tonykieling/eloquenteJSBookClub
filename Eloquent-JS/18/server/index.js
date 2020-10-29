// const server = require("express");
// const app = server();
const app = require("express")();
const PORT = process.env.PORT || 7890;

// general middleware to be ran for every request received by the server
app.use((req, res, next) => {
  console.log("inside app.use");
  // res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Origin", "https://a50b711aa6ad.ngrok.io/"); 
  // above line allows only requests coming from the current domain
  // depending on the deployment env, it will be a variable called process.env.ORIGIN
  // for the current situation, ngrok is running the server on the web
  // and the it being limitted for requets comming ONLY from its domain
  // the proxy server is gonna overcome it
  next();
});

// hello middleware
app.get("/hello", (req, res) => {
  console.log("=> Inside HELLO\n\n");
  // console.log("1- received hello from the client by the server");
  // console.log("2- req.headers", req.headers);
  // console.log("3- res.get.headers", JSON.stringify(res.getHeaders()));
  // console.log("3- res.get.headers", res.header()._headers);
  // return res.send(`hello to you too: ${JSON.stringify(res.getHeaderNames())}`);
  return res.send(`hello to you too: ${JSON.stringify(req.headers)}`);
});

app.use("*", (req, res) => {
  res.json({error: "Please especify the end point you are trying to reach. Was that /hello?"});
});

app.listen(PORT, () => console.log(`server running at port ${PORT}`))