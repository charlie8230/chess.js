const path = require('path');

module.exports = {
  entry: './chess.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chess26.js',
    library: 'chess26'
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