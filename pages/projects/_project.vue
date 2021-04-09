<template>
  <section
    class="hero font-serif w-full text-primelux-grey h-auto relative bg-transparent"
  >
    <div
      class="h-full md:h-screen bg-right bg-no-repeat bg-cover relative"
      style="background-image: url('/images/img.png')"
    >
      <div class="flex justify-center">
        <div
          class="project-title bg-theme-color absolute -mb-10 bottom-0 w-8/12"
        >
          <div class="name-location pt-20 mx-auto px-16 max-w-2xl">
            <h3
              class="font-bold text-56px leading-56px text-primelux-grey text-center"
            >
              Jean-Marie Tjibaou
            </h3>
            <div
              class="sub-details-wrapper flex justify-between text-primelux-grey mt-5"
            >
              <div class="sub-detail">
                <p class="text-xs leading-16px mb-4">Client</p>
                <h3 class="text-lg leading-24px">Natalya</h3>
              </div>
              <div class="sub-detail">
                <p class="text-xs leading-16px mb-4">Category</p>
                <h3 class="text-lg leading-24px">Villa</h3>
              </div>
              <div class="sub-detail">
                <p class="text-xs leading-16px mb-4">Client</p>
                <h3 class="text-lg leading-24px">Maryland</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <article class="w-full flex justify-center mt-40">
      <p class="text-lg leading-30px max-w-41rem">
        Construction is based on L-shaped ground plan, which is proposed as
        atrium due to open surrounding. The mass of the house is formed as a
        single-storey house with significantly smaller and materially different
        first floor. Terrace system creates diverse areas with different degree
        of intimacy and the terraces connect all the rooms with exterior.
        Overall house configuration turns off the rooms from the neighborhood
        buildings and driveway.
      </p>
    </article>
    <div class="flex w-full px-5 md:px-78 mt-20">
      <div class="relative w-full">
        <svg
          class="absolute right-0 -mr-2 mt-40"
          width="14"
          height="68"
          viewBox="0 0 14 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="14"
            width="68"
            height="14"
            transform="rotate(90 14 0)"
            fill="#F5B172"
          />
        </svg>

        <div
          class="lil-desc absolute bottom-0 bg-primelux-grey px-10 py-5 w-2/12"
        >
          <p class="text-darken-purple pool text-2xl leading-30px font-bold">
            Pool
          </p>
          <span class="text-base w-1 text-light-purple leading-24pxs mt-2">
            Area ∙
          </span>
          <p class="text-base w-1 text-light-purple">42</p>
        </div>

        <img src="/images/moreimage.png" class="w-full" alt="" />
      </div>
      <div class="right-side flex justify-center items-center w-full">
        <p class="text-lg leading-30px max-w-xs">
          House has two floors. First floor has a residential character with
          massive glassing on the side of the garden. Second floor is much
          smaller and it represents quite area of the house with children
          bedrooms and main (parents) bedroom. Thanks to the opening and solid
          windows, house gets natural lighting and ventilation.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landingpage',
  name: 'project',
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
}
</style>
