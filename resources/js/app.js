require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';
import store from './store';
import MainApp from './layouts/MainApp.vue';

// import { initialize } from './init';

Vue.use(VueRouter);

// initializing Vue Router
const router = new VueRouter({
    mode: 'history',
    routes
});

// initialization
// initialize(store, router);

// loading everything upon opening the system.
// calling the main vue app component
const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		MainApp
	}
});