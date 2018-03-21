<template>
  <div class="hello">
    <h1>Tags</h1>
    <ul v-if="tags && tags.length">
      <li v-for="tag of tags" v-bind:key="tag.name">
        <p><strong>{{tag.name}}</strong> ({{tag.count}})</p>
      </li>
    </ul>

    <h1>Products</h1>
    <ul v-if="products && products.length">
      <li v-for="product of products" v-bind:key="product._id">
        <p><strong>{{product.name}}</strong></p>
        <p>{{product.sku}}</p>
        <p v-if="product.defaultImageUri">
          <img :src="product.defaultImageUri" :alt="product.name"/>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import uriTemplates from 'uri-templates'
export default {
  name: 'HelloWorld',
  data () {
    return {
      products: [],
      tags: [],
      errors: []
    }
  },
  created () {
    // retrieve tags
    axios.get('https://taggle.beyondshop.cloud/api/product-view/products/search/find-available-tags')
    .then(response => {
      this.tags = response.data.tags.map(x => {
        var tag = {}
        Object.keys(x).forEach(key => {
          tag.name = key
          tag.count = x[key]
        })
        return tag
      })
    })
    .catch(e => {
      this.errors.push(e)
    })

    // retrieve products
    axios.get('https://taggle.beyondshop.cloud/api/product-view/products/search/find-by-tags?tags=accessories&size=100')
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
