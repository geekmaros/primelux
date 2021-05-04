<template>
  <section class="h-auto w-full relative">
    <ProjectHero></ProjectHero>
    <!--    <AppHero></AppHero>-->
    <OurVision class="w-full"></OurVision>
    <!--    <AboutContent></AboutContent>-->
    <Project class=""></Project>
    <Testimonial></Testimonial>
    <NewsAndPress></NewsAndPress>
    <!--    <ContactForm></ContactForm>-->
    <!--    <div class="grid bg-lines w-full h-full grid-cols-5 absolutes top-0">-->
    <!--      <div class="line-1 lines__line border-l"></div>-->
    <!--      <div class="line-1 lines__line border-l"></div>-->
    <!--      <div class="line-1 lines__line border-l"></div>-->
    <!--      <div class="line-1 lines__line border-l border-r"></div>-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  layout: 'landingpage',
  name: 'index',
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
