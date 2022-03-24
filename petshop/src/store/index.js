import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: []
  },
  getters: {
  },
  mutations: {
    addToFavoritesM: (state, payload) => {
      state.favorites.push(payload)
    } 
  },
  actions: {
    addToFavorites: ({commit}, payload) => {
      commit('addToFavoritesM', payload)
    }
  },
  modules: {
  }
})
