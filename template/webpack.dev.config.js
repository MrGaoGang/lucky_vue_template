var webpack = require("webpack");
//打包时会自动生成index.html并替换已有的index.html，bundle.js也会自行添加到 html 中
var HtmlwebpackPlugin = require("html-webpack-plugin");
//将css合并为一个css文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//避免重复配置webpack,静基础配置和生产配置融合
var merge = require("webpack-merge");
var VueLoaderPlugin = require("vue-loader/lib/plugin");
//基础配置
var webpackBaseConfig = require("./webpack.base.config.js");
//清空构建目录
var clearWebpack = require("clean-webpack-plugin");
var config=require("./config/config.js");

var AddAssetHtmlPlugin=require("add-asset-html-webpack-plugin");
module.exports = merge(webpackBaseConfig, {
  output: {
    filename: "./js/main.js"
  },

  plugins: [
    new ExtractTextPlugin({
      //将所有的样式合并为一个css文件,chunkhash:8是避免css和js文件相同
      filename: "./css/main.css",
      allChunks: true
    }),

    new HtmlwebpackPlugin({
      //指定构建生成之后的html
      filename: "index.html", //此文件路径是相对于dist,
      template: "index.html"
    }),
    new VueLoaderPlugin(), //使用vue必须要加的哦
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(config.dllPath(null,true))
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(config.dllPath(null,false)),
      includeSourcemap: false
    })
  ]
});
