// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueSession from 'vue-session'
import VueResource from 'vue-resource'
import DrawerLayout from 'vue-drawer-layout'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader 

Vue.use(Vuetify)
Vue.use(DrawerLayout)
Vue.use(VueResource);
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueSession)

window.$ = window.jQuery = require('jquery')

Vue.http.options.root = 'https://crserafunctionapps.azurewebsites.net'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
