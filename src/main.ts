import { createPinia } from 'pinia'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
//import.meta.env.DEV && (await import('@/mock/index'))

createApp(App).use(router).use(createPinia()).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')