<template>
  <div class="left">
    <h1>ES Explorer</h1>
    <p class="subtitle">Find a quick overview of new JavaScript features in ES2015 and beyond...</p>
    <div class="filter">
      <h4>I need to know about:</h4>
      <select v-model="selected">
        <option value="" disabled selected>{...💛}</option>
        <option value="let">let</option>
        <option value="const">const</option>
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
    }
    
    select {
      font-family: 'Open Sans';
      font-size: 1em;
      height: 2.2em;
      min-width: 8em;
    }
</style>
