<template>
  <div id="First-container" class="page">
    <h1>First Microfrontend</h1>
    <p>This is a MicroFrontend comming from a remote project</p>
    <button @click="goHome">Go home from MicroFrontend</button>
  </div>
</template>

<script>
export default {
  name: 'First',
  methods: {
    goHome () {
      console.log(this)
      this.$router.push('/')
    }
  },
  created () {
    console.log('First Microfrontend created!')
  },
  beforeDestroy() {
    console.log('First Microfrontend destroyed!')
  }
}
</script>

<style>
#First-container {
  color: red
}
</style>
