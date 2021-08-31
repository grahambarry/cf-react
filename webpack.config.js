const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
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
    new Dotenv({ systemvars: true }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
   }),
   new webpack.HotModuleReplacementPlugin()
  ]
};
