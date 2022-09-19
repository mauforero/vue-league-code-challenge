<template>
  <div class="grid grid-flow-row sm:grid-flow-col gap-4 max-w-md">
    <input type="text" name="newPlayer" id="newPlayer" v-model="newPlayer" placeholder="Player Name">
    <input type="button" value="Add Player" @click="addPlayer" :disabled="newPlayer.length === 0 || repeatedIndex >= 0">
  </div>
  <div v-if="this.players.length">
    <ul class="grid grid-flow-row">
      <li v-for="(player, index) in players" :key="index">
        {{player}}
        <span v-if="repeatedIndex == index">(ya existe)</span>
        <button @click="removePlayer(index)">Remove Player</button>
      </li>
    </ul>
  </div>
  <button>{{startButtonMessage}}</button>
</template>

<script>
export default {
  name: 'RegisterPlayers',
  data() {
    return {
      players: [],
      newPlayer: "",
    }
  },
  computed: {
    startButtonMessage() {
      if (this.players.length <= 1) {
        return "Continue alone";
      } else {
        return this.players.length > 2 ?
          `Continue with ${this.players.length - 1} friends` :
          "Continue with 1 friend"
      }
    },
    repeatedIndex() {
      return this.players.indexOf(this.newPlayer.replace(/^\s+|\s+$|\s+(?=\s)/g, ""));
    }
  },
  methods: {
    addPlayer: function() {
      if(this.newPlayer.length) {
        const player = this.newPlayer.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
        this.players.push(player);
        this.newPlayer = "";
      }
    },
    removePlayer: function(index) {
      this.players.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
