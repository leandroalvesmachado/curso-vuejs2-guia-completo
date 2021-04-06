<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador />
    </div>
</template>

<script>
// registrando componente de forma local
import Contador from './Contador.vue';

export default {
    components: {
        'app-contador': Contador
    }
}
</script>

<!-- 
    Mesmo com scoped os componentes filhos (primeiro nivel = filhos diretos, filhos de fihos não herdam) 
    herdam o css (nem todas as propriedades, mas requer atenção)-->
<!-- Elemento filho app-contador (primeiro nível) -->
<style scoped>
    div {
        border: 1px solid red;
    }
</style>