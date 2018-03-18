// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import AppDate from '@/components/AppDate'
import ability from '../ressources/ability'
import abilityPlugin from '../ressources/ability-plugin'

Vue.use(abilityPlugin, ability)

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
