import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Filtro global
Vue.filter('contarPalavras', function(valor) {
	return valor.split(' ').map(p => `${p} (${p.length})`);
});

new Vue({
	render: h => h(App),
}).$mount('#app')
