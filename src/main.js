import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import NaoEncontrado from './pages/NaoEncontrado.vue';
import Inicio from './pages/Inicio.vue';

const routes = [
    { path: '/', redirect: "/inicio" },
    { path: '/inicio', component: Inicio, name:"inicio" },
    { path: '/:notFound(.*)', component: NaoEncontrado },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});



const vueApp = createApp(App);
vueApp.use(router);
vueApp.mount('#app');
