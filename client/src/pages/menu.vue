<template>
  <div>
    <b-col>
      <b-row>
        <b-dropdown class="mr-sm-2" style="width:65px;" text="choose role">
          <b-dropdown-item @click="setRole(1)">guesser</b-dropdown-item>
          <b-dropdown-item @click="setRole(2)">passer</b-dropdown-item>
        </b-dropdown>
      </b-row>
      <br />
      <b-row>
        <router-link :to="{ name: 'fullGame', params: {rolePlayer: this.role} }">
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
            role:0
        }
    },
    methods:{
        setRole(roleNumber){
            this.role=roleNumber;
        }
    }
};
</script>

<style></style>
