<template>
    <div>
      Home 组件
      <button @click="handleClick">触发自定义事件</button>
      <slot name="left" ></slot>
      <slot name="right"  :user='user'></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Home 子组件的数据',
      user: {
        firstName: 'curry',
        lastName: 'stephe'
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('myEvent', this.msg)
      this.$Bus.$emit('myBus', this.msg)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
