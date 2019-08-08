<template>
  <div
    id="umbrella"
    :style="{ 'background-color': color }"
    @click="changeColor"
  />
</template>
<script>
export default {
  props: {
    primaryColor: String,
    secondaryColor: String
  },
  data: function () {
    return {
      color: this.primaryColor || '#87ceeb'
    }
  },
  methods: {
    changeColor: function () {
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
  width: 200px;
  height: 200px;
}
.skybulue {
  background-color: #87ceeb;
}

.orange {
  background-color: #ffa500;
}
</style>
