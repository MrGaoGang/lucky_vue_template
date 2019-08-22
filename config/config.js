var package = require("../package.json");
//dll文件存放的目录
var dllRoot = "./static/dll/" + package.version + "/";
// 打包的根目录
var rootDir = "./dist/" + package.version + "/";


module.exports = {
    version: package.version,
    dllRoot: dllRoot,
    dllPath: function (isPro, json) {
        if (isPro) {
            return json ? dllRoot + "vendor-manifest.json" : dllRoot + "vendor.dll.js"
        }
        return json ? dllRoot + "vendordev-manifest.json" : dllRoot + "vendordev.dll.js"
    },
    rootDir: rootDir,
    dllVendorTarget: rootDir + "dll/vendor.dll.js",


}

