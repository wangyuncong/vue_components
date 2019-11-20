<template>
  <div class="WycButton">
    <el-button
      :type="type"
      :plain="plain"
      :round="round"
      :icon="icon"
      :circle="circle"
    >
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'WycButton',
  data () {
    return {
      origin:''
    }
  },
  created(){
    this.origin = window.origin
    console.log(this.origin)
  },
  props:['type','plain','round','icon','circle']
}
</script>

<style scoped>

</style>
