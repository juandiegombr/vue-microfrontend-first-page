<template>
  <div ref="firstContainer" id="First-container" class="page">
    <h1>First Microfrontend</h1>
    <p>This is a MicroFrontend comming from a remote project</p>
    <p>Routing from Microfrontend</p>
    <button @click="goHome">Go to Home</button>
    <button @click="goToImage(1051)">Image 1</button>
    <button @click="goToImage(1043)">Image 2</button>
    <button @click="goToImage(1036)">Image 3</button>
    <p>Communication between MicroFrontends</p>
    <button @click="changeUser">Change User</button>
    <button @click="sendEvent">Event</button>
    <div ref="customEventListener" id="custom-event-listener"></div>
  </div>
</template>

<script>
import faker from 'faker'
export default {
  name: 'First',
  methods: {
    goHome () {
      this.$router.push('/')
    },
    goToImage (id) {
      this.$router.push(`/second/${id}`)
    },
    sendEvent () {
      const event = new CustomEvent('custom-event', {
        bubbles: true,
        detail: { source: 'First' }
      })
      this.$refs.firstContainer.dispatchEvent(event)
    },
    changeUser () {
      const event = new CustomEvent('changeUser', {
        bubbles: true,
        detail: { name: faker.name.findName(), image: `https://picsum.photos/id/${(Math.random() * 1000).toFixed()}/24/24` }
      })
      this.$refs.firstContainer.dispatchEvent(event)
    },
    listener (e) {
      const mapSources = {
        Container: '💜 Event comming from the Container',
        First: '💛 Event comming from inside the Microfrontend',
        Second: '💚 Event comming from the Second Microfrontend'
      }
      console.log(mapSources[e.detail.source])
      alert(mapSources[e.detail.source])
    }
  },
  mounted () {
    console.log('💡 First Microfrontend mounted!')
    this.$refs.customEventListener.addEventListener('custom-event-repeater', this.listener)
  },
  beforeDestroy() {
    console.log('🧨 First Microfrontend destroyed!')
    this.$refs.customEventListener.removeEventListener('custom-event-repeater', this.listener)
  }
}
</script>

<style>
#First-container {
  color: red
}
</style>
