import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCmxvYe0MCXxcy4vFoa4nvLJENdddVP2L0",
  authDomain: "vue-calender-be5cf.firebaseapp.com",
  databaseURL: "https://vue-calender-be5cf-default-rtdb.firebaseio.com",
  projectId: "vue-calender-be5cf",
  storageBucket: "vue-calender-be5cf.appspot.com",
  messagingSenderId: "930798263736",
  appId: "1:930798263736:web:734eceedd062d7a9b2434d"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
