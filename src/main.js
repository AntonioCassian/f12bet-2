import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/store'
import VMask from 'v-mask'

Vue.use(VMask)
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
