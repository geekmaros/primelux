<template>
  <section class="w-full h-full px-5 md:px-78 bg-blue-400 relative">
    <div class="image-wrapper w-fulls md:ml-7.5s z-50 pl-10s md:pl-0">
      <img
        class="z-50 w-full md:w-3/6 z-50"
        src="/svg/projecttopimage.svg"
        alt=""
      />
    </div>
    <div
      class="grid justify-start w-full h-full md:grid-cols-2 gap-24 mt-20 z-50"
    >
      <nuxt-link
        class="z-20 link-wrapper transform transition duration-500 ease-in-out hover:-translate-y-3"
        to="/project"
      >
        <div class="image-1 relative z-50">
          <div class="checkout bg-light-purple">
            <p
              class="ring-2 p-2 font-serif ring-white text-white rounded-sm text-lg font-semibold"
            >
              Check it Out
            </p>
          </div>
          <img class="w-full hover:scale-50" src="/images/image1.png" alt="" />
          <ImageLabel class="absolute"> </ImageLabel>
        </div>
      </nuxt-link>
      <nuxt-link
        class="z-50 link-wrapper transform transition duration-500 ease-in-out hover:-translate-y-3"
        to="/project"
      >
        <div class="image-2 transform md:-translate-y-96 z-50">
          <div class="checkout bg-light-purple">
            <p
              class="ring-2 p-2 font-serif ring-white text-white rounded-sm text-lg font-semibold"
            >
              Check it Out
            </p>
          </div>
          <img class="w-full z-50" src="/images/image2.png" alt="" />
          <ImageLabel class="right-0 absolute">
            <template v-slot:name>The Shard</template>
            <template v-slot:location>Ibeju</template>
          </ImageLabel>
        </div>
      </nuxt-link>
      <nuxt-link
        class="z-50 link-wrapper transform transition duration-500 ease-in-out hover:-translate-y-3"
        to="/project"
      >
        <div class="image-3 transform md:-translate-y-56 z-50">
          <div class="checkout bg-light-purple">
            <p
              class="ring-2 p-2 font-serif ring-white text-white rounded-sm text-lg font-semibold"
            >
              Check it Out
            </p>
          </div>
          <img class="w-full" src="/images/image3.png" alt="" />
          <ImageLabel class="right-0 absolute">
            <template v-slot:name>The RPBW Atelier</template>
            <template v-slot:location>Magodo</template>
          </ImageLabel>
        </div>
      </nuxt-link>
      <nuxt-link
        class="z-50 link-wrapper transform transition duration-500 ease-in-out hover:-translate-y-3"
        to="/project"
      >
        <div class="image-4 transform md:-translate-y-72 z-50">
          <div class="checkout bg-light-purple">
            <p
              class="ring-2 p-2 font-serif ring-white text-white rounded-sm text-lg font-semibold"
            >
              Check it Out
            </p>
          </div>
          <img class="w-full" src="/images/image4.png" alt="" />
          <ImageLabel class="right-0 absolute">
            <template v-slot:name>Jean-Marie Tjibaou</template>
            <template v-slot:location>Maryland</template>
          </ImageLabel>
        </div>
      </nuxt-link>
    </div>
    <nuxt-link to="/" class="flex justify-center h-full w-ful mt-24 md:-mt-32">
      <LinkButton class="relative">show More</LinkButton>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'Project',
}
</script>

<style scoped lang="scss">
section {
  .link-wrapper {
    &:hover {
      .checkout {
        visibility: visible;
      }
    }
    .checkout {
      visibility: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5ms ease-in-out;
    }
  }
}
</style>
