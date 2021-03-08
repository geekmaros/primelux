<template>
  <section class="w-full h-auto px-5 md:px-78">
    <h1
      class="section-title text-56px text-primelux-grey leading-56px font-bold text-center"
    >
      News & Press
    </h1>

    <div
      class="card-wrapper mt-24 flex flex-col md:flex-row grids md:grid-cols-4 w-full"
    >
      <NewsCard
        v-for="(post, index) in posts"
        :key="post - `${index}`"
        :post="post"
        class="mb-10 md:mb-0"
      ></NewsCard>
    </div>

    <div
      class="scroll-button z-50 w-full flex justify-center items-center space-x-5 md:mt-24"
    >
      <div class="left-arrow z-50 box cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#EFF1F5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12H2M2 12L8 4M2 12L8 20"
            stroke="#EFF1F5"
            stroke-width="2"
          />
        </svg>
      </div>
      <div class="right-arrow z-50 cursor-pointer box">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12H22M22 12L16 4M22 12L16 20"
            stroke="#222655"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsAndPress',
  data() {
    return {
      posts: [
        {
          name: 'Work starts on $250M community with 300-plus...',
          time: '1 hrs ago',
          imageUrl: '/images/cardpic1.png',
        },
        {
          name: 'Focused on the Portuguese residential real estate....',
          time: '3 hrs ago',
          imageUrl: '/images/cardpic4.png',
        },
        {
          name: 'Most Influential Developers',
          time: '1 hrs ago',
          imageUrl: '/images/cardpic3.png',
        },
        {
          name: 'Looking Beyond the Golf Course',
          time: 'Yesterday',
          imageUrl: '/images/cardpic4.png',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
section {
  .section-title {
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  }
  .scroll-button {
    .box {
      width: 40px;
      height: 40px;
      padding: 8px;
      border: 2px solid #eff1f5;
      box-sizing: border-box;

      &:hover {
        background: #eff1f5;
        svg {
          path {
            stroke: #222655;
          }
        }
      }

      svg {
        path {
          stroke: #eff1f5;
        }
      }
    }
  }
}
</style>
