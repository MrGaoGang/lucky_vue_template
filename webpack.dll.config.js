var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var vendor = ["vue", "vuex", "vue-router"];
var vendordev = ["vue/dist/vue.esm.js", "vuex", "vue-router"]; //集成开发版本vue
var config = require("./config/config.js");
module.exports = {
  //你想要打包的模块数组
  entry: {
    vendor: vendor,
    vendordev: vendordev
  },
  output: {
    path: path.join(__dirname, config.dllRoot),
    filename: "[name].dll.js",
    library: "[name]_library"
    //vendor.dll.js 中暴露出的全局变量
    //主要是给DllPlugin中的name 使用
    //故这里需要和webpack.DllPlugin 中的 'name :[name]_libray 保持一致
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, config.dllRoot, "[name]-manifest.json"),
      name: "[name]_library",
      context: __dirname
    })
  ]
};
