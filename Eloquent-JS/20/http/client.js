/**
 * HTTP client using http node's module
 */
const { request } = require("http");
let requestStream = request({
  // hostname  : "eloquentjavascript.net",
  // path      : "/20_node.html",
  // hostname  : "http://localhost:8007",
  // hostname  : "localhost:8007",
  hostname  : "localhost", // when the server is local, should use in this way, separating hostname and port in diff bindings
  port      : 8007,
  path      : "/anyhingasd",
  method    : "GET",
  headers   : {Accept: "text/html"}
}, resp => console.log("Server replied:", resp.headers));
requestStream.end();