import * as $ from 'vue'
import './styles/style.css'
import './styles/style.less'
const jsons = require('../src/components/timer.json')

window.Vue = require('vue/dist/vue')
console.log(jsons)



Vue.component('appstarter-component', require('../src/components/AppStarter.vue').default)

const app = new Vue({
    el: '#app'
})






