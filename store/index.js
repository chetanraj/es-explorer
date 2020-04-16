import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selected: null,
  },
  getters: {
    selected: state => state.selected
  },
  mutations: {
    setSelected(state, value) {
      state.selected = value;
    },
  },
});
