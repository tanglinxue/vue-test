<template>
  <div id="app">
      <router-view></router-view>
      <GuideFooter ></GuideFooter>
  </div>
</template>

<script>
import GuideFooter from './components/GuideFooter/GuideFooter.vue'
export default {
  components: {
    GuideFooter
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style lang="stylus">

</style>
