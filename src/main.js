// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import Toaster from "@meforma/vue-toaster";


// router.beforeEach((to,from,next)=>{
// console.log('router before');
// console.log(to);
// console.log(from);
// // console.log('next'+next);


// // if(to.path==='/'){
//     // router.push('/')
// // }
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Toaster)
// app.use(Toaster, {
//     // One of the options
//     position: "top",
//   });
app.mount('#app')
