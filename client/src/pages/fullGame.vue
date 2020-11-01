<template>
  <div class="grid">
    <div v-for="t in tickets" :key="t.id">
      <gameCard :ticket="t" />
    </div>
  </div>
</template>

<script>
import gameCard from "../components/gameCard";
// import io from "vue-socket.io";
export default {
  components: {
    gameCard,
  },
  data() {
    return {
      tickets: [],
    };
  },
  async created() {
    const res = await this.axios.get("http://localhost:3000/board/newBoard", {
      withCredentials: true,
    });

    console.log(res);
    for (const key in res.data) {
      let element = res.data[key];
      let obj = {};
      obj.text = key;
      obj.sign = element;
      this.tickets.push(obj);
    }
    console.log(this.tickets);
  },
  computed: {},
};
</script>

<style>
.grid {
  display: grid;
  grid-gap: 1em;
}
</style>