<template>
  <div id="app">
    <map-view />
  </div>
</template>

<script>
import MapView from './components/MapView.vue'


export default {
  name: 'app',
  components: {
    "map-view": MapView,
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
