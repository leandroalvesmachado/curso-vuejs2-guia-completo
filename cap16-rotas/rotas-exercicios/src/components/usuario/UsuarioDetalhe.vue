<template>
	<div class="usuario-detalhe">
		<h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`"> -->
        <!-- ou -->
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">
            Editar
        </router-link> -->
        <!-- rota nomeada -->
        <!-- <router-link
            tag="button"
            primario
            :to="{ 
                name: 'editarUsuario', 
                params: { 
                    id: $route.params.id 
                }
            }"
        > -->
        <!-- <router-link
            tag="button"
            primario
            :to="{ 
                name: 'editarUsuario', 
                params: { 
                    id: id
                    // ou somente
                    //id
                }
            }"
        >
            Editar
        </router-link> -->

        <!-- utilizando query parâmetros -->
        <router-link
            tag="button"
            primario
            :to="{ 
                name: 'editarUsuario', 
                params: { 
                    id: id
                    // ou somente
                    //id
                },
                query: {
                    completo: true,
                    lingua: 'pt'
                },
                hash: '#rodape'
            }"
        >
            Editar
        </router-link>
	</div>
</template>

<script>
export default {
    // parâmetros de rotas via props
    // colocar props: true na rota
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        // não tem acesso as props
        // para conseguir usar uma função callback no next
        console.log('dentro do componente - usuário detalhe');
        next(vm => {
            console.log(vm.id);
        });

        // const autenticado = true
        // autenticado ? next() : next(false)
    }
}
</script>

<style>
</style>
