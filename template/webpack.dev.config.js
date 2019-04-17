var merge = require("webpack-merge");
var baseConfig = require("./webpack.base.config.js");
var VueLoaderPlugin = require("vue-loader/lib/plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require("html-webpack-plugin");
var path = require("path");
baseConfig.plugins = [];
module.exports = merge(baseConfig, {
  output: {
    publicPath: 'dist/',
  },
  devtool: '#eval-source-map',//开启测试环境调试
  plugins: [

    new VueLoaderPlugin(),
    //将css文件合并为main.css
    new ExtractTextPlugin({
      filename: "main.css",
      allChunks: true
    })
  ]
});
