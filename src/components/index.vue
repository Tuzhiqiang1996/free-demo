<template>
  <div class="hello">
    {{msg}}
    <router-link to="/index/home">home</router-link>
    <router-link to="/index/asset">asset</router-link>
    <router-link to="/total">asset</router-link>
    <div>666666666666666</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '欢迎来到主页面'
    }
  }
}
</script>
<style scoped>

</style>
