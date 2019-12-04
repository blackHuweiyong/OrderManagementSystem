import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import pagination from './modules/pagination'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    pagination
  },
  getters
})

export default store
