<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
// import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
        }
    },
    methods: {
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // serve para ignorar os erros de eslint
            // eslint-disable-next-line
            console.log(produto)
            // this.$store.state.produtos.push(produto);

            // usando mutations
            // this.$store.commit('adicionarProduto', produto);
            // usando o mapMutations é possivel acessar usando this.adicionarProduto(produto);
            // usando o mapActions é possivel acessar usando this.adicionarProduto(produto);

            // usando actions agora
            // usando da mesmo forma da mutations
            this.adicionarProduto(produto);
        },
        // mutations ficam nos methods
        // adiciona dentro dos metodos a mutation
        // ...mapMutations(['adicionarProduto']),
        ...mapActions(['adicionarProduto'])
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
