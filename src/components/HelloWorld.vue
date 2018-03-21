<template>
  <div class="hello">
    <h1>Products</h1>

    <ul v-if="products && products.length">
      <li v-for="product of products" v-bind:key="product._id">
        <p><strong>{{product.name}}</strong></p>
        <p>{{product.sku}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      products: [],
      errors: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },

  created () {
    axios.get('https://taggle.beyondshop.cloud/api/product-view/products/search/find-by-tags?tag=kitchen')
    .then(response => {
      console.log(response.data._embedded.products)
      this.products = response.data._embedded.products
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
