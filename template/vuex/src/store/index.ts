import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Example from './module/example';

export default new Vuex.Store({
    modules:{
        Example,
    }
})
