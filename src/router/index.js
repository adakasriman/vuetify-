import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Dashboard.vue'
import ProjectsView from '../views/Projects.vue'
import TeamView from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    component: ProjectsView

  },
  {
    path: '/team',
    component: TeamView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
