<template>
  <div class="right">
    <h3>Usage</h3>
    <div class="code">
      <div v-html="source.code"></div>
    </div>
    <blockquote v-if="source.note" class="version">{{source.note}}</blockquote>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Right",
  computed: {
    ...mapGetters(["selected"])
  },
  data() {
    return {
      source: {
        code: "{ ...💛 }"
      }
    };
  },
  watch: {
    selected() {
      let __source = {
        'let': {
          note: "let was was introduced in ES6",
          code: `let a = 10;`
        },
        'const': {
          note: "const was was introduced in ES6",
          code: `const a = 10;`
        },
        'block-scope': {
            note: 'ES6',
            code: `function fn () {<br /><span>&nbsp;&nbsp;</span>let x = 0;<br /><span>&nbsp;&nbsp;</span>if (true) {<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>let x = 1; // only inside this 'if'<br /><span>&nbsp;&nbsp;</span>}<br />}`
        }
      };

      this.source = __source[this.selected];
    }
  }
};
</script>

<style lang="scss">
  .code {
    padding: 1rem;
    display: block;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    margin-bottom: 2em;
    background-color: #f6f6f6;
    overflow: auto;
  }

  blockquote {
    border-left: 0.3rem solid #f7df1e;
    margin-inline-start: 0;
    padding-left: 0.3rem;
    font-size: 15px;
    font-style: italic;
  }
</style>
