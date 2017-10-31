let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',//入口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve('build')//上线打包文件
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif)/,
        use: 'url-loader'
      }
    ]
  },
    //配置调试工具，报错的话会提示源码位置
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
} 