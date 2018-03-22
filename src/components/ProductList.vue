<template>
  <div class="products">
    <div v-if="products && products.length">
      <h2>Products ({{products.length}})</h2>
      <ul>
        <li class="product" v-for="product of products" v-bind:key="product._id">
          <p><strong>{{product.name}}</strong></p>
          <p v-if="product.defaultImageUri">
            <img :src="product.defaultImageUri" :alt="product.name"/>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import uriTemplates from 'uri-templates'

export default {
  name: 'HelloWorld',

  data: function() {
    return {
      products: [],
      errors: []
    }
  },

  computed: {
    tag: function() { return this.$route.params.tag }
  },

  methods: {
    fetchProducts: async function() {
      var api = 'https://taggle.beyondshop.cloud/api/product-view/products/search/find-by-tags?size=100&tag=' + this.tag
      console.log(api)
      axios.get(api)
      .then(response => {
        this.products = response.data._embedded.products
        this.products.forEach((element, index, array) => {
          var imageData = element._links['default-image-data']
          if (imageData) {
            var uri = uriTemplates(imageData.href).fill({width: 300, height: 150})
            array[index].defaultImageUri = uriTemplates(imageData.href).fill({width: 300, height: 150})
          } else {
            array[index].defaultImageUri = 'https://dummyimage.com/300x150/dedede/0011ff.png&text=no+image'
          }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  
  created: function() { this.fetchProducts() }
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
  margin: 10px;
}
li.product {
  list-style-position: inside;
  border: 1px solid black;
  padding: 5px;
  width: 300px;
}
a {
  color: #42b983;
}
</style>
