const { resolve } = require("path")

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  resolve: {
    modules: [
      resolve(__dirname, "modules"),
      "node_modules"
    ]
  }
}