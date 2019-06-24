import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const listeners = [
  {
    selector: '#custom-event-listener',
    event: 'custom-event'
  }
]

let vueInstante = null

window.renderFirst = (containerId, router, registerListeners) => {
  registerListeners(listeners)
  vueInstante = new Vue({
    router,
    render: h => h(App),
  })
  vueInstante.$mount(`#${containerId}`)
}

window.unmountFirst = () => {
  vueInstante.$destroy(true)
}