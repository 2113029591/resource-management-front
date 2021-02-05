<template>
  <div calss="loginAndRegisterButton">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script>
export default {
  name: "LoginAndRegisterTitle",
  methods:{

  },
}
</script>

<style scoped>
.loginAndRegisterButton{
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}
.item{
  padding: 5px 10px;
  color: #969696;
  font-weight: bold;
  font-size: 1.3em;
  cursor: pointer;
}
</style>