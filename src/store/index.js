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
    createEvent(state,newEvent){
      state.events.push (newEvent);
    }
  },
  actions: {
    async getEvents(context) {
      const data = await API.fetchEvents();
      context.commit("getEvents", data);
    },
    async createEvent(context,newEvent) {
      this.state.loading = true;
      await API.addNewEvent(newEvent);
      context.commit("createEvent", newEvent);
    },
  },
  modules: {
  }
})
