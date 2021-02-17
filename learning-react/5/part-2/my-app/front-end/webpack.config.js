module.exports = {
  // it gets the first js file and bundle with all necessary React components to /public/bundle.js
  // this output has to be loaded in the index.html file
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  
  // it makes the ES6 be loaded by babel
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  // this line will create a bundler for the source code, which helps in debuging tasks - do not need it in prod
  devtool: "source-map" 
};
