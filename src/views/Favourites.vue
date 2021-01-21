<template>
  <div class="home">
    <div id="app">
      <p class="text">☟ Favourites ☟</p>
      <JokeList :jokeList="jokesFavoritesFromApp"/>
    </div>
  </div>
</template>

<script>
import JokeList from '../components/JokeList';

export default {
  name: 'Home',
  components: {
    JokeList,
  },
  data() {
      return {
          jokes: [],
          amount: Number
      }
  },
  methods: {
      
  },
  props : ["jokesFavoritesFromApp"]
}
</script>

<style scoped>
 p{
   background: grey;
   color: black;
   height: 84px;
   cursor: default;
 }
 .text {
   text-align: center;
   padding-top: 15px;
   font-size: 60px;
 }

</style>
