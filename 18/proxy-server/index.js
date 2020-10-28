const proxyServer = require("express")();
const bodyParser  = require("body-parser");
const { request } = require("express");
const PORT = process.env.PORT || 9870;

proxyServer.use(bodyParser.urlencoded({ extended: true })); // it is need to handle body
proxyServer.use(bodyParser.json());
// proxyServer.use(bodyParser.raw());

// it allows any request to come to this server
proxyServer.use((req, res, next) => {
  console.log("inside app.use");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // above line allows any origin to use the proxy server
  next();
});

// proxy middleware to allow a request for any domain, changing the header for that request and
//  enabbling the communication even tough whether the client is in the same domain to that requested server
proxyServer.post("/proxy", (req, res) => {
  console.log("2- req.headers", req.headers);
  const { domain } = req.body;
  console.log("--- body:::", domain);
  /**
   * now, should go to the domain and make a request, changing the header to have ORIGIN header as the same
   * of the requested server.
   * after that, it should return for the client which is asking
   */

   

  res.json({message: `trying to reach ${domain}`});
});

proxyServer.listen(PORT, () => console.log(`Proxy Server running at port ${PORT}`));