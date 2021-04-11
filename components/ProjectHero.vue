<template>
  <section class="hero w-full h-screen flex relative bg-transparent relative">
    <div class="right-side w-full h-full bg-blue-400 relative">
      <transition name="fade">
        <div
          class="h-full bg-right bg-no-repeat bg-cover relative"
          style="background-image: url('/images/slideproject.png')"
        ></div>
      </transition>

      <div class="flex-side flex w-full px-78 absolute bottom-0 z-10">
        <div class="title w-full mb-20">
          <h1
            class="text-primelux-grey text-56px font-bold leading-56px max-w-xs z-10"
          >
            Our Projects
          </h1>
          <ScrollButton class="absolutes mt-10 w-full"></ScrollButton>
        </div>
        <div
          class="locations hidden md:block borderd blur relative cursor-pointer border-t-4 relative border-primelux-grey self-end w-full z-50 py-10"
        >
          <h2
            class="name font-serif font-bold pl-10 text-primelux-grey text-xl"
          >
            RPBW Atelier
          </h2>
          <p class="location text-base pl-10 leading-24px">Ibeju</p>
        </div>
        <div
          class="locations hidden md:block relative cursor-pointer border-t-4 border-primelux-grey self-end z-50 w-full py-10"
        >
          <h2
            class="name font-serif font-bold pl-10 text-primelux-grey hover:text-red text-xl"
          >
            Paris Courthouse
          </h2>
          <p class="location text-base pl-10 leading-24px">Lekki</p>
        </div>
        <div
          class="locations hidden md:block cursor-pointer border-t-2 self-end w-full z-50 py-10"
        >
          <h2
            class="name font-serif font-bold pl-10 text-primelux-grey text-xl"
          >
            The Shard
          </h2>
          <p class="location text-base pl-10 leading-24px">Magodo</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectHero',
}
</script>

<style scoped lang="scss">
section {
  .left-side {
    background: linear-gradient(90deg, #2a314c 0%, #1d2235 100%);
    //transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .locations {
    background: rgba(104, 113, 136, 0.3);
    &:hover {
      background: none;
      .name {
        z-index: 2;
        color: white;
        opacity: 1;
      }
      .location {
        opacity: 1;
        color: #eff1f5;
      }
    }
    .name {
      opacity: 0.3;
    }
    .location {
      color: #eff1f5;
      opacity: 0.3;
    }
    .blur {
      filter: blur(4px);
    }
  }
}
</style>
