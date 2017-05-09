module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'build.js',
    path: __dirname + '/public'
  },
  devServer: {
    inline: true,
    contentBase: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map'
};
