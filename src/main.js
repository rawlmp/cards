// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import * as firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyAmBUo9Y4FeHGdp3TCpVfRnBNyCn7U9bek",
      authDomain: "ubiqum-cards.firebaseapp.com",
      databaseURL: "https://ubiqum-cards.firebaseio.com",
      projectId: "ubiqum-cards",
      storageBucket: "ubiqum-cards.appspot.com",
      messagingSenderId: "800021744680"
    })

    this.$store.dispatch("loadCards")

  }



})
