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
  :root {
    --dark: #1C2326;
    --teal: #7aece2;
    --yellow: #F7DF1E;
  }

  body {
    font-family: 'Open Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--dark);
    font-style: normal;
    letter-spacing: -.01em;
    margin: 0;
    padding: 0;
  }

  h1, h2, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .3em;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin: 0;
  }

  pre {
        background-color: --dark;
        white-space: pre-line;
        border-radius: 1rem;
        font-size: 18px;
    }
</style>
