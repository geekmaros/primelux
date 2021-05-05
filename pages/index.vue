<template>
  <section class="h-auto w-full relative">
    <ProjectHero></ProjectHero>
    <!--    <AppHero></AppHero>-->
    <OurVision class="w-full"></OurVision>
    <!--    <AboutContent></AboutContent>-->
    <Project class=""></Project>
    <Testimonial></Testimonial>
    <NewsAndPress></NewsAndPress>
    <div class="">
      <a
        href="http://calendly.com/primeluxng"
        target="_blank"
        type="submit"
        class="z-50 mr-10 fixed bottom-0 mb-20 mr-20 right-0 inline-flex rounded-lg items-center border-b-4 border-primelux-orange text-primelux-grey hover:text-white focus:outline-none transition-all ease-in pb-3 pt-4 px-4 hover:bg-primelux-orange"
      >
        <span class="text-base mr-3 leading-16px uppercase font-bold">
          Book an Appointment</span
        >
      </a>
    </div>
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
