<template>
  <div id="background" :style="'height:'+fullHeight+'px;'">
    <div class="loginPage">
      <div class="title">资源管理</div>
      <div class="mainSection">
        <div class="formSection">
          <LoginAndRegisterTitle :active-class="login"></LoginAndRegisterTitle>
          <div class="formContent">
            <UserNameInput :preText="UserPlaceholder"></UserNameInput>
            <password-input :preText="PassPlaceholder"></password-input>
            <div class="forgetSection">
              <div class="forget">忘记密码？</div>
            </div>
            <div class="toLogin">
              <button class="btn" @click="isLogin">登录</button>
              <button class="btn">注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import LoginAndRegisterTitle from "@/components/LoginAndRegister/LoginAndRegisterTitle";
import PasswordInput from "@/components/LoginAndRegister/PasswordInput";
import UserNameInput from "@/components/LoginAndRegister/UserNameInput";
export default {
  name: "Login",
  components: {PasswordInput, UserNameInput, LoginAndRegisterTitle},
  data:function (){
    return{
      login:true,
      UserPlaceholder:'用户账号',
      userLoginMessage:{
        account:null,
        password:null,
      },
      PassPlaceholder:'密码',
      passInput:'password',

      fullHeight:document.documentElement.clientHeight
    }
  },
  methods:{
    isLogin:function (){
      this.$router.push('/MainPage')
    },
    get_bodyHeight(){
      const that=this
      window.onresize=()=>{
        return(()=>{
          window.fullHeight=document.documentElement.clientHeight
          that.fullHeight=window.fullHeight
        })()
      }
    }
  },
  watch:{
    fullHeight(val){
      if(!this.timer){
        this.fullHeight=val
        this.timer=true
        let that=this
        setTimeout(function (){
          that.timer=false
        },400)
      }
    }
  },
  mounted() {
    this.get_bodyHeight()
  }
}
</script>

<style scoped>
.loginPage{
  display: flex;
  flex-direction: column;
  background: skyblue;
}
.title{
  font-size: 4em;
  font-weight: bold;
  color: #409eff;
  align-self: center;
}
.mainSection{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
}
.formSection{
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  padding: 50px 50px 30px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  background-color: #fff;
}
.forgetSection{
  display: flex;
  flex-direction: row-reverse;
  padding: 0.8em 0;
  color: #999;
}
.toLogin{
  display: flex;
  justify-content: space-around;
}
.btn{
  flex-grow: 1;
  /*margin-top: 15px;*/
  padding: 9px 18px;
  font-size: 1.2em;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  background-color:#70B6FF ;
}
</style>