var path = require("path");

// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
var glob = require("glob");
// 页面模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
var PAGE_PATH = path.resolve(__dirname, "../src/pages");

//多入口配置
// 通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口处理
exports.entries = function() {
  var entryFiles = glob.sync(PAGE_PATH + "/*/*.js");
  var map = {};
  entryFiles.forEach(filePath => {
    var filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    map[filename] = filePath;
  });
  map["common"] = path.resolve(__dirname, "../src/common/index.js");
  map["babel-polyfill"] = "babel-polyfill";
  return map;
};

//多页面输出配置
// 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
exports.htmlPlugin = function() {
  let entryHtml = glob.sync(PAGE_PATH + "/*/*.html");
  let arr = [];
  entryHtml.forEach(filePath => {
    let filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    let chunks =
      filename === "admin"
        ? [
            "vendors",
            "manifest",
            "vendors-admin",
            "common",
            "babel-polyfill",
            filename
          ]
        : [
            "vendors",
            "manifest",
            "vendors-index",
            "common",
            "babel-polyfill",
            filename
          ];

    let conf = {
      // 模板来源
      template: filePath,
      // 文件名称
      filename: filename + ".html",
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: chunks,
      inject: true,
      chunksSortMode: function(chunk1, chunk2) {
        var order1 = chunks.indexOf(chunk1.names[0]);
        var order2 = chunks.indexOf(chunk2.names[0]);
        return order1 - order2;
      }
    };
    if (process.env.NODE_ENV === "production") {
      conf = merge(conf, {
        minify: {
           // 移除注释
        removeComments: true,
        // 不要留下任何空格
        collapseWhitespace: true,
        // 当值匹配默认值时删除属性
        removeRedundantAttributes: true,
        // 使用短的doctype替代doctype
        useShortDoctype: true,
        // 移除空属性
        removeEmptyAttributes: true,
        // 从style和link标签中删除type="text/css"
        removeStyleLinkTypeAttributes: true,
        // 保留单例元素的末尾斜杠。
        keepClosingSlash: true,
        // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        minifyJS: true,
        // 缩小CSS样式元素和样式属性
        minifyCSS: true,
        // 在各种属性中缩小url
        minifyURLs: true
        }
      });
    }
    arr.push(new HtmlWebpackPlugin(conf));
  });
  return arr;
};

/**
 * 多入口文件代码分割策略
 */
exports.splitChunks={
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "-",
      name: true,
      cacheGroups: {
        "vendors-admin": {
          test: /ant-design-vue|@ant-design/, // 抽离ant-design-vue和ant-design
          chunks: "async",//因为采用的是动态加载ui库，所以不使用initial，不使用all是因为可能会导入其他没使用的ant组件代码
          name: "vendors-admin"
        },
        "vendors-index": {
          test: /iview/, // 抽离iview
          chunks: "async",
          name: "vendors-index"
        },
        common: {
          chunks: "initial",//提取admin和index的入口的公共库，通常是vue/vuex/vue-router
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5, 
          minSize: 0 
        }
      }
    },
    runtimeChunk: {
      name: "manifest"
    }
  },
}
