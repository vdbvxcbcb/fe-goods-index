<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from '@better-scroll/core'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Scroll',
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollY: true,
        click: true
      });
    }
  }
</script>

<style scoped>

</style>
