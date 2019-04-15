import server from "@/server/index.js";
import fetch from "@/server/fetch.js";
const state = {

}

const getters = {

}
const actions = {

  getUserInfo({
    state,
    commit
  }, user) {
   return  server.home.getPersonalInfo(user.name)
  }

}

const mutations = {

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}