<template>
  <div class="app">
    <GithubCorner />
    <Container msg="ES Explorer" />
  </div>
</template>

<script>
// @ is an alias to /src
import GithubCorner from '@/components/GithubCorner.vue';
import Container from '@/components/Container.vue';

export default {
  name: 'Home',
  components: {
    GithubCorner,
    Container,
  },
};
</script>
