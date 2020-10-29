const proxyServer = require("express")();
const bodyParser  = require("body-parser");
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
proxyServer.post("/proxy", async (req, res) => {
  console.log("\nInside Proxy Server");
  // console.log("2- req.headers", req.headers);
  const { url } = req.body;
  const { method } = req.body;
  // console.log("--- body- url:::", url);
  // console.log("--- body- method:::", method);



  /**
   * now, should go to the domain and make a request, changing the header to have ORIGIN header as the same
   * of the requested server.
   * after that, it should return for the client which is asking
   * 
   * https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
   */
  const axios = require("axios");
  try {
    const axiosQuery = await axios({
        method,
        url
      });
    
    console.log("axiosQuery.data", axiosQuery.data);
    return res.send(axiosQuery.data);
    // return res.json({message: `trying to reach ${url}`});

  }catch(error){
    console.log("ProxyServer error01");
    return res.send({error: "Something bad with the proxy"});
  }

});

proxyServer.use((req, res) => {
  res.json({error: "This is a proxyServer."});
})

proxyServer.listen(PORT, () => console.log(`---------------------------------\nProxy Server running at http://localhost:${PORT}\n`));