import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let options = [
  {
    desc: 'let',
    label: 'let',
    note: 'let was introduced in ES6',
    code: `let <span class="yellow">a</span> = 10;`
  },
  {
    desc: 'const',
    label: 'const',
    note: 'const was introduced in ES6',
    code: `const <span class="yellow">a</span> = 10;`
  },
  {
    desc: 'block-scope',
    label: 'Block scope',
    note: 'Block scope was introduced in ES6',
    code: `function sum () {<br /><span>&nbsp;&nbsp;</span>let <span class="yellow">x</span> = 0; let <span class="yellow">y</span> = 1;<br /><span>&nbsp;&nbsp;</span>if (true) {<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>let <span class="yellow">x</span> = 1; // only inside this 'if'<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>let <span class="yellow">y</span> = 1;<br /><span>&nbsp;&nbsp;</span>}<br />}`
  },
  {
    desc: 'array-destructuring',
    label: 'Array destructuring',
    note: 'Array destructuring was introduced in ES6',
    code: `const [ <span class="yellow">a</span>, <span class="yellow">b</span> ] = [<span class="yellow">'foo'</span>, <span class="yellow">'bar'</span>];`
  },
  {
    desc: 'object-destructuring',
    label: 'Object destructuring',
    note: 'Object destructuring was introduced in ES6',
    code: `const { <span class="yellow">a</span>, <span class="yellow">b</span> } = {<br /><span>&nbsp;&nbsp;</span><span class="yellow">a</span>: 'Array',<br /><span>&nbsp;&nbsp;</span><span class="yellow">b</span>: 'Boolean'<br />}`
  }
];

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
