<template>
  <main class="h-auto w-full relative overflow-x-hidden">
    <AppNav class="w-full absolute z-50"></AppNav>

    <Nuxt />
    <AppFooter class="z-50"></AppFooter>
    <div class="grid bg-lines w-full h-full grid-cols-5 absolutes top-0">
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l border-r"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'landingPage',
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
main {
  position: relative;
  .bg-lines {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    //z-index: -1;
    padding: 0 78px;
    @media screen and (max-width: 600px) {
      padding: 0 1.25rem;
    }
    .lines__line {
      border-left: 0.5px solid #e5e5e5;
      //border-right: .5px solid #E5E5E5;
      flex: 1 1 auto;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: auto;
      opacity: 0.1;
      &.__4 {
        border-right: 0.5px solid #e5e5e5;
        opacity: 0.1;
      }
    }
  }
}
</style>
