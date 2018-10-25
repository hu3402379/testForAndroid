import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from 'store/store';
import "babel-polyfill";
import * as cornerstone from 'cornerstone-core'
import * as cornerstoneTools from 'cornerstone-tools'

// for debugger
import VConsole from 'vconsole'
new VConsole()
window.cornerstone = cornerstone;
window.cornerstoneTools = cornerstoneTools;
Vue.use(Vuex);
router.beforeEach((to, from, next) => {
      next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');