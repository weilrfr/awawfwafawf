import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/arya-green/theme.css';

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice';

const app = createApp(App)





app.use(router)
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app')
