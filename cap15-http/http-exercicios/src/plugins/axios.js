// Axios de forma global
import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://curso-vue-38bfc.firebaseio.com/';

// Exemplo enviando token de autorização
// headers de forma global para o axios global
axios.defaults.headers.common['Authorization'] = 'abc123';
axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;

        // axios com multiplas instâncias
        // serve para chamar varias baseURL diferentes
        // Vue.prototype.$http = axios.create({
        //     baseURL: 'https://curso-vue-38bfc.firebaseio.com/'
        // });

        // passando headers de outra forma
        // Vue.prototype.$httpOutraApi = axios.create({
        //     baseURL: 'https://curso-vue-38bfc.firebaseio.com/'
                // headers: {
                //     get: {
                //         'Authorization': 'abc123'
                //     }
                // }
        // });

        // interceptador de requisições
        Vue.prototype.$http.interceptors.request.use(config => {
            // visualizando metodo na requisição
            console.log('Requisição ' + config.method);

            // exemplo de uso
            // if (config.method == 'post') {
            //     config.method = 'put';
            // }

            // para continuar a requisição
            return config;
        }, error => Promise.reject(error));

        // interceptador de respostas
        // Vue.prototype.$http.interceptors.response.use(res => {
        //     const array = [];

        //     for (let chave in res.data) {
        //         array.push({
        //             id: chave,
        //             ...res.data[chave]
        //         });
        //     }

        //     res.data = array;

        //     return res;
        // }, error => Promise.reject(error));
    }
})