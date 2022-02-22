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
    <!-- 动态组件 -->
    <keep-alive :exclude='["Personal"]'>
      <component :is='comName'></component>
    </keep-alive>

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
