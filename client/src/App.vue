<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <fullGame msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import fullGame from "./pages/fullGame.vue";
import io from "socket.io-client";
export default {
  name: "App",
  components: {
    fullGame,
  },
  data() {
    return {
      connection: io("http://localhost:3000"),
    };
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
