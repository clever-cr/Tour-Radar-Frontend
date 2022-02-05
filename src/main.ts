/* eslint-disable max-len */
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch, faBars, faUserCircle, faHome, faBell, faPlusSquare, faUser, faSignInAlt, faAngleDown, faSlidersH,
  faStar, faList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faSearch, faBars, faUserCircle, faHome, faBell, faPlusSquare, faUser, faSignInAlt, faAngleDown, faSlidersH, faStar, faList);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
