<template>
	<nav class="menu">
        <ul>
            <!-- <li>
                <router-link to="/">Início</router-link>
            </li>
            <li>
                <router-link to="/usuario">Usuário</router-link>
            </li> -->

            <!-- tag = o router link irá gerar um li e não <a> -->
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Home</a>
            </router-link>
            <router-link to="/usuario" tag="li" active-class="active">
                <a>User</a>
            </router-link>
        </ul>
	</nav>
</template>

<script>
export default {
	
}
</script>

<style>
</style>
