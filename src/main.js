import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import './styles/app.scss'

Vue.config.productionTip = false

const files = require.context('./components/', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.use(Buefy)
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

new Vue({
  render: h => h(App)
}).$mount('#app')



