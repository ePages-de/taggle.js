import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tags from '@/components/Tags'
import ProductList from '@/components/ProductList'
import ProductDetails from '@/components/ProductDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }, {
      path: '/:shop/product/:id',
      name: 'ProductDetails',
      props: true,
      component: ProductDetails
    }
  ]
})
