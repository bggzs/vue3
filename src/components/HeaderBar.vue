<template>
  <div class="header-bar">
      <div class="label">项目名称</div>
      <div class="user-name">{{userInfo.name}}</div>
      <img class="user-avatar" :src="userInfo.avatar" alt="">
  </div>
</template>

<script>
export default {
  name: '',
components:{},
props:{
    userInfo:Object
},
setup(props){
    console.log('props :>> ', props.userInfo.name);
},
  data () {
   return {
   }
  },
  methods:{
  }
}
</script>

<style lang='less' scoped>
    .header-bar{
        padding: 0 40px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 0px 32px 0px rgba(169, 169, 169, 0.2);
        .user-name{
            flex: auto;
            text-align: right;
            margin-right: 14px;
            color: #414A60;
            font-size: 14px;
        }
        .user-avatar{
            display: block;
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }
    }
</style>