import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/Cards'
import Card from '@/components/EditCard'
import AddCard from '@/components/AddCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/',
      name: 'home',
      component: Cards
    },
    {
      path: '/card/:id',
      name: 'card',
      props: true,
      component: Card
    },
    {
      path: '/addcard',
      name: 'addcard',
      component: AddCard
    }
  ],
  mode: "history"
})
