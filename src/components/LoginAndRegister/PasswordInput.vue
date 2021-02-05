<template>
  <div class="passwordInput">
    <img class="icon" src="../../assets/person.png" alt="图片">
    <input type="text" v-model="userName" :placeholder="preText">
  </div>
</template>

<script>
export default {
  name: "PasswordInput",
  props:["preText"],
  data:function (){
    return{
      userName:null
    }
  }
}
</script>

<style scoped>
.passwordInput{
  display: flex;
  justify-content: center;
}
.icon{
  align-items: center;
}
img{
  height: 50px;
  width: 50px;
}
input{
  height: 50px;
  width:100%;
  border: none;
  outline: none;
  background: #f6f6f6;
  font-size: 1em;
  padding-left: 10px;
}
userNameInput{
  display: flex;
  background-color:#f6f6f6;
  padding: 15px 10px;
  margin-top: 35px;
  border: 1px solid #DCDFE6;
  border-radius: 4px 4px 0 0;
}
</style>