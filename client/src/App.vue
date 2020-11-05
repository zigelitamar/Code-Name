<template>
  <div id="app">
    <router-view />
    <b-button @click="click">Clicl me!</b-button>
  </div>
</template>

<script>
export default {
  name: "App",
  sockets: {
    connect() {
      console.log("socket connected");
    },
  },
  methods: {
    click() {
      this.$socket.client.emit("response");
    },
  },
};
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
