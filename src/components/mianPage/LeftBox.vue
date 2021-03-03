<template>
  <div class="left-box">
    <div class="imgSection">
      <img src="../../assets/person.png">
    </div>
    <div class="btn-box">
      <el-button type="success" @click="toUserMassage">用户信息</el-button>
      <br>
      <el-button type="success" @click="toMainMassage">资源信息</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBox",
  data:function (){
    return{

    }
  },
  methods:{
    toUserMassage(){
      this.$router.push("/MainPage/UserMassageBox")
    },
    toMainMassage(){
      this.$router.push("/MainPage/MainBox")
    }
  }
}
</script>

<style scoped>
.left-box{
  background: rebeccapurple;
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
}
.imgSection{
  margin-top: 50px;
  margin-bottom: 50px;
  align-self: center;
}
img{
  width: 100px;
  height: 100px;
  border-radius: 25px;
}
.btn-box{
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
el-button{
  margin: 0;
}
</style>