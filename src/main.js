import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes';
import store from './store';
import YouTube from 'vue3-youtube'
createApp(App)
.use(routes)
.use(store)
.component('YouTube', YouTube)
.mount('#app')
