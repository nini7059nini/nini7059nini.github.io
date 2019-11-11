import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './stores'
import router from './routers'
import './assets/rem'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
new Vue({
  //vuex this.$store
  store,
  router,
  render: h => h(App),
}).$mount('#app')

