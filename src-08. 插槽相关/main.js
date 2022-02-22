import Vue from 'vue'
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false

Vue.prototype.$Bus = new Vue()

new Vue({
  render: h => h(App)
}).$mount('#app')
