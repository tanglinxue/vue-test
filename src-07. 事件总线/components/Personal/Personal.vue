<template>
    <div>
      Personal 组件
    </div>
</template>

<script>
export default {
  mounted () {
    console.log('Personal mounted')
  },
  activated () {
    // 当使用keep-alive的时候可以利用activated代替mounted发送请求
    console.log('Personal activated')
  },
  deactivated () {
    // 当使用keep-alive的时候可以利用 deactivated 代替 destoyed 收尾工作，比如： 关闭定时器，清除缓存数据等
    console.log('Personal deactivated')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
