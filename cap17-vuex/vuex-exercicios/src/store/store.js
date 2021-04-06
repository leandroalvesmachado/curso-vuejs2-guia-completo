import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// vuex serve para compartilhar informações entre os componentes
// sem a necessidade de passar sempre para o componente pai
// pode ser uma comunicação direta entre qualquer componente
// dados compartilhados e acessiveis entre os componentes $store

//  estado centralizado
export default new Vuex.Store({
    // representa o estado compartilhado
    state: {
        produtos: [
            // { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
            // { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
            // { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
        ]
    },
    // lê os estados, usado para processamento dos dados
    getters: {
        // deixando o calculo mais centralizado, para evitar ter em varios componentes
        valorTotal(state) {
            return state.produtos
                .map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    },
    // seriam os setters
    // altera o estado
    mutations: {
        // só pode ter um parâmetro adicional (state e outro)
        // nesse caso o payload é o produto
        adicionarProduto(state, payload) {
            state.produtos.push(payload);
        }
    },
    actions: {
        adicionarProduto(context, payload) {
            // adiciona 1 segundo após o clique
            setTimeout(() => {
                context.commit('adicionarProduto', payload);
            }, 1000);
        }
    }
});