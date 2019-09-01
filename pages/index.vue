<template>
  <div class="container">
    <div>
      <h1 class="title">
        portfolio
      </h1>
      <h2 class="subtitle">
        My lovely Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <Umbrella primary-color="#e7d5e8" secondary-color="#fbdac8" />
      <Umbrella primary-color="#fcd7a1" secondary-color="#ded799" />
      <Umbrella primary-color="#a5d4ad" secondary-color="#f9c270" />
    </div>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #d4ecea;
  max-width: 100vw;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
