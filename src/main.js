import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-grid.min.css'

createApp(App).use(router).mount('#app')
