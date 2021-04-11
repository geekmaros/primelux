<template>
  <section
    v-if="isOpen"
    class="fixed left-0 top-0 h-screen z-30 mt-20 nav-menu-wrapper bg-red-600 z-50"
  >
    <div class="menu">
      <ul
        class="text-56px font-bold leading-56px z-50 w-full mt-20 flex flex-col space-y-10 justify-center items-center"
      >
        <li
          class="text-primelux-grey hover:text-primelux-orange cursor-pointer z-50"
        >
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li
          class="text-primelux-grey hover:text-primelux-orange cursor-pointer z-50"
        >
          <nuxt-link to="/about">About us</nuxt-link>
        </li>
        <li
          class="text-primelux-grey hover:text-primelux-orange cursor-pointer z-50"
        >
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="grid bg-lines w-full h-full grid-cols-5 absolutes top-0">
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l"></div>
      <div class="line-1 lines__line border-l">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0H9V9H0V10H9V19H10V10H19V9H10V0Z"
            fill="#EFF1F5"
          />
        </svg>
      </div>
      <div class="line-1 lines__line border-l border-r"></div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landingpage',
  name: 'NavMenuWrapper',
  methods: {
    gotoPage(page) {
      this.$router.push(`/${page}`)
      this.isOpen = false
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
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
