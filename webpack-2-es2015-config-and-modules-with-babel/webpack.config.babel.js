import path from "path"
import fs from "fs"

// Pulling in the babel rc defaults
const { env, ...babelDefault } = JSON.parse(fs.readFileSync(path.resolve(".babelrc"), "utf8"))

export default {
  entry: path.resolve('./modules/index.js'),
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
  	rules: [{
  	  test: /\.js$/,
  	  exclude: /node_modules/,
  	  loader: "babel-loader",
      options: {
        babelrc: false,
        ...babelDefault
      }
  	}]
  }
}