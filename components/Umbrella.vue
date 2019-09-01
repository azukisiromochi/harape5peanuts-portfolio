<template>
  <div>
    <svg
      id="umbrella"
      @click="changeColor"
      xmlns:vectornator="http://vectornator.io"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g vectornator:layerName="レイヤー 1" :style="{ fill: color }">
        <path
          d="M510 1016L156.447 869.553 10 516l146.447-353.553L510 16l353.553 146.447L1010 516 863.553 869.554 510 1016z"
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
    <svg
      id="umbrella"
      @click="changeColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:vectornator="http://vectornator.io"
      viewBox="0 0 1024 1024"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g
        vectornator:layerName="Layer 1"
        :style="{ fill: color }"
        stroke="#fff"
        stroke-width="3.04"
        stroke-dasharray="10"
      >
        <path
          d="M692.294 1257.41l1.134-18.15M697.965 1276.7l6.806-20.42"
          fill="none"
        />
        <path
          d="M512 1011l-250-66.987L78.987 761 12 511l66.987-250L262 77.987 512 11l250 66.987L945.013 261 1012 511l-66.987 250L762 944.013 512 1011z"
        />
        <path
          d="M513.924 16.177l-2.863 991.973M761.724 83.342L263.26 940.981M942.743 265.409L82.241 758.914M1008.48 513.593L16.508 510.73M941.311 761.394L83.673 262.93M759.245 942.412L265.74 81.911"
          fill="none"
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
      default: '#e7d5e8'
    },
    secondaryColor: {
      type: String,
      default: '#fcd7a1'
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
  width: 120px;
  height: 120px;
}
</style>
