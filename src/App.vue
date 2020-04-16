<template>
    <Home />
</template>

<script>
import Home from './views/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
  body {
    font-family: 'Open Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .3em;
  }

  p {
    margin: 0;
  }

  pre {
        background-color: #1C2326;
        white-space: pre-line;
        border-radius: 1rem;
        font-size: 18px;
    }
</style>
