const { createServer } = require("http");
// const http = require("http");
// const createServer = http.createServer(); // this 2 lines do the same thing as the first one

//extra info
// console.log(require("http").METHODS);

createServer((request, response) => {
  // extra info about the method being received by the server
  // it can be used to set which method is acceptable and what to do with that
  console.log("request method is = ", request.method);

  response.writeHead(200, {"Content-Type": "text/plain"});
  request.on("data", chunk => {
    const result = chunk.toString().toUpperCase();
    console.log("received:", chunk.toString());
    console.log("returning:", result);
    response.write(result);
    response.write(" more stuff\n");
    // response.write(console.log(chunk.toString().toUpperCase())); // it's not possible due to console.log output is the screen
  });
  request.on("end", () => response.end(() => console.log("ending callback")));
}).listen(8000);