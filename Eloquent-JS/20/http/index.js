/**
 * HTTP server - node's module
 */
const { createServer } = require("http");
const PORT = 8007;
const server = createServer((req, resp) => {
  console.log("REQ", req.headers); // too much data
  resp.writeHead(200, {"Content-Type": "text/html"});
  resp.write(`
  <html>
    <h1>Hey there</h1>
    <p>Your asked for <code>${req.url}</code></p>
  </html>
  `);
  resp.end();
});

server.listen(PORT);
console.clear();
console.log(`Server running @ ${PORT}`);


/**
 * HTTP client using http node's module
 */
const { request } = require("http");
let requestStream = request({
  // hostname  : "eloquentjavascript.net",
  // path      : "/20_node.html",
  hostname  : "localhost", // when the server is local, should use in this way, separating hostname and port in diff bindings
  port      : 8007,
  method    : 'GET',
  headers   : {Accept: "text/html"}
}, resp => console.log("Server replied:", resp.headers));
requestStream.end();