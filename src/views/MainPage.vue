<template>
  <div id="main-page">
    <left-box></left-box>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftBox from "@/components/mianPage/LeftBox";
export default {
  name: "ManagementPage",
  data:function (){
    return{
      msg:"aaaaa"
    }
  },
  components:{
    LeftBox
  }
}
</script>

<style scoped>
#main-page{
  display: flex;
  /*flex-direction: row;*/
}
</style>