<template>
  <div class="scroll-button z-40 w-full items-center">
    <div class="scroll-wrapper flex items-center space-x-5">
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
  </div>
</template>

<script>
export default {
  name: 'ScrollButton',
}
</script>

<style scoped lang="scss">
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
</style>
