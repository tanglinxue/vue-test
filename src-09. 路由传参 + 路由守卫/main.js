import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 关闭生产提示
Vue.config.productionTip = false

Vue.prototype.$Bus = new Vue()
/*
 组件实例： this
 应用实例： vm

 this.__proto__ = vm
 this.__proto__.__proto__ = Vue.prototype
 */

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
