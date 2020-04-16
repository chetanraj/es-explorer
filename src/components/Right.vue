<template>
  <div class="right">
    <h3>Example</h3>
    <div class="code teal">
      <div v-html="selected.code"></div>
    </div>
    <blockquote v-if="selected.note" class="version">{{selected.note}}</blockquote>
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
    return { };
  }
};
</script>

<style lang="scss">
  .code {
    padding: 1rem;
    display: block;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    font-size: 18px;
    font-family: monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    margin-bottom: 2em;
    background-color: #1C2326;
    overflow: auto;
  }

  .teal {
    color: var(--teal);
  }

  .yellow {
    color: var(--yellow);
  }

  blockquote {
    border-left: 0.3rem solid var(--yellow);
    margin-inline-start: 0;
    padding-left: 0.3rem;
    font-size: 16px;
    font-style: italic;
  }
</style>
