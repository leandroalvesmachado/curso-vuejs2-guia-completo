import Vue from 'vue';

// actions mais genericas
export default {
    loadData({ commit }) {
        Vue.prototype.$http.get('data.json').then(resp => {
            const data = resp.data;

            if (data) {
                commit('setStocks', data.stocks);
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                });
            }
        });
    }
}