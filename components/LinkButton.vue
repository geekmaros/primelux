<template>
  <button
    class="z-50 absolute inline-flex items-center border-b-4 border-primelux-orange text-primelux-grey hover:text-white focus:outline-none transition-all ease-in pb-3 pt-4 px-4 hover:bg-primelux-orange"
  >
    <span class="text-base mr-3 leading-16px uppercase font-bold">
      <slot>Insert Link</slot></span
    >
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      class="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9H20M20 9L14 1M20 9L14 17"
        stroke="#EFF1F5"
        stroke-width="2"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'LinkButton',
}
</script>

<style scoped></style>
