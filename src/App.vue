<template>
  <div id="app">
    <div class="header">
      <h1>欢迎进入资源管理系统</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    toLogin(){
      this.$router.push('/Login')
    },
  },
  components:{
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.header{
  display: flex;
  justify-content: center;
}
#app{
  width:auto;
  height:auto;
  background: palegreen;
}
</style>
