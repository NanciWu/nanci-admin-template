import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue' // svg component
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register' // svg component, Important

createApp(App).component('SvgIcon', SvgIcon).mount('#app')
