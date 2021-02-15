var path = require("path");

// module.exports = {
//   entry   : "./src/index.js",
//   output  : {
//     path      : path.join(__dirname, "dist", "assets"),
//     filename  : "bundle.js"
//   },
  
//   module: {
//     rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
//   },

//   devtool: "source-map" // option for source mapping, enabling to check the code source code
//   // devtool: "#source-map"
// };


module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js"
  }
};