<template>
  <div id="app">
    <div id="topbar"><a :href="tagsUri"><img src="./assets/vue.png"></a></div>
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
body {
  background-color: #eee;
  padding: 0 30px;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
#topbar {
  background-color: #fff;
  box-shadow: 0 0 5px #666;
  margin: 0 -30px 30px;
  text-align: left;
  padding: 0 30px;
}
#topbar img {
  width:50px;
}
@media (max-width:767px)
{
  body {padding: 0 2%;}
}
</style>
