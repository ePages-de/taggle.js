import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tags from '@/components/Tags'
import ProductList from '@/components/ProductList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/:shop',
      name: 'Tags',
      props: true,
      component: Tags
    }, {
      path: '/:shop/products/:tag',
      name: 'ProductList',
      props: true,
      component: ProductList
    }
  ]
})
