// FILE: main.js

import { createApp } from 'vue'
import { Quasar, Loading, Dialog, Notify, LocalStorage } from 'quasar'

import router from './router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)
myApp.use(router);
myApp.use(Quasar, {
  plugins: {
    Loading,
    Dialog,
    Notify,
    LocalStorage
  }, // import Quasar plugins and add here
  config: {
    loading: Loading,
    notify: Notify
  }
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
