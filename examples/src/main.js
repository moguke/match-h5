// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import router from './router.js'
import config from 'app/app.json'
import VueAppScroller from 'vue-app-scroller';
import VnodeCache from '../../src/index'
import http from '../config/http'
//import axios from 'axios'
import loading from '../static/loading001.gif'

/*import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI, {
    lazyload: {
        preLoad: 0,
        error: '../static/loading001.gif',
        loading: '../static/loading001.gif',
        attempt: 1,
    },
})*/

import vuePicturePreview from 'vue-picture-preview'  //引入图片查看器
Vue.use(vuePicturePreview)

import VueScroller from 'vue-scroller';
Vue.use(VueScroller)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$axios = axios
Vue.prototype.$http = http

require(`app/app.js`);

Vue.config.productionTip = false

FastClick.attach(document.body);

Vue.use(VnodeCache, {
  router,
  tabbar: config.barPages.map(item=>`/${item}`),
  common: '/'+config.commonPage
})

window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

