import Vue from 'vue';
import Router from 'vue-router';

import Inicio from './components/Inicio';
// import Usuario from './components/usuario/Usuario';
// import UsuarioLista from './components/usuario/UsuarioLista';
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
// import UsuarioEditar from './components/usuario/UsuarioEditar';
import Menu from './components/template/Menu';
import MenuAlt from './components/template/MenuAlt';

Vue.use(Router);

// dois modos de navegação
// hash (localhost:8080/#/..)
// history (localhost:8080/...)

// carregando rotas tardiamente
// se quiser que varios componentes carreguem juntos, usar webpackChunkName: "usuario" */, vai criar usuario.js com os componentes tardios
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario');
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista');
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe');
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar');

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // faz o scroll ate o elemento do hash correto
        if  (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {
                selector: to.hash
            }
        }

        // retorna pro inicio caso nao encontre os outros acima
        return {
            x: 0,
            y: 0
        }
        // return {
        //     x: 0,
        //     y: 1000
        // }
    },
    routes: [
        {
            path: '/',
            // component: Inicio,
            name: 'inicio',
            // informando qual router view será renderizado
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            
            path: '/usuario',
            // component: Usuario,
            // informando qual router view será renderizado
            components: {
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt
            },
            // rotas filhas (rotas aninhadas)
            children: [
                {
                    path: '/',
                    component: UsuarioLista
                },
                {
                    // rota com parâmetro
                    path: ':id',
                    component: UsuarioDetalhe,
                    // todos os parâmetros dessa rota serão via props
                    props: true,
                    beforeEnter: (to, from, next) => {
                        // aplicando apenas a uma rota a regra
                        console.log('antes da rota -> usuário detalhe');
                        next();
                    }
                },
                {
                    path: ':id/editar',
                    component: UsuarioEditar,
                    props: true,
                    // rota nomeada
                    name: 'editarUsuario'
                }
            ]
        },
        {
            // redirecionando
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            // serve para redirecionar para alguma rota especifica ou pagina
            // serve nos casos que o usuário digita uma rota que não existe
            // 404 not found por exemplo
            path: '*',
            redirect: '/'
        }
    ]
});

// antes de cada navegação ele vai chamar essa função primeiro
// existem 3 maneiras de interceptar as rotas (proteger)
// essa é a forma global, existem outras duas
router.beforeEach((to, from, next) => {
    console.log('Antes das rotas -> global');

    // continua a requisição
    // também posso passar uma rota específica
    // next('/usuario'); 
    next();
});

export default router;