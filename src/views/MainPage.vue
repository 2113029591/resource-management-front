<template>
  <div id="main-page" :style="'height:'+fullHeight+'px;'">
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
      msg:"aaaaa",
      fullHeight:document.documentElement.clientHeight
    }
  },
  components:{
    LeftBox
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
  },
  methods:{
    get_bodyHeight(){
      const that=this
      window.onresize=()=>{
        return(()=>{
          window.fullHeight=document.documentElement.clientHeight
          that.fullHeight=window.fullHeight
        })()
      }
    }
  }
}
</script>

<style scoped>
#main-page{
  display: flex;
  /*flex-direction: row;*/
}
router-view{
}
</style>