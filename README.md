
This is a webpack template for vue; the base config contains iview+vuex+vue-router

### Usage [中文](https://github.com/MrGaoGang/lucky_vue_template/zh_cn_readme.md)

``` bash
$ npm install -g vue-cli
$ vue init mrgaogang/lucky_vue_template my-project
$ cd my-project
$ npm install
$ npm run dev
```

### Directory introduction
```js
|-- lucky_vue
    |-- babel.config.js //babel config
    |-- index.css //gloabl css
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- webpack.base.config.js // base build config
    |-- webpack.dev.config.js  //development environment build config
    |-- webpack.prod.config.js //production environment build config
    |-- dist // the production environment build folder
    |   |-- index.html
    |   |-- css
    |   |-- fonts
    |   |-- img
    |   |-- js
    |-- src
        |-- App.vue
        |-- main.js // the app entry js
        |-- modules.js // the commmon read modules js
        |-- components // the sub pages
        |   |-- Home.vue
        |-- plugins // global plugins 
        |   |-- iview.js
        |-- router // page router
        |   |-- index.js
        |-- server // gloabl server config 
        |   |-- fetch.js // Encapsulated network request js
        |   |-- index.js
        |   |-- api // the api constants
        |   |   |-- index.js
        |   |-- modules // the submodule api request
        |       |-- home.js
        |-- store // gloabl state config
            |-- index.js
            |-- modules // the submodule state config 
                |-- home.js
```
