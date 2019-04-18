
This is a webpack template for vue; the base config contains iview+vuex+vue-router

### Usage

``` bash
$ npm install -g vue-cli
$ vue init mrgaogang/lucky_vue_template my-project
$ cd my-project
$ npm install
$ npm run dev
```

### Directory introduction

|-- lucky_vue
    |-- babel.config.js
    |-- index.css
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- webpack.base.config.js
    |-- webpack.dev.config.js
    |-- webpack.prod.config.js
    |-- dist
    |   |-- index.html
    |   |-- css
    |   |-- fonts
    |   |-- img
    |   |-- js
    |-- src
        |-- App.vue
        |-- main.js
        |-- modules.js
        |-- api
        |   |-- shop.js
        |-- components
        |   |-- Home.vue
        |-- plugins
        |   |-- iview.js
        |-- router
        |   |-- index.js
        |-- server
        |   |-- fetch.js
        |   |-- index.js
        |   |-- api
        |   |   |-- index.js
        |   |-- modules
        |       |-- home.js
        |-- store
            |-- index.js
            |-- modules
                |-- home.js

