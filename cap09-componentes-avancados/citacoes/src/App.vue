<template>
	<div id="app">
		<!-- <Citacoes />
		<Sobre /> -->

        <!-- Passando o nome do componente direto -->
        <!-- <component :is="Citacoes" /> -->

        <!-- Tag do vue e utilizada para exibição de componentes (Componentes dinâmicos) -->
        <span>
            <button @click="componente = 'Citacoes'">Citações</button>
            <button @click="componente = 'Sobre'">Sobre</button>
        </span>
        
        <!-- Toda vez que componente é iniciado, ele é criado, tudo se perde (componente destruido) -->
        <!-- <component :is="componente" /> -->

        <!-- Componente se mantém vivvo e com as informações e de onde parou (componente não destruido) -->
        <keep-alive>
            <component :is="componente" />
        </keep-alive>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
    components: { 
        Citacoes, Sobre 
    },
    data() {
        return {
            componente: 'Citacoes'
        }
    }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>