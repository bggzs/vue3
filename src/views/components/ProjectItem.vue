<template>
  <div class="card">
     <div class="machine-info">
         <div class="machine-name">{{project.name}}</div>
         <div class="project-info">
           <div class="company">{{project.company}}</div>
           <div class="floor">{{project.floor}}</div>
           <div class="machine-code">{{project.machineCode}}</div>
         </div>
     </div>
     <div class="number"></div>
     <div class="action">
       <div class="edit">编辑</div>
       <div class="delete">删除</div>
     </div>
  </div>
</template>

<script>
export default {
  name: '',
components:{},
  data () {
   return {
   }
  },
  props:{
      project:Object
  },
  methods:{
  }
}
</script>

<style lang='less' scoped>
.card{
    background: #ffffff;
    height: 118px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 32px 0px rgba(169, 169, 169, 0.2);
    .machine-info{
        .machine-name{
          text-align: left;
            font-size: 18px;
            color: #414A60;
        }
    }
    .project-info{
      margin-top: 25px;
      font-size: 14px;
      .company{
        display: inline;
        margin-right: 15px;
        position: relative;
        color: #9FA3B0;
      }
      .company:after{
        margin-left: 15px;
        content: "";
        width: 2px;
        background: #e0e0e0;
        height: 80%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .floor{
        margin:0 15px;
        display: inline;
        position: relative;
        color: #9FA3B0;
      }
      .floor:after{
        margin-left: 15px;
        content: "";
        width: 2px;
        height: 80%;
        position: absolute;
        background: #e0e0e0;
        top: 50%;
        transform: translateY(-50%);
      }
      .machine-code{
        margin-left: 15px;
        display: inline;
        color: #9FA3B0;
      }
    }
    .number{
      flex: auto;
    }
    .action{
      font-size: 14px;
      .edit{
        cursor: pointer;
        color: #1890FF;
        display: inline;
        margin-right: 30px;
      }
      .delete{
        cursor: pointer;
        display: inline;
        color: #E64340;
      }
    }
}
</style>