<template>
  <div class="flex flex-col flex-nowrap m-8 p-8 bg-gray-800 text-white border border-solid border-gray-500 rounded-lg">
    <h1 class="block text-blue-400 text-3xl font-bold">Register Players</h1>
    <p class="mt-2">Who is going to play?</p>

    <form class="flex flex-row flex-nowrap mt-8" @submit.prevent>
      <input 
        class="min-w-[400px] py-2 px-4 bg-gray-900 border border-solid border-gray-200 rounded-md outline-0 transition hover:border-purple-400 focus:border-purple-400"
        type="text" 
        name="newPlayer" 
        id="newPlayer" 
        v-model="newPlayer" 
        placeholder="Player Name" />
      <button
        class="button flex-shrink-0 ml-2 bg-purple-400 hover:bg-purple-300 active:bg-purple-500"
        @click="addPlayer" 
        :disabled="newPlayer.length === 0 || repeatedIndex >= 0">
        <span class="sr-only">Add Player</span>
        <FaIcon :icons="['user-check']" />
      </button>
    </form>

    <div class="my-4">
      <ul v-if="this.players.length">
        <li class="flex flex-row flex-nowrap justify-between p-2 rounded-md transition ease-ease duration-150 hover:bg-white/5" :class="{ 'bg-orange-400 hover:bg-orange-400 text-gray-900': repeatedIndex == index }" v-for="(player, index) in players" :key="index">
          {{player}}
          <button class="button bg-red-400 py-1 px-2 text-sm hover:bg-red-300 active:bg-red-500" @click="removePlayer(index)">
            <span class="sr-only">Remove Player</span>
            <FaIcon :icons="['user-xmark']" />
          </button>
        </li>
      </ul>
    </div>

    <button class="button p-4 bg-green-400 text-xl hover:bg-green-300">
      {{startButtonMessage}}
      <FaIcon class="ml-4" :icons="['arrow-right']" />
    </button>
  </div>
</template>

<script>
import FaIcon from "./FaIcon.vue"

export default {
  name: 'RegisterPlayers',
  components: {
    FaIcon,
  },
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

