<template>
  <section
    class="hero font-serif w-full text-primelux-grey h-auto relative bg-transparent"
  >
    <div class="flex flex-col md:flex-row md:justify-center mt-24">
      <div
        class="text-wrapper text-lg leading-30px text-primelux-grey max-w-41rem mt-10 md:mt-0"
      >
        <h3 class="header font-bold md:text-center text-2xl leading-30px mb-5">
          LUXURY HOMES ON A BUDGET
        </h3>
        <p class="md:max-w-15rems md:text-center">
          Primelux is redefining how you buy a home by easy transition to the
          next chapter of living in comfort and style within a reasonable
          budget.
        </p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:space-x-56 px-5 md:px-78 mt-32">
      <div class="img-wrapper">
        <img class="w-full" src="/images/abouttop.png" alt="" />
      </div>
      <div
        class="text-wrapper text-lg leading-30px text-primelux-grey max-w-41rem mt-10 md:mt-0"
      >
        <h3 class="header font-bold text-2xl leading-30px mb-5">
          BUILDING LIFESTYLE EXPERIENCE
        </h3>
        <p class="md:max-w-30rems">
          While maintaining a standard of excellence, integrity and
          sustainability, we are poised to cater to the needs of home buyers
          from across the globe interested in acquiring properties in choice
          residential areas within Lagos.
        </p>
        <p class="md:max-w-30rems mt-5">
          Along with Estatevest, our affiliate platform, we construct luxurious
          yet affordable homes for new owners and enlist them for acquisition
          through an easy buying experience.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row w-full h-full md:space-x-24 md:justify-center md:items-center grid-cols-2 px-5 md:px-78 mt-32 md:mb-96"
    >
      <div class="desc">
        <h3 class="header font-bold text-2xl leading-30px">
          Affordable Luxurious Style
        </h3>
        <p class="font-normal text-lg leading-30p md:max-w-15rem mt-5">
          Discover your dream home among our elegant modern houses, penthouses
          and villas for sale. Complete with tastefully designed interiors and
          in neighbourhoods you have always wanted.
        </p>
        <div class="img-wrapper mt-5">
          <img class="w-full md:w-auto" src="/images/desc1.png" alt="" />
        </div>
      </div>
      <div
        class="desc mt-78 flex flex-col flex-col-reverse md:flex-col md:translate-x-48 transform md:translate-y-64"
      >
        <div class="img-wrapper mt-5 md:mt-0">
          <img class="w-full md:w-auto" src="/images/excellence.png" alt="" />
        </div>
        <div class="reverse">
          <h3 class="header font-bold text-2xl leading-30px mt-5 md:w-6/12">
            Transparent Nearly Seamless Service
          </h3>
          <p class="font-normal text-lg leading-30p md:max-w-15rem mt-5">
            We have a transparent and easy to follow business model coupled with
            top class client service to create our vision.
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row w-full md:space-x-56 px-5 md:px-78 mt-20 md:-mt-20"
    >
      <div
        class="text-wrapper text-lg leading-30px text-primelux-grey ml-auto max-w-41rem"
      >
        <h3 class="header font-bold text-2xl leading-30px">
          Building Lifestyle Experiences
        </h3>
        <p class="mt-5">
          Focused on the Portuguese residential real estate market, VIC
          Properties combines a unique operating experience in the local context
          with a deep knowledge of the capital market and a vast experience in
          large developments, being a specialist in the development of fully
          integrated residential developments and stands out for the ability to
          create unique and exclusive styles, dynamics and experiences to all
          his projects.
        </p>
        <p class="mt-5">
          View a number of our completed projects and discover the possibilities
          to (re) build without worries with Neverland finishing! We help you
          and together create a beautiful, luxurious look and a clear design for
          your building!
        </p>
      </div>
      <div class="img-wrapper flex md:justify-end mt-10 md:mt-0">
        <img class="w-full md:w-auto" src="/images/abouttop.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landingpage',
  name: 'about',
  data() {
    return {
      options: {
        rewind: true,
        // width: 100%,
        perPage: 3,
        gap: '2rem',
      },
    }
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
  .pool {
    color: #222655;
  }
  .project-info-bg {
    background: linear-gradient(
        93.11deg,
        rgba(42, 49, 76, 0.7) 0%,
        rgba(29, 34, 53, 0.7) 99.63%
      ),
      url('static/images/slide1.png');
  }
}
</style>
