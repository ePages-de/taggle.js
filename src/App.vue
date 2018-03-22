<template>
  <div id="app">
    <a :href="tagsUri"><img src="./assets/vue.png" width="150"></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    tagsUri: function () { return this.$route.params.shop ? '/#/' + this.$route.params.shop : '/#/taggle' }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
