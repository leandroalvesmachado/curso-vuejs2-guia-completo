<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <!-- passando number como string sem o : -->
        <!-- sem os : sempre passa a prop como string -->
        <!-- os : interpreta o valor passado -->
        <Door number="1" :hasGift="false" />
    </div>
</template>

<script>
import Door from './components/Door';

export default {
    name: 'App',
    components: {
        Door
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #FFF;
    background: linear-gradient(to right);
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}
</style>
