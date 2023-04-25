import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import VMask from 'v-mask'

Vue.use(VMask)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
