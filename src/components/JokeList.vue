<template>
  <div>
    <div v-bind:key="joke.id" v-for="joke in jokeList">
      <JokeListItem :jokeListItem="joke"/>
    </div>
    <footer>
      <marquee direction="right">
        <p class="footer">Thanks for the <a href="http://www.icndb.com/api/">API</a></p>
      </marquee>
    </footer>
  </div>
</template>

<script>
import JokeListItem from './JokeListItem';

export default {
  name: "JokeList",
  components: {
    JokeListItem
  },
  props: ["jokeList"]
}
</script>

<style scoped>
  footer {
    position: fixed;
    height: 2%;
    width: 100%;
    bottom: 0;
    text-align: center;
    background-color: white;
    border: black;
    margin: 1px;
  }

</style>