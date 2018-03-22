<template>
    <!-- You should explicitly specify the dimensions of the container element -->
    <div id="product">
      <link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet" />
      <div id="content">
        <div id="imagecontainer">
          <img :src="product.defaultImageUri">
        </div>
        <div id="details">
          <h1>{{product.name}}</h1>
          <div id="sku">Product Number: {{product.sku}}</div>
          <div id="price">
            <span class="currency">&pound;</span>
            <span class="amount">{{product.salesPrice.amount | formatNumber}}</span>
          </div>
          <div id="description">{{product.description}}</div>
          <div id="tags">
            <ul>
              <li v-for="tag in product.linkedTags" :key="tag.name">
                <a :href="tag.href">{{tag.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import uriTemplates from 'uri-templates'
import numeral from 'numeral'

export default {
  name: 'ProductDetails',

  data: function() {
    return {
      product: { "salesPrice" : { "amount" : 0, "currency" : "GBP" }},
      errors: []
    }
  },

  computed: {
    shop: function() { return this.$route.params.shop },
    id: function() { return this.$route.params.id }
  },

  filters: {
    formatNumber: function (value) {
      return numeral(value).format('0,0.00')
    }
  },

  methods: {
    fetchProductById: async function(shop, id) {
      var api = 'https://' + shop + '.beyondshop.cloud/api/product-view/products/' + id
      axios.get(api)
      .then(response => {
        this.product = response.data
        var imageDataLink = this.product._links['default-image-data']
        this.product.defaultImageUri = imageDataLink
          ? uriTemplates(imageDataLink.href).fill({width: 800, height: 400})
          : 'https://dummyimage.com/800x400/dedede/0011ff.png&text=no+image'
        this.product.linkedTags = []
        this.product.tags.forEach(tag => {
          var linkedTag = {}
          linkedTag.name = tag
          linkedTag.count = -1
          linkedTag.href = '#/' + shop + '/products/' + tag
          this.product.linkedTags.push(linkedTag)
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  
  created: function() { this.fetchProductById(this.shop, this.id) }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: 'Maven Pro', sans-serif;
  font-size: 14px;
  line-height: normal;
  background-color: #eee;
  padding: 0 30px;
  margin: 0;
}
#content {
    background-color: #fff;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    max-width: 1000px;
    box-shadow: 2px 0px 10px #ccc;
    text-align:left;
}
#imagecontainer {flex-basis: 100%; padding: 0; margin: 0 20px 0 0;}
#imagecontainer img {width: 100%;}
h1 {
  margin:0;
  font-size: 2em;
}
#sku {
  color: #999;
}
#price {
  font-size: 2em;
  font-weight: bold;
  margin: 30px 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0;
  padding: 0;
  display: inline;
}
li a {
  display: inline-block;
  border-radius: 7px;
  background-color: #ccc;
  padding: 0px 10px;
  color: #3d3d3d;
  text-decoration: none;
  text-shadow: -1px -1px #eee;
  line-height: 30px;
  margin: 0 5px 5px 0;
}

@media (max-width:767px)
{
  body {padding: 0 2%;}
  #content {display: block; padding:10px;}
  #imagecontainer {width: 100%;}
}
</style>
