const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode:'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename:'[id].[contenthash].css',
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {                     // CSS 抽成文件
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};