<template>
  <img
    id="umbrella"
    :style="{ 'background-color': color }"
    @click="changeColor"
    src="../assets/images/svg/umbrella8.svg"
  />
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
