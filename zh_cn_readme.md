
**一个基于vue+webpack4.0+vuex3.0+vue-rouer3.0+iview的单页面开发模板**

### 使用 [English](https://github.com/MrGaoGang/lucky_vue_template/README.md)

``` bash
$ npm install -g vue-cli
$ vue init mrgaogang/lucky_vue_template my-project
$ cd my-project
$ npm install
$ npm run dev
```

### 目录结构
```
|-- lucky_vue
    |-- babel.config.js//babel配置
    |-- index.css//全局css样式
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- webpack.base.config.js//webpack打包基础配置
    |-- webpack.dev.config.js//本地环境打包配置
    |-- webpack.prod.config.js//生产打包配置
    |-- dist//打包生产目录
    |   |-- index.html
    |   |-- css
    |   |-- fonts
    |   |-- img
    |   |-- js
    |-- src
        |-- App.vue
        |-- main.js//单页面入口
        |-- modules.js
        |-- components//子组件
        |   |-- Home.vue
        |-- plugins//一些插件
        |   |-- iview.js
        |-- router//页面路由统一配置
        |   |-- index.js
        |-- server//所有服务请求
        |   |-- fetch.js//封装的网络请求
        |   |-- index.js
        |   |-- api
        |   |   |-- index.js//一些api常量
        |   |-- modules//请求模块化
        |       |-- home.js
        |-- store//状态管理
            |-- index.js
            |-- modules//状态管理模块化
                |-- home.js
```
