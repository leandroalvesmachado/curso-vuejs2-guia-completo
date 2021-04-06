new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        // possivel tambem monitorar uma variavel computed
        // noa somente a variavel do data
        // cuidado com os loops
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente';
        }
    }
});