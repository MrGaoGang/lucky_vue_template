import Vue from "vue";
import App from "./App.vue";
import Ant from "ant-design-vue"
Vue.use(Ant);


new Vue({
    el: "#app",
    render: h => h(App)
});