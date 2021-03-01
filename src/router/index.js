import { createRouter, createWebHistory } from 'vue-router'
import Project from '@/views/project';
import Member from '@/views/member';
import Company from '@/views/company';
import Layout from '@/Layout'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path:'project/:status',
        name:"Project",
        component:Project
      },{
        path:'member',
        name:'Member',
        component:Member
      },{
        path:'company',
        name:'Company',
        component:Company
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
