const path = require('path');

module.exports = {
  entry: './chess.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chess26node.js',

    library: 'Chess',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};