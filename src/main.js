import { createApp } from 'vue'
import App from './App.vue'
import routers from './routes'
import { store } from './store'

import './assets/scss/main.scss'

const app = createApp(App)
app.use(routers)
app.use(store)

app.mount('#app')

store.subscribe((mutation, state) => {
  if (state) {
    localStorage.setItem('state', JSON.stringify(state))
  }
})
