const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader"
          }
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
              loader: MiniCssExtractPlugin.loader,
              options: {
                  esModule: false,
              },
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
   }),
   new MiniCssExtractPlugin({
       filename: 'bundle.css'
   })
  ]
};
