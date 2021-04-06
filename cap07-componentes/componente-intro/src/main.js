import Vue from 'vue'
import App from './App.vue'

// Registrando componente de forma global
// import Contador from './Contador.vue'

// Registrando componente de forma global
import Contadores from './Contadores.vue'


Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
