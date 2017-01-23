const { resolve } = require("path")

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  resolve: {
    modules: [
      resolve(__dirname, "modules"),
      "node_modules"
    ]
  }
}