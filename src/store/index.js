import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    event:{}
  },
  mutations: {
    getEvents(state, data) {
      state.events = data;
    },
  },
  actions: {
    async getEvents(context) {
      const data = await API.fetchEvents();
      context.commit("getEvents", data);
    },
  },
  modules: {
  }
})
