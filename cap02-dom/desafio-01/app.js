new Vue({
    el: '#desafio',
    data: {
        nome: 'Leandro',
        idade: 35,
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/275px-Star_Wars_Logo.svg.png'
    },
    methods: {
        multiplicaIdade() {
            return this.idade * 3;
        },
        numeroRandomico() {
            return Math.random();
        }
    }
});