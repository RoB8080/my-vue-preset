import './registerServiceWorker';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
    <%_ if (options.vuex) { _%>
import store from './store';
    <%_ } _%>
    <%_ if (options.i18n) { _%>
import i18n from './i18n';
    <%_ } _%>

<%_ if (options.element) { _%>
import ElementUI from 'element-ui';
import './theme/element-mixin.scss';
Vue.use(ElementUI);
<%_ } _%>

Vue.config.productionTip = false;

new Vue({
    router,
    <%_ if (options.vuex) { _%>
    store,
    <%_ } _%>
    <%_ if (options.i18n) { _%>
    i18n,
    <%_ } _%>
    render: (h) => h(App),
}).$mount('#app');
