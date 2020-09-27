<template>
  <div class="left">
    <h1>JavaScript ES Explorer</h1>
    <p class="subtitle">Find a quick overview of new JavaScript features in ES2015 and beyond...</p>
    <div class="filter">
      <h4>I need to know about:</h4>
      <select v-model="selected">
        <option value="" disabled selected>[...💛]</option>
        <option v-for="option in options" :key="option.desc" :value="option">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Left',
  computed: {
    ...mapGetters(['setSelected'])
  },
  methods: {},
  data () {
    return {
      selected: '',
      options: this.$store.state.options
    };
  },
  watch: {
    selected() {
      this.$store.commit('setSelected', this.selected);
    }
  }
};
</script>

<style scoped lang="scss">
    .filter {
        margin: 3em 0;
        display: flex;
        align-items: center;
    }
    
    select {
      font-family: 'Open Sans';
      font-size: 1em;
      height: 2.2em;
      min-width: 8em;
      margin-left: 1em;
      margin-top: -5px;
      border-radius: 4px;
      border: 1px solid;
      border-color: var(--dark);
      padding: 5px;
    }
</style>
