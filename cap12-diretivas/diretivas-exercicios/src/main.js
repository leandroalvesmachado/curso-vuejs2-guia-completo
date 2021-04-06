import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Registrando diretiva globalmente
// Criando diretiva global
Vue.directive('destaque', {
	// metodos gatilhos (hooks)
	// bind (el, binding, vnode) - Quando a diretiva é interligada com elemento
	// inserted (el, binding, vnode) - Elemento inserido no nó pai
	// update (el, binding, vnode, oldVNode) - Quando o componente é atualizado (antes filhos)
	// componentUpdated (el, binding, vnode, oldVNode) - Quando o componente é atualizado (depois filhos)
	// unbind (el, binding, vnode) - Quando a diretiva é desvinculada do elemento

	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'lightgreen';

		// passando valor para diretiva
		// el.style.backgroundColor = binding.value;

		// utilizando argumnento para a diretiva
		// if (binding.arg === 'fundo') {
		// 	el.style.backgroundColor = binding.value;
		// } else {
		// 	el.style.color = binding.value;
		// }

		// utilizando modificadores
		let atraso = 0;
		if (binding.modifiers['atrasar']) {
			atraso = 3000;
		}

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, atraso);
	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
