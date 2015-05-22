module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/builds',
    filename: 'index.js',
    publicPath: "/builds/",
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  devtool: "source-map"
};
