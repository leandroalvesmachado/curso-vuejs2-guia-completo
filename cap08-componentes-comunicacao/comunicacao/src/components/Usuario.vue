<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <!-- Alterando valor da variavel do componente pai para o filho -->
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- <app-usuario-info v-bind:nome="nome" /> -->
            <app-usuario-info
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event.novo"
                :reiniciarFn="reiniciarNome"
            />
            <!-- @nomeMudou é o nome do evento que o filho disparou para o pai, quando o pai quer escutar o evento -->
            <!-- $event = valor que vem do evento do filho -->
            <!-- <app-usuario-editar
                :idade="idade"
                @idadeMudou="idade = $event"
            /> -->

            <!-- event bus, atualizando valor da idade de componente entre componentes filhos, sem passar pelo pai -->
            <app-usuario-editar
                :idade="idade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana';
        },
        reiniciarNome() {
            this.nome = 'Pedro';
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
