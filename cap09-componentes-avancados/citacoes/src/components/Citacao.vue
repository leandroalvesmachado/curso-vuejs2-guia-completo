<template>
    <!-- <div class="citacao">
        {{ texto }}
    </div> -->
    <div class="citacao">
        <!-- Slot padrão -->
        <slot></slot>

        <!-- Slot nomeado -->
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    // props: ['texto']
    created() {
        console.log('created');
    },
    destroyed() {
        console.log('destroyed');
    },
    // metodos do ciclo de vida de um componente dinâmico
    // só funcionam quando o <keep-alive> estiver disponível no componente
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('deactivated');
    }
}
</script>

<style scoped>
    /* Com scoped todos os elementos do componente sofrem as alteações do css, até os que vem via slot */
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
