<template>
    <!-- Case insensitive -->
    <!-- <div Class="componente"> ou <div CLASS="componente"> == <div class="componente"> -->
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Nome do Usuário Invertido: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <!-- Estrategias para eventos para o elemento pai -->
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    // Nome das propriedades sao case-sensitive
    // nome != Nome
    // props: ['nome'],
    // validando props
    props: {
        nome: {
            type: String,
            required: true,
            // valor padrão caso esteja vazio a prop
            default: 'Pedro'
            // também é possível o valor default ser a partir de uma function
            // default: function() {
            //     //logica
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: {
            type: Function
        },
        idade: {
            type: Number
        }
    },
    data() {
        return {
            nomeAlternativo: this.nome // this.nome é a prop, sendo passada para outra variável
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            const antigo = this.nome;
            this.nome = 'Pedro';
            //  $emit serve para disparar o evento do filho para o pai para atualizar a variável
            // this.$emit('nomeMudou', this.nome);
            // ou
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
            });
        }
    },
    created() {
        // barramento.$on('idadeMudou', idade => {
        //     this.idade = idade;
        // });

        // alterando para methodo criado no barramento.js
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade;
        });
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
