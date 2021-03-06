<template>
  <section class="w-full h-full px-78 bg-blue-400 relative">
    <div class="image-wrapper ml-7.5">
      <img src="/svg/mostex.svg" alt="" />
    </div>
    <div class="grid justify-start w-full h-full grid-cols-2 gap-24 mt-20 z-50">
      <div class="image-1 relative">
        <img class="w-full hover:scale-50" src="/images/image1.png" alt="" />
        <ImageLabel class="absolute"> </ImageLabel>
      </div>
      <div class="image-2 transform -translate-y-96">
        <img class="w-full" src="/images/image2.png" alt="" />
        <ImageLabel class="right-0 absolute">
          <template v-slot:name>The Shard</template>
          <template v-slot:location>Ibeju</template>
        </ImageLabel>
      </div>
      <div class="image-3 transform -translate-y-56">
        <img class="w-full" src="/images/image3.png" alt="" />
        <ImageLabel class="right-0 absolute">
          <template v-slot:name>The RPBW Atelier</template>
          <template v-slot:location>Magodo</template>
        </ImageLabel>
      </div>
      <div class="image-4 transform -translate-y-72">
        <img class="w-full" src="/images/image4.png" alt="" />
        <ImageLabel class="right-0 absolute">
          <template v-slot:name>Jean-Marie Tjibaou</template>
          <template v-slot:location>Maryland</template>
        </ImageLabel>
      </div>
    </div>
    <nuxt-link to="/" class="flex justify-center h-full w-full -mt-32">
      <LinkButton class="relative">show More</LinkButton>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'Project',
}
</script>

<style scoped></style>
