const path = require('path');

module.exports = {
  entry: './chess.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chess26.min.js'
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