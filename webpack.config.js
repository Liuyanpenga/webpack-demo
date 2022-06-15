const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode:'development', 
  devServer: {
    static: './dist',       // 告知 dev server 从什么位置查找文件
  },
  module: {
    rules: [
      ...base.module.rules,
      {                   // 引入 CSS
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};