<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from './views/Login'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>
<style>
#app{
  width:auto;
  height:auto;
  background: skyblue;
}
</style>
