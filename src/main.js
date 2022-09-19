import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'

import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-grid.min.css'


createApp(App).use(createPinia()).use(router).mount('#app')
