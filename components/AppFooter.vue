<template>
  <section
    class="w-full h-auto px-5 md:px-78 text-primelux-grey leading-24px z-50 pt-16 md:pt-32 pb-16 md:pb-32"
  >
    <div class="footer-grid w-full flex flex-col md:flex-row z-50">
      <nuxt-link to="/" class="logo z-50 w-full">
        <svg
          width="180"
          height="32"
          viewBox="0 0 180 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.99382e-07 -6.99382e-07L32 32L32 25L7 -5.46392e-07L6.99382e-07 -6.99382e-07Z"
            fill="#F5B172"
          />
          <path d="M32 16L16 -3.49691e-07L32 0L32 16Z" fill="#F5B172" />
          <path d="M0 9L23 32L-2.44144e-06 32L0 9Z" fill="#F5B172" />
          <path
            d="M49.1378 23H51.9055V18.7557H54.2322C57.2429 18.7557 58.9943 16.9595 58.9943 14.3452C58.9943 11.7436 57.2749 9.90909 54.3026 9.90909H49.1378V23ZM51.9055 16.5376V12.1719H53.772C55.37 12.1719 56.1435 13.0412 56.1435 14.3452C56.1435 15.6428 55.37 16.5376 53.7848 16.5376H51.9055ZM64.7921 23H67.5598V18.3594H69.5797L72.0598 23H75.1152L72.3347 17.9119C73.824 17.2727 74.6486 15.9751 74.6486 14.1854C74.6486 11.5838 72.9292 9.90909 69.9569 9.90909H64.7921V23ZM67.5598 16.1349V12.1719H69.4263C71.0243 12.1719 71.7978 12.8814 71.7978 14.1854C71.7978 15.483 71.0243 16.1349 69.4391 16.1349H67.5598ZM83.3723 9.90909H80.6046V23H83.3723V9.90909ZM89.6495 9.90909V23H92.3342V14.4474H92.4428L95.8306 22.9361H97.6587L101.047 14.4794H101.155V23H103.84V9.90909H100.426L96.8214 18.7045H96.668L93.0629 9.90909H89.6495ZM110.12 23H118.967V20.718H112.888V17.5923H118.487V15.3104H112.888V12.1911H118.941V9.90909H110.12V23ZM125.142 23H133.522V20.718H127.909V9.90909H125.142V23ZM147.46 9.90909V18.468C147.46 19.8679 146.328 20.718 144.781 20.718C143.254 20.718 142.122 19.8679 142.122 18.468V9.90909H139.355V18.5639C139.355 21.5298 141.605 23.1854 144.781 23.1854C147.945 23.1854 150.208 21.5298 150.208 18.5639V9.90909H147.46ZM159.081 9.90909H155.942L159.963 16.4545L155.865 23H159.036L161.721 18.532H161.823L164.507 23H167.691L163.606 16.4545L167.601 9.90909H164.475L161.823 14.3707H161.721L159.081 9.90909Z"
            fill="#EFF1F5"
          />
        </svg>
      </nuxt-link>
      <div class="addr w-full mt-16 md:mt-0 z-50">
        <p class="text-primelux-grey leading-24px md:w-7/12">
          B1 tower, 195 Agidingbi road,
        </p>
        <p class="mt-2">Ikeja Lagos,</p>
        <p class="mt-2">Lagos Nigeria</p>
      </div>
      <div class="contact z-50 mt-10 md:mt-0 w-full">
        <a class="z-50" href="tel:(84) 18001688">(84) 18001688</a>
        <a class="block mt-5" href="mailto:hello@primelux.com"
          >mailto:hello@primelux.com</a
        >
        <p class="mt-5">© Adige LLC</p>
      </div>
      <div class="policy w-full mt-10 md:mt-0">
        <nuxt-link class="block z-50" to="/">Privacy Policy</nuxt-link>
        <nuxt-link class="block mt-5" to="/">Terms Of Use</nuxt-link>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="leftside"></div>
      <div class="rightside"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped lang="scss">
section {
  background: linear-gradient(270deg, #2d3549 0%, #353e56 100%);
}
</style>
