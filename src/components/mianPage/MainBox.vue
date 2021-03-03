<template>
  <div class="mainSection">
    <form v-show="isShow">
      <input type="text" placeholder="请输入序号" v-model="person.id">
      <input type="text" placeholder="请输入分数" v-model="person.name">
      <input type="text" placeholder="请输入成绩" v-model="person.score">
      <input type="submit" value="增加记录" @click.prevent="add">
      <input type="submit" value="查询" @click.prevent="query">
    </form>
    <table class="recordSection">
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>分数</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="(person,index) in persons" :key="person.id">
        <td><input type="text" v-model="person.id" :disabled="person.isDisabled" @keyup.enter="edit(index)"></td>
        <td><input type="text" v-model="person.name" :disabled="person.isDisabled" @keyup.enter="edit(index)"></td>
        <td><input type="text" v-model="person.score" :disabled="person.isDisabled" @keyup.enter="edit(index)"></td>
        <td><input type="text" :value="person.time | dataFormat" disabled></td>
        <td>
          <a href="#" @click.prevent="edit(index)">编辑</a>
          <a href="#" @click.prevent="del(index)">删除</a>
          <br>
          <a href="#" @click.prevent="toggle">更多操作</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MainBox",
  data:function (){
    return{
      isShow:false,
      persons:[
        {
          id:1,
          name:"zs",
          score:"99",
          time:Date.now(),
          isDisabled:true,
        },
        {
          id:2,
          name:"zs",
          score:"99",
          time:Date.now(),
          isDisabled:true,
        },
        {
          id:3,
          name:"zs",
          score:"99",
          time:Date.now(),
          isDisabled:true,
        },
        {
          id:4,
          name:"zs",
          score:"88",
          time:Date.now(),
          isDisabled:true,
        },
      ],
      person:{
        id:"",
        name:"",
        score:"",
        isDisabled:true,
      }
    }
  },
  methods:{
    edit(index){
      this.persons[index].isDisabled=!this.persons[index].isDisabled
    },
    toggle(){
      this.isShow=!this.isShow
    },
    del(index){
      this.persons.splice(index,1);
    },
    add(){
      this.person.time=Date.now()
      this.persons.push(this.person);
      this.person={
        id:"",
        name:"",
        score:"",
        isDisabled:true,
      }
    },
  }
}
</script>

<style scoped>
.mainSection{
  margin: 50px auto;
}
table{
  border: 1px;
}
input{
  height:30px;
  text-align: center;
}
</style>