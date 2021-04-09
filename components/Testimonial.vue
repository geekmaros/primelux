<template>
  <section class="h-auto pb-72 md:pb-44 w-full px-5 md:px-78 mt-40 md:mt-126">
    <div
      class="test-image relative w-full flex flex-col justify-center items-center relative"
    >
      <img class="mt-32" src="/svg/bg.svg" alt="" />
      <img
        class="top-0 lg:mt-24 absolute w-20 md:w-auto z-50"
        src="/images/ava.png"
        alt="Avatar"
      />
      <img
        class="absolute w-20 md:w-auto left-0 z-50 md:mt-56 md:ml-20 lg:ml-72"
        src="/images/avagirl.png"
        alt="Avatar"
      />
      <img
        class="absolute w-20 md:w-auto jamie z-50 left-0 md:bottom-0"
        src="/images/avajamie.png"
        alt="Avatar"
      />
      <img
        class="absolute w-20 md:w-auto right-0 z-50 md:mr-10 lg:mr-72 md:-mt-20 lg:-mt-3"
        src="/images/ava.png"
        alt="Avatar"
      />
      <div
        class="test-speech flex justify-center flex-col absolute top-0 mt-32 md:mt-64"
      >
        <div class="svg-wrapper w-full flex justify-center">
          <svg
            width="63"
            height="48"
            viewBox="0 0 63 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6698 47L22.6032 28.373H14.9238C16.6095 17.6762 20.1683 12.6967 27.473 9.93032L29.1587 2C17.3587 3.29098 9.30476 11.2213 6.86984 24.5L2 47H18.6698ZM50.5111 47L54.4444 28.373H46.7651C48.4508 17.8606 52.0095 12.5123 59.3143 9.93032L61 2C49.2 3.29098 41.3333 11.2213 38.7111 24.5L33.8413 47H50.5111Z"
              stroke="#687188"
              stroke-width="2"
            />
          </svg>
        </div>

        <h1
          class="text-xl font-sans text-primelux-grey italic leading-36px max-w-lg text-center mt-10"
        >
          “ There's a certain way of creating a service, hospitality, and
          experience that perpetuates people feeling like they matter "
        </h1>

        <p
          class="name text-lg font-serif text-center leading-30px text-primelux-grey mt-5"
        >
          Harry tran
        </p>
        <p class="role font-serif leading-24px text-center">CEO Trung nguyen</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonial',
}
</script>

<style scoped lang="scss">
section {
  .jamie {
    margin-top: 45rem;
    margin-left: 42rem;
    @media screen and (max-width: 600px) {
      margin-top: 45rem;
      margin-left: 8rem;
    }
  }
  .role {
    color: #687188;
  }
}
</style>
