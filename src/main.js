import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlug, faLightbulb, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faPlug);
library.add(faLightbulb);
library.add(faBolt);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
