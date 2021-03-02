<template>
  <div class="card">
     <div class="machine-info">
         <div class="machine-name">{{project.name}}</div>
         <div class="project-info">
           
         </div>
     </div>
     <div class="project-info"></div>
     <div class="action"></div>
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
            font-size: 18px;
            color: #414A60;
        }
    }
}
</style>