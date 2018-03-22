<template>
    <!-- You should explicitly specify the dimensions of the container element -->
    <div id="product">
      <link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet" />
      <div id="content">
        <div id="imagecontainer">
          <img src="https://taggle.beyondshop.cloud/api/core-storage/images/ektorp-two-seat-sofa-nordvalla-dark-grey__0386583_pe559163_s4.jpg?hash=a43fafa267094419bd8f8da2ae582aefc7b01f1a&amp;width=500&amp;height=500" />
        </div>
        <div id="details">
          <h1>EKTORP Nordvalla dark grey</h1>
          <div id="sku">Product Number: 1007</div>
          <div id="price">&pound;295.00</div>
          <div id="description">Get cosy with someone on a two-seater sofa, or take up some space and snuggle in all by yourself. Two-seater sofas are a great way to add comfy seating to a smaller space, or to compliment a larger sofa in the room. Browse our wide selection of styles and colours to find one that's right for you. Still can't find what you're looking for? Check our complete range of sofas.</div>
          <div id="tags">
            <ul>
              <li><a href="#">affordable</a></li><li><a href="#">dark grey</a></li><li><a href="#">removable cover</a></li><li><a href="#">sitting</a></li><li><a href="#">snuggle</a></li><li><a href="#">soft</a></li><li><a href="#">two-seater</a></li>
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

export default {
  name: 'ProductDetails',

  data: function() {
    return {
      product: {},
      errors: []
    }
  },

  computed: {
    shop: function() { return this.$route.params.shop },
    id: function() { return this.$route.params.id }
  },

  methods: {
    fetchProductById: async function(shop, id) {
      var api = 'https://' + shop + '.beyondshop.cloud/api/product-view/products/' + id
      console.log(api)
      axios.get(api)
      .then(response => {
        console.log(response.data)
        this.product = response.data
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
