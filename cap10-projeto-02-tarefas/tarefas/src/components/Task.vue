<template>
    <div
        class="task"
        :class="stateClass"
        @click="$emit('taskStateChanged', task)"
    >
        <!-- clic.stop = clicou e parou , não chamou o click de cima por estarem no mesmo elemento -->
        <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
        <p>{{ task.name }}</p>
    </div>
</template>

<script>

export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        /* desabilitar a função selecionar o texto no elemento */
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        /* colocal uma linha riscando o texto */
        text-decoration: line-through;
    }

    .pending .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8F08;
    }

    /* posicionando o botão de fechar x */
    .close {
        /* position absolute em relação a .task (relative) */
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>
