import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PlayerView from '../views/PlayerView.vue'
import CharacterView from '../views/CharacterView.vue'
import ErrorDisplay from '../views/ErrorDisplay.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'player',
    component: PlayerView
  },
  {
    path: '/Character',
    name: 'Character',
    component: CharacterView
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    component: ErrorDisplay,
    props: true
  },
  {
    path: '/404',
    name: '404',
    component: ErrorDisplay
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
