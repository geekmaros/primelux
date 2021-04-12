<template>
  <section
    class="hero font-serif w-full text-primelux-grey h-auto relative bg-transparent"
  >
    <div
      class="h-screen md:h-screen bg-center md:bg-right bg-no-repeat bg-cover relative"
      style="background-image: url('/images/about.png')"
    >
      <div class="flex justify-start px-5s md:px-78">
        <div
          class="project-title bg-primelux-purple absolute bottom-0 md:w-6/12 z-30"
        >
          <div
            class="name-location pt-5 md:pt-10 md:mx-auto px-5 md:px-10 pb-5 md:pb-10 md:w-10/12"
          >
            <h3
              class="font-normal text-2xl md:text-48px leading-56px text-primelux-grey max-w-lg"
            >
              Project completion for all areas
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-lines h-full w-full flex">
      <div
        class="left-flex h-4 md:h-8 w-full bg-primelux-grey opacity-50 z-30"
      ></div>
      <div
        class="right-flex h-8 md:h-16 w-full bg-primelux-grey opacity-20 z-30"
      ></div>
    </div>

    <div class="flex flex-col md:flex-row md:space-x-56 px-5 md:px-78 mt-24">
      <div class="img-wrapper">
        <img class="w-full" src="/images/abouttop.png" alt="" />
      </div>
      <div
        class="text-wrapper text-lg leading-30px text-primelux-grey max-w-41rem mt-10 md:mt-0"
      >
        <p>
          Neverland stands for advice, guidance, realization and unburdening. In
          short a renovation without worries! Neverland stands for advice,
          guidance, realization and unburdening. In short a renovation without
          worries!
        </p>
        <p class="mt-5">
          View a number of our completed projects and discover the possibilities
          to (re) build without worries with Neverland finishing! We help you
          and together create a beautiful, luxurious look and a clear design for
          your building!
        </p>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row w-full h-full md:space-x-24 md:justify-center md:items-center grid-cols-2 px-5 md:px-78 mt-32 md:mb-96"
    >
      <div class="desc">
        <h3 class="header font-bold text-2xl leading-30px">
          For the love of nature
        </h3>
        <p class="font-normal text-lg leading-30p md:max-w-15rem mt-5">
          From early pre-contact settlments, to the economic boom times of the
          plantation
        </p>
        <div class="img-wrapper mt-5">
          <img class="w-full md:w-auto" src="/images/desc1.png" alt="" />
        </div>
      </div>
      <div
        class="desc mt-78 flex flex-col flex-col-reverse md:flex-col md:translate-x-32 transform md:translate-y-64"
      >
        <div class="img-wrapper mt-5 md:mt-0">
          <img class="w-full md:w-auto" src="/images/excellence.png" alt="" />
        </div>
        <div class="reverse">
          <h3 class="header font-bold text-2xl leading-30px mt-5 md:w-6/12">
            An unmatched reputation for excellence
          </h3>
          <p class="font-normal text-lg leading-30p md:max-w-15rem mt-5">
            Our fully integrated business model allows us to create a shared
            vision across our properties
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
