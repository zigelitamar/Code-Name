<template>
  <div>
    <b-input-group :prepend="username" class="mt-3">
      <b-form-input v-model="roomname"></b-form-input>
      <b-input-group-append>
        <b-button
          variant="outline-success"
          @click="createRoom"
          :disabled="roomname.length <= 0"
        >
          Create Room</b-button
        >
      </b-input-group-append>
    </b-input-group>
    <b-button @click="joinRoom">Join Game</b-button>

    <b-col>
      <b-row>
        <b-dropdown class="mr-sm-2" style="width: 65px" text="choose role">
          <b-dropdown-item @click="setRole(1)">guesser</b-dropdown-item>
          <b-dropdown-item @click="setRole(2)">passer</b-dropdown-item>
        </b-dropdown>
      </b-row>
      <br />
      <b-row>
        <router-link
          :to="{ name: 'fullGame', params: { rolePlayer: this.role } }"
        >
          <button>Start Game</button>
        </router-link>
      </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Test1",
      roomname: "",
      role: 0,
    };
  },
  sockets: {
    welcome2(rt) {
      console.log(rt);
    },
  },

  methods: {
    createRoom() {
      let username = this.username;
      let roomname = this.roomname;
      this.$socket.client.emit("joinGame", { username, roomname });
    },
    joinRoom() {
      let username = this.username;
      let roomname = this.roomname;
      this.$socket.client.emit("joinGame", { username, roomname });
    },
  },
};
</script>

<style></style>
