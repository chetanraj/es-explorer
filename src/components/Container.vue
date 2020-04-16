<template>
  <div class="container">
    <Left />
    <Right />
  </div>
</template>

<script>
import Left from '@/components/Left.vue';
import Right from '@/components/Right.vue';

export default {
  name: 'Container',
  props: {
    msg: String,
  },
  components: {
    Left,
    Right,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .container {
    margin: 60px auto;
    width: 95%;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: minmax(500px,auto);
  }
</style>
