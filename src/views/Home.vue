<template>
  <div class="home">
    <div id="app">
      <ReloadJoke v-on:reload-Jokes="reloadJokes"/>
      <JokeList :jokeList="jokesAPIFromApp"/>
    </div>
  </div>
</template>

<script>
import JokeList from '../components/JokeList';
import ReloadJoke from '../components/ReloadJoke';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    JokeList,
    ReloadJoke,
  },
  data() {
      return {
          jokes: [ 
            {
              id: Number,
              joke: String,
              categorie: String,
              saved: Boolean
            }
          ],
          amount: Number
      }
  },
  methods: {
      reloadJokes(amount) {
        this.amount = amount;
        /*Displaying data from an API
        * https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html*/
        axios.get('https://api.icndb.com/jokes/random/' + this.amount + '?escape=javascript').then(response => {
            this.jokes = response.data.value;
            
            for(let i=0;i<this.jokes.length; i++) {
              this.jokes[i].saved = false;
            }
            this.$emit("load-data",this.jokes);
          })
      }
  },
  props : ["jokesAPIFromApp"]
}
</script>

<style>
</style>
