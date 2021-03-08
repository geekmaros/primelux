<template>
  <div class="label right-0 pt-3 px-5 md:px-10 pb-4 md:pb-5">
    <svg
      width="4"
      height="32"
      viewBox="0 0 4 32"
      fill="none"
      class="absolute left-0 mt-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="4" height="32" fill="#F5B172" />
    </svg>

    <h2 class="font-serif font-bold text-primelux-grey text-lg md:text-xl">
      <slot name="name">Paris Courthouse</slot>
    </h2>
    <p class="location font-serif text-base leading-24px">
      <slot name="location">Lekki</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ImageLabel',
}
</script>

<style scoped lang="scss">
.label {
  background: linear-gradient(270deg, #2d3549 0%, #353e56 100%);
  margin-top: -5rem;
  width: 47%;
  @media screen and (max-width: 600px) {
    width: 70%;
  }
  .location {
    color: #687188;
  }
}
</style>
