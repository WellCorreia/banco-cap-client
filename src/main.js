import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// eslint-disable-next-line
window._Vue = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
