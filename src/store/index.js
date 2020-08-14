import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    event:{},
    ticketNumber:"",
    loading: false,
    valid:false,
  },
  mutations: {
    getEvents(state, data) {
      state.events = data;
    },
    createEvent(state,newEvent){
      state.events.push (newEvent);
    },
    updateTicketNumber(state,data){
      state.ticketNumber = data.ticket
    },
    verifyTicketNumber(state,data){
      state.valid = data.valid
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
    async buyTicket(context,event){
     const data = await API.buyTicket(event);
      
      context.commit("updateTicketNumber", data)
    },
    async checkTicket(context,ticketNr){
      const data = await API.checkTicket(ticketNr);
      context.commit("verifyTicketNumber",data)
    }
  },
  modules: {
  }
})
