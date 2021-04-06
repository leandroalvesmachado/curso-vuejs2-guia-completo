import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Registrando filtro global
Vue.filter('inverter', function(valor) {
	return valor.split('').reverse().join('');
});

// Mixin Global
// é aplicado a todos os componentes existentes no projeto
Vue.mixin({
	data() {
		return {
			global: 'Estou no Mixin Global'
		}
	},
	created() {
		console.log('Created - Mixin Global');
	}
});

new Vue({
	render: h => h(App)
}).$mount('#app')
