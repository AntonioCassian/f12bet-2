import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/store'
//import store from './store/index'
import VMask from 'v-mask'
import './plugins/axios'

Vue.use(VMask)
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
