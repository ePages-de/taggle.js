<template>
  <div class="products">
    <div v-if="products && products.length">
      <h2>{{products.length}} products for tag <q class="tag">{{tag}}</q></h2>
      <ul>
        <li class="product" v-for="product of products" v-bind:key="product._id">
          <a :href="product.detailsUri">
            <p><strong>{{product.name}}</strong></p>
            <p v-if="product.defaultImageUri">
              <img :src="product.defaultImageUri" :alt="product.name"/>
            </p>
          </a>
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
  name: 'ProductList',

  data: function() {
    return {
      products: [],
      errors: []
    }
  },

  computed: {
    shop: function() { return this.$route.params.shop },
    tag: function() { return this.$route.params.tag }    
  },

  methods: {
    fetchProductsByTag: async function(shop, tag) {
      var api = 'https://' + shop + '.beyondshop.cloud/api/product-view/products/search/find-by-tags?size=100&tag=' + tag
      axios.get(api)
      .then(response => {
        this.products = response.data._embedded.products
        this.products.forEach((element, index, array) => {
          array[index].detailsUri = '/#/' + shop + '/product/' + element._id
          var imageDataLink = element._links['default-image-data']
          if (imageDataLink) {
            array[index].defaultImageUri = uriTemplates(imageDataLink.href).fill({width: 300, height: 150})
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
  
  created: function() { this.fetchProductsByTag(this.shop, this.tag) }
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
q.tag {
  quotes: "«" "»" "‹" "›";
}
</style>
