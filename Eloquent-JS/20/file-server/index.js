/*
const { createServer } = require("http");
const methods = Object.create(null);

const notAllowed = async (request) => {
  console.log("inside NOTALLOWED");
  return {
    status: 405,
    body: `Method ${request.method} is NOT allowed`
  };
};

createServer((req, res) => {
  console.log("cerateserver, req.metgod = ", req.method);
  let handler = methods[req.method] || notAllowed(req);
  handler(req)
    .catch(error => {
      if (error.status != null) return error;
      return{body: String(error), status: 500}
    })
    .then(({body, status = 200, type = "text/plain"}) => {
      res.writeHead({status, "Content-Type": type});
      if (body && body.pipe) return body.pipe(res);
      else res.end(body);
    });
}).listen(8008);
*/

const {createServer} = require("http");
const methods = Object.create(null);
createServer((request, response) => {
  console.log("cerateserver, req.method = ", methods[request.method]);
  let handler = methods[request.method] || notAllowed;
  console.log("handler", handler);
  handler(request)
    .catch(error => {
      console.log("inside CATCH, error = ", error);
      if (error.status != null) return error;
      return {body: String("error"), status: 500};
    })
    .then(({body, status = 200, type = "text/plain"}) => {
      response.writeHead(status, {"Content-Type": type});
      if (body && body.pipe) body.pipe(response);
      else response.end(body);
    });
}).listen(8008);

async function notAllowed(request) {
  console.log("inside NOTALLOWED");
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  };
}