<template>
  <div>
    <img
      id="umbrella"
      :style="{ 'background-color': color }"
      src="../assets/images/svg/umbrella8.svg"
      @click="changeColor"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:vectornator="http://vectornator.io"
      viewBox="0 0 1024 1024"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g vectornator:layerName="レイヤー 1">
        <path
          stroke="#000"
          d="M510 1016L156.447 869.553 10 516l146.447-353.553L510 16l353.553 146.447L1010 516 863.553 869.554 510 1016z"
          stroke-linecap="butt"
        />
        <path
          stroke="#fff"
          stroke-width="3.04"
          d="M515.868 19.237l-9.581 989.213M157.369 161.576l700.952 698.072M155.664 864.393l704.362-694.631M13.229 510.025l989.231 7.64"
          fill="none"
          stroke-dasharray="10"
        />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    primaryColor: {
      type: String,
      default: '#87ceeb'
    },
    secondaryColor: {
      type: String,
      default: '#ffa500'
    }
  },
  data() {
    return {
      color: this.primaryColor
    }
  },
  methods: {
    changeColor() {
      if (this.color === this.primaryColor) {
        this.color = this.secondaryColor
      } else {
        this.color = this.primaryColor
      }
    }
  }
}
</script>
<style>
#umbrella {
  width: 100px;
  height: 100px;
}
.skybulue {
  background-color: #87ceeb;
}

.orange {
  background-color: #ffa500;
}
</style>
