<template>
  <div class="hello">
    <div v-if="tags && tags.length">
      <h2>Tags ({{tags.length}})</h2>
      <ul>
        <li class="tag" v-for="tag of tags" v-bind:key="tag.name">
          <p><strong><a :href="tag.href">{{tag.name}}</a></strong> ({{tag.count}})</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'Tags',

  data: function() {
    return {
      tags: [],
      errors: []
    }
  },
  
  computed: {
    shop: function() { return this.$route.params.shop }
  },

  methods: {
    fetchTags: async function(shop) {
      var api = 'https://' + shop + '.beyondshop.cloud/api/product-view/products/search/find-available-tags'
      axios.get(api)
      .then(response => {
        this.tags = response.data.tags.map(x => {
          var tag = {}
          Object.keys(x).forEach(key => {
            tag.name = key
            tag.count = x[key]
            tag.href = '#/' + shop + '/products/' + key
          })
          return tag
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },

  created: function() { this.fetchTags(this.shop) }
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
a {
  color: #42b983;
}
</style>
