import '@/assets/styles/reStyle.css';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const store = createPinia()
const app = createApp(App)

store.use(piniaPluginPersistedstate)

app.use(router)
app.use(store)
app.mount('#app')