<template>
  <div id="app">
    Cantidad de visitas:
    {{ cantidadVisitas }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      cantidadVisitas: ''
    }
  },
  mounted () {
    fetch('http://localhost:3000/contador', { method: 'POST' })
      .then(r => r.json())
      .then(c => {
        this.cantidadVisitas = c.contador
      })
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
