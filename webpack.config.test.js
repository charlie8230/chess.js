const path = require('path');

module.exports = {
  entry: './testchess.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'test.min.js'
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