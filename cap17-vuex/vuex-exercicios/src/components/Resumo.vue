<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // computed: {
    //     // total() {
    //     //     // logica do calculo fica no store agora (getters)
    //     //     // return this.produtos.map(p => p.quantidade * p.preco)
    //     //     //     .reduce((total, atual) => total + atual, 0)

    //     //     return this.$store.getters.valorTotal;
    //     // }
    //     // produtos() {
    //     //     return this.$store.state.produtos;
    //     // }
    // },
    // computed: mapGetters(['valorTotal'])
    // data() {
    //     return {
    //         produtos: [
    //             { nome: 'Produto 1', quantidade: 7, preco: 14.55 },
    //             { nome: 'Produto 2', quantidade: 10, preco: 22.99 },
    //             { nome: 'Produto 3', quantidade: 1, preco: 43.18 },
    //         ]
    //     }
    // }
    computed: mapGetters({
        total: 'valorTotal'
    })
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
