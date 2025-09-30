import Vue from 'vue';
import Vuex from 'vuex';

import { v4 as uuidv4 } from 'uuid'
import api from '/src/api'

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
    loading: false,
    scrollTop: 0
 },
 getters: {
    loading: state => state.loading,
    scrollTop: state => state.scrollTop
 },
 mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_SCROLL_TOP(state, payload) {
      state.scrollTop = payload;
    },
    SET_ACCESS_TOKEN(state, payload) {
        state.access_token = payload
    },
 },
 actions: {
    setLoading({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
    setScrollTop({ commit }, payload) {
      commit('SET_SCROLL_TOP', payload);
    },
          async setAccessToken({ commit }) {
         let uuid = Vue.$cookies.get('access_token')

         if (!uuid) {
            uuid = uuidv4()
            await api.setAccessToken(uuid).then(() => {
               Vue.$cookies.set('access_token', uuid, {
                  expires: new Date(new Date().getTime() + 3600000)
               })
            })
         }

         await commit('SET_ACCESS_TOKEN', uuid)
      },
      async setAccessEvent({ state }, payload) {
         const accessToken =
            state.access_token ?? Vue.$cookies.get('access_token')
         await api.accesEvent(payload.event, payload.value, accessToken)
      },
      async sendEmail({ state }, payload) {
         const { data } = await api.sendEmail(payload)

         await api.accesEvent('send_message', data.id, state.access_token)
      },
 }
});