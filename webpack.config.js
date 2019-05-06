const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
              {
                loader: 'css-loader',
                options: { url: false }
              },
              {
                loader: 'sass-loader'
              }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
  ]
};