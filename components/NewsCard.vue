<template>
  <div
    class="card w-full z-50 transform transition-all duration-300 hover:pb-20 hover:scale-110 cursor-pointer font-serif mr-32 relative pb-10 max-w-xs"
  >
    <div class="inner-card overflow-hidden">
      <img class="post-image w-full" :src="post.imageUrl" alt="" />
      <div class="details-section pl-5 mt-5 pb-5 relative">
        <h1 class="title text-lg leading-24px text-primelux-grey w-9/12">
          {{ post.name }}
        </h1>
      </div>
      <p class="time absolute bottom-0 mb-5 pl-5">{{ post.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    post: {
      type: Object,
    },
  },
}
</script>

<style scoped lang="scss">
.card {
  background: linear-gradient(270deg, #2d3549 0%, #353e56 100%);
  box-shadow: 0px 8px 72px rgba(0, 0, 0, 0.08), inset 0px -4px 0px #687188;
  &:hover {
    background: linear-gradient(270deg, #2d3549 0%, #353e56 100%);
    box-shadow: 0px 8px 72px rgba(0, 0, 0, 0.08), inset 0px -4px 0px #f5b172;
  }
  .time {
    color: #687188;
  }
  .details-section {
  }
}
</style>
