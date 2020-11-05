<template>
  <div class="grid">
    <b-button @click="click">Cliclme!</b-button>
    <div v-if="role == 1">dddddddddd</div>

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
      role: 0,
      tickets: [],
    };
  },
  async created() {
    this.role = this.$route.params.rolePlayer;

    //  let toShow= false;
    //   if(this.role==2){
    //     toShow=true;
    //   }
    //   console.log(res);
    //   for (const key in res.data) {
    //     let element = res.data[key];
    //     let obj = {};
    //     obj.text = key;
    //     obj.sign = element;
    //     obj.toShow= toShow;
    //     this.tickets.push(obj);
    //   }
    //   console.log(this.tickets);
  },
  computed: {},
  sockets: {
    welcome2(rt) {
      console.log(rt);
    },
  },
  methods: {
    setRole(roleNumber) {
      this.role = roleNumber;
    },
    click() {
      this.$socket.client.emit("response2");
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-gap: 1em;
}
</style>
