<template>
  <div class="hello">
     <wordcloud
      :data='defaultWords'
      :wordPadding='40'
      :rotate="{from: -0, to: 0, numOfOrientation: 0 }"
      :fontSize="[30, 100]"
      spiral='archimedean'
      nameKey='name'
      valueKey='count'
      :wordClick=MyConsole>
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
  methods: {
    MyConsole: function() {console.log('Test')}
  },
  created: function() {
     axios.get('https://taggle.beyondshop.cloud/api/product-view/products/search/find-available-tags')
    .then(response => {
      this.defaultWords = response.data.tags.map(x => {
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
