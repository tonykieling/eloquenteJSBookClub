const { request } = require("http");
request({
  hostname  : "localhost",
  port      : 8000,
  method    : "MERge" // GET does not send body
  // see more methos on the server file
  // https://blog.bearer.sh/create-node-http-server/
}, response => {
  response.on("data", chunk => process.stdout.write(chunk.toString()))
}).end("Hi there");