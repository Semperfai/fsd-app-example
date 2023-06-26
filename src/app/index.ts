import { createApp } from 'vue'
import { router, pinia } from './providers'
import { VueQueryPlugin } from "vue-query"
import App from './App.vue'
import 'aos/dist/aos.css'
export const app = createApp(App).use(pinia).use(VueQueryPlugin).use(router)
