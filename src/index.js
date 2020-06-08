import Vue from 'vue'
import './styles/style.css'
import './styles/style.less'

let jsons = require('../src/components/timer.json')


window.Vue = require('vue/dist/vue')







Vue.component('forms-component', require('../src/components/form.vue').default)

const app = new Vue({
    el: '#app',
    render (h) {
        return h('forms-component')
    }


})







