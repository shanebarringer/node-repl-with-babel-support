module.exports = {
  entry: './app/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  target: 'node',
  module: {
  loaders: [
    { test: /\.js$/, loader: "babel-loader" },
    { test: /\.js$/, loader: "node-repl"}
    ]
  }
}
