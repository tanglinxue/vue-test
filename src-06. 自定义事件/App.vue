<template>
  <div id="app">
    <!-- tab导航 -->
      <div class="tabs">
        <div class="tabItem" @click="changeTab('Home')">
          Home 链接
        </div>
        <div class="tabItem" @click="changeTab('Personal')">
          Personal 链接
        </div>
      </div>
      <Home ref='home'></Home>
      <Personal></Personal>
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'

export default {

  data () {
    return {
      comName: 'Home'
    }
  },
  components: {
    Home,
    Personal: () => import('./components/Personal/Personal.vue')
  },
  methods: {
    changeTab (comName) {
      this.comName = comName
    }
  },
  mounted () {
    this.$refs.home.$on('myEvent', (msg) => {
      console.log('自定义事件被触发')
      console.log('App组件： 获取到来自Home组件的数据', msg)
    })
  }
}
</script>

<style lang="stylus">
    .tabs
      display flex
      .tabItem
        width 50%
        height 80px
        line-height 80px
        text-align center
        border 1px solid #333333
        box-sizing border-box
</style>
