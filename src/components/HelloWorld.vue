<template>
  <div class="hello">
    <h1>HELLO</h1>
     <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="count">
      </wordcloud>
      <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.message">
      {{error.message}}
    </li>
  </ul>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import wordcloud from 'vue-wordcloud'

export default {
  name: 'HelloWorld',
  components: {
    wordcloud
   },

  data: function() {
    return {
      defaultWords: [],
      errors: []
      }
  },

  created: function() {
     axios.get('https://taggle.beyondshop.cloud/api/product-view/products/search/find-available-tags')
    .then(response => {
      this.defaultWords = response.data.tags.map(x => {
        var tag = {}
        Object.keys(x).forEach(key => {
        tag.name = key
        tag.count = x[key]
          //tag.link = '#/tags?tag=' + key
        })
        return tag
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
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
