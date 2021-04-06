<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
        <hr>
        <!-- utilizando filtros para formatar valores -->
        <!-- múltiplos filtros -->
        <p>{{ cpf | cpf | inverter }}</p>

        <!-- utilizando filtro global -->
        <p>{{ cpf | inverter }}</p>

        <p>{{ usuarioLogado }}</p>

        <!-- aplicando filtro no v-bind -->
        <input type="text" :value="cpf | cpf | inverter">
        <hr>
        <Frutas />
        <hr>
        <div>
            <ul>
                <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
            </ul>
            <input type="text" v-model="fruta" @keydown.enter="add">
        </div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue';
// importando mixin (mistura, merge com o seu componente das informações)
import frutasMixin from './frutasMixin';
import usuarioMixin from './usuarioMixin';


export default {
    components: {
        Frutas
    },
    mixins: [
        frutasMixin,
        usuarioMixin
    ],
    data() {
        return {
            cpf: '98780832091',
            fruta: '',
            frutas: ['banana', 'maça', 'laranja']
        }
    },
    created() {
        console.log('created - app vue');
    },
    filters: {
        cpf(valor) {
            const arr = valor.split('');
            arr.splice(3, 0, '.');
            arr.splice(7, 0, '.');
            arr.splice(11, 0, '-');

            return arr.join('');
        }
    }
    // methods: {
    //     add() {
    //         this.frutas.push(this.fruta);
    //         this.fruta = '';
    //     }
    // }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 2.5rem;
    }

    input {
        font-size: 2.5rem;
    }
</style>
