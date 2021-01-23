<template>
  <div>
    <div v-bind:key="joke.id" v-for="joke in jokeList">
      <JokeListItem :jokeListItem="joke"/>
    </div>
    <footer>
      <!-- http://www.icndb.com/api/ -->
      <!-- https://developer.mozilla.org/de/docs/Web/HTML/Element/marquee
      "Es wird davon abgeraten, dieses Tag zu benutzen, da es das schlimmste ist, was Sie ihren Besuchern antun können."
      Ja das meinen wir ernst :)-->
      <marquee direction="right" scrollamount="7">
        <p class="footer">*** Thanks for the <a href="http://www.icndb.com/api/">API</a>: The Internet Chuck Norris Database ***</p>
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
    background-color: beige;
    border: black;
    font-weight: bolder;
    }

</style>