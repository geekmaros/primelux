<template>
  <section class="vision h-auto bg-transparent px-5 md:px-78 pb-20 w-full">
    <div class="vision-img-wrapper md:ml-33s mt-20 md:mt-93">
      <img class="w-full md:ml-56 lg:ml-0" src="/images/vision.png" alt="" />
    </div>
    <div
      class="text-section flex justify-start md:justify-end md:mr-72 mt-20 md:-mt-60 lg:mr-20 lg:-mt-44"
    >
      <div class="font-serif h-full max-w-30rem flex flex-col">
        <h1
          class="text-primelux-grey text-center md:text-left text-5xl md:text-56px font-bold md:leading-56px"
        >
          DESIGN, BUILD & DECOR
        </h1>
        <p class="mt-6 text-base md:text-lg text-primelux-grey leading-30px">
          We have a team of top level talented and professional Town Planners,
          Estate Developers, Surveyors and Realtors.
        </p>
        <!--        <p-->
        <!--          class="mt-6 text-base text-lg text-primelux-grey text-left leading-30px"-->
        <!--        >-->
        <!--          With a history in property consultancy dating back to 1833, we’ve-->
        <!--          adapted and evolved to be one of the leading SMEs in the industry.-->
        <!--        </p>-->

        <!--        <h1 class="text-primelux-grey mt-10 text-56px font-bold leading-56px">-->
        <!--          Exceptional-->
        <!--        </h1>-->
        <!--        <h1 class="text-primelux-grey ml-36 text-56px font-bold leading-56px">-->
        <!--          Results-->
        <!--        </h1>-->
      </div>
    </div>
    <img
      class="hidden arrow-head w-full md:w-auto mt-10"
      src="/svg/exception.svg"
      alt=""
    />
    <div
      class="main-vision flex flex-col md:flex-row md:space-x-7.5 justify-center mt-20 md:mt-40 items-center"
    >
      <div class="vision-wrapper flex mb-16 md:mb-0">
        <svg
          width="4"
          height="48"
          viewBox="0 0 4 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="48" fill="#F5B172" />
        </svg>

        <div class="vision-main-text font-serif ml-5">
          <h2
            class="vision-title text-primelux-grey font-bold h-10 text-2xl leading-24px max-w-18rem"
          >
            Outstanding Management
          </h2>
          <p
            class="vision-subtext text-primelux-grey text-base mt-5 leading-24px max-w-19rem"
          >
            Builds quality, liveable homes in attractive metropolitan areas.
            With family living at the heart of everything we do, the exceptional
            quality of our design together with our focus on functional homes
          </p>
        </div>
      </div>
      <div class="vision-wrapper flex mb-16 md:mb-0 -mt-6">
        <svg
          width="4"
          height="48"
          viewBox="0 0 4 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="48" fill="#F5B172" />
        </svg>

        <div class="vision-main-text font-serif ml-5">
          <h2
            class="vision-title text-primelux-grey font-bold h-10 text-2xl leading-24px max-w-18rem"
          >
            World Class Expertise
          </h2>
          <p
            class="vision-subtext text-primelux-grey text-base mt-5s leading-24px max-w-19rem"
          >
            Builds quality, liveable homes in attractive metropolitan areas.
            With family living at the heart of everything we do, the exceptional
            quality of our design together with our focus on functional homes
          </p>
        </div>
      </div>
      <!--      <div class="vision-wrapper flex mb-16 md:mb-0">-->
      <!--        <svg-->
      <!--          width="4"-->
      <!--          height="48"-->
      <!--          viewBox="0 0 4 48"-->
      <!--          fill="none"-->
      <!--          xmlns="http://www.w3.org/2000/svg"-->
      <!--        >-->
      <!--          <rect width="4" height="48" fill="#F5B172" />-->
      <!--        </svg>-->

      <!--&lt;!&ndash;        <div class="vision-main-text font-serif ml-5">&ndash;&gt;-->
      <!--&lt;!&ndash;          <h2&ndash;&gt;-->
      <!--&lt;!&ndash;            class="vision-title text-primelux-grey font-bold h-10 text-2xl leading-24px max-w-18rem"&ndash;&gt;-->
      <!--&lt;!&ndash;          >&ndash;&gt;-->
      <!--&lt;!&ndash;            Building the Future&ndash;&gt;-->
      <!--&lt;!&ndash;          </h2>&ndash;&gt;-->
      <!--&lt;!&ndash;          <p&ndash;&gt;-->
      <!--&lt;!&ndash;            class="vision-subtext text-primelux-grey text-base mt-5s leading-24px max-w-19rem"&ndash;&gt;-->
      <!--&lt;!&ndash;          >&ndash;&gt;-->
      <!--&lt;!&ndash;            Builds quality, liveable homes in attractive metropolitan areas.&ndash;&gt;-->
      <!--&lt;!&ndash;            With family living at the heart of everything we do, the exceptional&ndash;&gt;-->
      <!--&lt;!&ndash;            quality of our design together with our focus on functional homes&ndash;&gt;-->
      <!--&lt;!&ndash;          </p>&ndash;&gt;-->
      <!--&lt;!&ndash;        </div>&ndash;&gt;-->
      <!--      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurVision',
}
</script>

<style scoped lang="scss">
section {
  .arrow-head {
    width: 98.5%;
    @media screen and (max-width: 600px) {
      width: 500%;
    }
  }
}
</style>
