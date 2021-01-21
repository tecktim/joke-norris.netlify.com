<template>
  <div>
    <div v-bind:key="joke.id" v-for="joke in jokeList">
      <JokeListItem :jokeListItem="joke"/>
    </div>
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

</style>