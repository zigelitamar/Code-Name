<template>
  <div id="app">
     <router-view />
  </div>
</template>

<script>
// import fullGame from "./pages/fullGame.vue";
// import menu from "./pages/menu.vue";

export default {
  name: "App",
  // components: {
  //   fullGame,
  //   menu
  // },
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
