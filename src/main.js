import Vue from 'vue'
import Router from 'vue-router'
import Framework7 from 'framework7/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import Framework7Styles from 'framework7/css/framework7.css';
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';
import axios from 'axios'
import router from './router'
import App from './app';



window.axios = axios;
window.Framework7 = Framework7;
Framework7.use(Framework7Vue);
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
// Init App
new Vue({
  el: '#app',
  data:
  {
    isLoggedIn : null
  },
  router,
  render: h => h(App)
});


//var $$ = Dom7;
var app = new Framework7({
  view: {
    iosDynamicNavbar: true,
    xhrCache: false,
    pushState: false,
  },
  dialog: {
    // set default title for all dialog shortcuts
    title: 'Rubik',
  },
  on: {
    tabShow : function() {
     this.f7router.refreshPage();
    }
  }
});
window.app = app;
