import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Bootstrap (CSS + JS)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// PrimeVue
// PrimeVue core + servicios y directivas
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import ConfirmationService from 'primevue/confirmationservice';                      // iconos
import 'primeicons/primeicons.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
