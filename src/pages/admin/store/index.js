import Vue from 'vue'
import Vuex from 'vuex'
// 引入modules文件下所有模块的store
import {
  modules
} from "@/common/index.js";

Vue.use(Vuex)
//require.context动态引入modules下的所有js文件
export default new Vuex.Store({
  modules: modules(require.context('./modules', true, /.+\.js$/))
})
