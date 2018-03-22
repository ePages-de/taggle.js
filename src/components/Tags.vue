<template>
  <div class="hello">
    <div v-if="tags && tags.length">
      <wordcloud
        :data='defaultWords'
        :rotate="{from: -0, to: 0, numOfOrientation: 0 }"
        :fontSize="[30, 100]"
        nameKey='name'
        valueKey='count'
        :wordClick=goToProduct
        ></wordcloud>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import wordcloud from 'vue-wordcloud'

export default {
  name: 'Tags',

  components: {
    wordcloud
   },

  data: function() {
    return {
      tags: [],
      errors: [],
      defaultWords: []
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
        this.defaultWords = this.tags
      })  
      .catch(e => {
        this.errors.push(e)
      })
    },

    goToProduct: function(text, wc) {
      this.$router.push({ path: '/' + this.shop + '/products/' + text })
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
