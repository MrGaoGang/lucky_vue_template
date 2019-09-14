import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);


const router = new VueRouter({
    routes: [{
        path: "/",
        component: () => import(/**home**/"../components/Home")
    }]
})

export default router;