const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,     // build 时才会清理 dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template:'./src/index.html'
    }),
  ],
  module: {
    rules: [
      // 引入 scss
      {                  
        test: /\.sss$/i,
        use: ['style-loader','css-loader','sass-loader',],
      },
      // 引入 less
      {                   
        test: /\.less$/i,
        use: ["style-loader","css-loader","less-loader",],
      },
      // 引入 stylus
      {                   
        test: /\.styl$/,
        use: ["style-loader","css-loader","stylus-loader",],
      },
      // file-loader 加载图片
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
    // 单个 html 页面有多个入口的配置
    optimization: {
      runtimeChunk: 'single',
    },
};