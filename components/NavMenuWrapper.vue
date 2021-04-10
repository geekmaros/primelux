<template>
  <section class="nav-menu-wrapper w-full h-screen">
    <div class="grid bg-lines w-full h-full grid-cols-5 absolutes top-0">
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l border-r"></div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landingpage',
  name: 'NavMenuWrapper',
}
</script>

<style scoped lang="scss">
section {
  background: linear-gradient(270deg, #2d3549 0%, #353e56 100%);

  .left-side {
    background: linear-gradient(90deg, #2a314c 0%, #1d2235 100%);
    //transform: matrix(-1, 0, 0, 1, 0, 0);
  }
}
</style>
