import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/arya-green/theme.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faGithub, faTiktok, faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faGithub, faDiscord, faTiktok, faFacebook);

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyAUwrnBAY10e8LsyFg6A8RrnYVKDRJPW0A",
//     authDomain: "learn-vue-53df4.firebaseapp.com",
//     projectId: "learn-vue-53df4",
//     storageBucket: "learn-vue-53df4.appspot.com",
//     messagingSenderId: "214163821412",
//     appId: "1:214163821412:web:d2cc7d5109ec3b09012071"
//   };

// initializeApp(firebaseConfig);

const app = createApp(App)



app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(PrimeVue);

app.mount('#app')
