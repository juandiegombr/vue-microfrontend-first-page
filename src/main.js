import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.renderFirst = (containerId, router) => {
  new Vue({
    router,
    render: h => h(App),
  }).$mount(`#${containerId}`)
}