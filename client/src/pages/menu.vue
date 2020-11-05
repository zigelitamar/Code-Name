<template>
  <div>
    <b-button @click="createGame">Create Game</b-button>
    <b-button @click="getGames">click me !!!!!!!</b-button>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(join)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          Join
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Test1",
      roomname: "",
      role: 0,
      fields: ["room_name", "players", "join"],
      items: [],
      isBusy: true,
    };
  },
  sockets: {
    message(rt) {
      console.log(rt);
    },
  },

  methods: {
    createRoom() {
      let username = this.username;
      let roomname = "shmooz";
      this.$socket.client.emit("createGame", { username, roomname });
    },
    joinRoom() {
      let username = this.username;
      let roomname = this.roomname;
      this.$socket.client.emit("joinGame", { username, roomname });
    },
    async getGames() {
      //const res = await this.axios.get(`https://localhost:3000/rooms/getGames`);
      this.isBusy = !this.isBusy;
      let gf = [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ];
      this.items.push(...gf);
    },
  },
};
</script>

<style></style>
