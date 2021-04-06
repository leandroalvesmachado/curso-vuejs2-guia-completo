<template>
	<div class="usuario-editar">
		<h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
        <!-- recuperando valores da url (query parâmetros) -->
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>

        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
	</div>
</template>

<script>
export default {
    // parâmetros de rotas via props
    // colocar props: true na rota
    props: ['id'],
    data() {
        return {
            confirmou: false
        }
    },
    beforeRouteLeave(to, from, next) {
        // não deixar o usuário sair sem ter feito a tarefa ou ter confirmado
        if (this.confirmou) {
            next();
        } else {
            if (confirm('Tem certeza?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>
