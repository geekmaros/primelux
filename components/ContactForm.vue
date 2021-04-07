<template>
  <section class="h-auto w-full bg-red-300 px-5 md:px-78 mt-32 pb-20 flex z-50">
    <div
      class="form-wrapper w-full relative h-full flex flex-col md:flex-row pb-20"
    >
      <svg
        width="322"
        class="absolute"
        height="52"
        viewBox="0 0 322 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <rect width="322" height="1" fill="#EFF1F5" />
          <rect y="17" width="322" height="1" fill="#EFF1F5" />
          <rect y="34" width="322" height="1" fill="#EFF1F5" />
          <rect y="51" width="322" height="1" fill="#EFF1F5" />
        </g>
      </svg>

      <svg
        width="162"
        height="518"
        viewBox="0 0 162 518"
        fill="none"
        class="h-fulls w-full absolute mt-24 -ml-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.02" width="162" height="518" fill="#EFF1F5" />
      </svg>

      <svg
        width="159"
        height="72"
        class="w-full absolute left-0 -ml-60"
        viewBox="0 0 159 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.02" width="159" height="72" fill="#EFF1F5" />
      </svg>

      <div class="font-serif left-side h-full w-full pt-16 md:pt-156 md:pl-16 lg:pl-150s">
        <h1
          class="text-primelux-grey text-5xl md:text-56px font-bold md:leading-56px max-w-sm"
        >
          Get in touch with us
        </h1>
        <svg
          class="mt-5 md:mt-8"
          width="56"
          height="4"
          viewBox="0 0 56 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="56" height="4" fill="#F5B172" />
        </svg>
      </div>
      <div class="form-section w-full pt-24 relative">
        <form
          class="relative w-full font-serif z-50 md:ml-10 pr-10 md:pr-32"
          action=""
        >
          <div class="input-wrapper">
            <input
              class="block pb-5 leading-16px text-primelux-grey"
              placeholder="Fullname"
              id="fullname"
              type="text"
            />
          </div>
          <div class="input-wrapper mt-20">
            <label for="email"></label>
            <input
              class="block pb-5 leading-16px text-primelux-grey"
              id="email"
              placeholder="Email"
              type="email"
            />
          </div>
          <div class="input-wrapper mt-20">
            <label for="message"></label>
            <textarea
              class="block pb-5 leading-16px text-primelux-grey"
              rows="5"
              id="message"
              placeholder="Message"
              type="text"
            />
          </div>

          <button
            type="submit"
            class="z-50 inline-flex items-center border-b-4 mt-10 border-primelux-orange text-primelux-grey hover:text-white focus:outline-none transition-all ease-in pb-3 pt-4 px-4 hover:bg-primelux-orange"
          >
            <span class="text-base mr-3 leading-16px uppercase font-bold">
              Show More</span
            >
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 9H20M20 9L14 1M20 9L14 17"
                stroke="#EFF1F5"
                stroke-width="2"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>

<style scoped lang="scss">
section {
  .form-wrapper {
    background: linear-gradient(90deg, #2a314c 0%, #1d2235 100%);
    input,
    textarea {
      @apply focus:outline-none;
      border-bottom: 2px solid #687188;
      background-color: transparent;
      width: 100%;
    }
  }
}
</style>
