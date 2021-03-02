<template>
  <div class="project">
    <div class="card" v-for="project in projects" :key="project.id">
      <project-item :project="project"></project-item>
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/views/components/ProjectItem';
import { ref,onMounted } from "vue";
export default {
  setup(props) {
    let projects = ref([]);
    const getProjects = () => {
      console.log('props.status :>> ', props.status);
      let project={
        id:Date.parse(new Date()),
        name:'测试项目',
        company:'一分厂',
        floor:'前道',
        machineCode:"115"
      }
      for(let i =0 ;i<15;i++){
        projects.value.push(project)
      }
    }
    onMounted(getProjects)
    return {
      projects,
      getProjects
    };
  },
  props: {
    status: Number,
  },
  name: "",
  components: {
    ProjectItem
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.project {
  padding: 0 20px;
  .card{
    margin-bottom: 10px;
  }
}
</style>