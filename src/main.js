import Vue from 'vue'
import App from './App.vue'

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueMeta from 'vue-meta'
import metaInfo from './seo.js'
Vue.use(VueMeta)

import VueMask from 'v-mask'
Vue.use(VueMask)

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 250,
  anchorPlacement: 'center-top'
});

import VeeValidate from "vee-validate";
Vue.use(VeeValidate, {
    events: '',
    mode: 'eager',
    locale: 'pt_BR'
})

import './assets/tailwind.css';
import './assets/base.scss';

import './plugins/google-analytics.js'
import './plugins/components.js'
import './plugins/vue-typed-js.js'

const i18n = new VueI18n({
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt: require('../locales/pt.json'),
  },
});

Vue.config.productionTip = false

import router from '../router';
import store from './store.js'

new Vue({
  metaInfo,
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')