<template>
  <div class="hello">
     I want to check out taggle for my shop with the domain<br>
     <span>https://</span><input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
        v-model="shopname"
        value="shopname"
        v-on:keyup.enter="goToUrl"
        autofocus
        ><span>.beyondshop.cloud</span>
     <p>To see the magik press #Enter</p>
    </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Home',
  data: function() {
    
    return {
      shopname: 'taggle'
    }
  },
  
  methods: { 
    goToUrl: function() {
      this.$router.push({ path: '/' + this.shopname })
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
input {
  width: 500px;
  height: 50px;
  text-align: center;
  font-size: 150%;
  margin-top: 20px;
}
.hello span {
  font-size: 150%;
}
</style>
