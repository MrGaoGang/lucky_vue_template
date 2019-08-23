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
var bunbleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


//css打包优化
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

//一些配置信息
var envConfig = require("./config/env_config.js");

module.exports = merge(webpackBaseConfig, envConfig.splitChunks,{
  mode: "production", //当前模式
  output: {
    libraryTarget: "umd", //输出为umd格式
    filename: "./js/[name].[chunkhash].js", //输出文件名,使用chunkhash可以避免每一次都更新js文件，导致缓存失效
    chunkFilename: "./js/[name].[chunkhash].chunk.js"
  },

  plugins: [
    new clearWebpack(), //构建生产环境包的时候清空dist目录
    new ExtractTextPlugin({
      //将所有的样式合并为一个css文件,chunkhash:8是避免css和js文件相同
      filename: "./css/[name].[chunkhash:8].css",
      allChunks: true
    }),
    new webpack.DefinePlugin({
      //定义当前的Node环境为生产环境
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),

    new VueLoaderPlugin(), //使用vue必须要加的哦
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      // cssProcessorOptions: cssnanoOptions,
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true
            },
            normalizeUnicode: false
          }
        ]
      },
      canPrint: true
    }),

    new bunbleAnalyzer()

  ].concat(envConfig.htmlPlugin())
});
