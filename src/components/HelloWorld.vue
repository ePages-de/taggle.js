<template>
  <div class="hello">
    <VueTagCloud v-bind:data="tagData"></VueTagCloud>
    </div>
</template>

<script>
/* eslint-disable */
import VueTagCloud from 'vue-tag-cloud'

export default {
  name: 'HelloWorld',
  components: {
    VueTagCloud
  },

  data: function() {
    return {
      tagData: [
        { text: 'Lorem', weight: 15, link: 'https://google.com' },
        { text: 'Ipsum', weight: 9 },
        { text: 'Dolor', weight: 6 },
        { text: 'Sit', weight: 7 },
        { text: 'Amet', weight: 5 }
      ]
    }
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
