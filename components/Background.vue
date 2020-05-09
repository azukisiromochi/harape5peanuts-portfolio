<template>
  <div class="umbrellas">
    <Umbrella primary-color="#e7d5e8" secondary-color="#fbdac8" />
    <Umbrella
      primary-color="#fcd7a1"
      secondary-color="#ded799"
      umbrella-type="12"
    />
    <Umbrella primary-color="#a5d4ad" secondary-color="#f9c270" />
    <Umbrella
      primary-color="#fbdac8"
      secondary-color="#e7d5e8"
      umbrella-type="12"
    />
    <Umbrella primary-color="#ded799" secondary-color="#fcd7a1" />
    <Umbrella
      primary-color="#f9c270"
      secondary-color="#a5d4ad"
      umbrella-type="12"
    />
  </div>
</template>

<script>
import Umbrella from '~/components/Umbrella.vue'

export default {
  components: {
    Umbrella
  }
}
</script>

<style>
.umbrellas {
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
