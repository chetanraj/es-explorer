<template>
  <div class="home">
    <Container msg="ES Explorer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue';

export default {
  name: 'Home',
  components: {
    Container,
  },
};
</script>
