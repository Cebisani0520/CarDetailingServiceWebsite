<template>
  <div id="app">
    <h1>Car Detailing</h1>
    <Residential />
  </div>
</template>

<script>
import Residential from './components/Residential.vue';

export default {
  name: 'App',
  components: {
    Residential

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
