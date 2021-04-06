<template>
	<div class="usuario">
		<h2>Usuário</h2>
        <hr>
        <!-- agora exibindo rotas aninhadas definidas no router.js para o usuário -->
        <router-view />
        <button sucesso @click="irParaInicio">Voltar</button>
	</div>
</template>

<script>
export default {
    // parâmetros de rotas via props
    // colocar props: true na rota
    // props: ['id'],
    // data() {
    //     return {
    //         // recuperar parâmetro na rota
    //         // gera um problema na navegação entre os componentes do mesmo tipo, mesmo componente
    //         // não atualiza o valor
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     // atualiza parâmetro no componente
    //     $route(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
	methods: {
        // Navegação via código (Navegação imperativa)
        irParaInicio() {
            // this.$router.push('/');
            // ou
            // this.$router.push({
            //     path: '/'
            // });
            // ou
            // usando rota nomeada
            this.$router.push({
                name: 'inicio'
            });

        }
    }
}
</script>

<style>
</style>
