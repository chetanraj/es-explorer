import Vue from 'vue';
import Vuex from 'vuex';

//* Options
import {options} from '../src/data/options'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selected: {
      code: `[...💛]`
    },
    options
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
