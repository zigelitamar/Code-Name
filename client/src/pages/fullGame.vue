<template>
  <div class="grid">
    <div v-if="role==1"> dddddddddd </div>

    <b-row cols="5">
      <b-col v-for="t in tickets" :key="t.id">
        <gameCard :ticket="t" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import gameCard from "../components/gameCard";
// import io from "vue-socket.io";
export default {
  components: {
    gameCard,
  },
  props: {
    rolePlayer: {
      type: Number,
    },
  },
  data() {
    return {
      role:0,
      tickets: [],
    };
  },
  async created() {
    this.role= this.$route.params.rolePlayer;
    const res = await this.axios.get("http://localhost:3000/board/newBoard", {
      withCredentials: true,
    });

   let toShow= false;
    if(this.role==2){
      toShow=true;
    }
    console.log(res);
    for (const key in res.data) {
      let element = res.data[key];
      let obj = {};
      obj.text = key;
      obj.sign = element;
      obj.toShow= toShow;
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
