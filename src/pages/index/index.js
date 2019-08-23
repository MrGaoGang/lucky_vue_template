import Vue from "vue";
import App from "./App.vue";
import store from "./store"
import "./plugins/iview.js";
import router from "./router/index";
import "./base.less"


new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App)
});
