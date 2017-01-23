module.exports = {
  entry: './modules/index.js',
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
  }
}