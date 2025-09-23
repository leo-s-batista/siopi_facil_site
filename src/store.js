import Vue from 'vue';
import Vuex from 'vuex';

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
    }
 },
 actions: {
    setLoading({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
    setScrollTop({ commit }, payload) {
      commit('SET_SCROLL_TOP', payload);
    }
 }
});