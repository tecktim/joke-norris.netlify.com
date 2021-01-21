<template>
<div>
  <header class="header">
  <img class="left" src="../../assets/ChuckNorrisHeaderLeft.jpg"/>
  <img class="right" src="../../assets/ChuckNorrisHeaderRight.jpg"/>
    <h1>Chuck Norris Jokes</h1>
    <div id="nav">
      <h2>
      <router-link to="./">Home</router-link> | 
      <router-link to="favourites">Favourites</router-link>
      </h2>
    </div>
  </header>
</div>
</template>

/** Chuck Norris Picture: https://www.nordbayern.de/panorama/karate-weltmeister-und-kult-star-chuck-norris-wird-80-1.9906391  */

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: black;
    color: white;
    text-align: center;
    height: 150px;
  }
   
  .left {
    float: left;

  }

  .right{
    float: right;
  }

  .header a {
    color: white;
    font-size: 30px;
    height: 10%;
    width: 100%;
  }

  .header img {
    width: 6%;
    height: 100%;
    cursor: progress;
    transition: all 2s ease-in-out;
  }

/** Transition effect from: https://css-tricks.com/snippets/css/scale-on-hover-with-webkit-transition/ */

  .header img:hover {
    /*transform: scale(10);
    position: absolute;*/
    -webkit-filter: invert(1);
    filter:invert(1);
  }

  h1 {
    font-weight: bold;
    font-size: 50px;
    cursor: default;
    padding: 20px; 
  }

  h2 {
    font-weight: bold;
    font-size: 20px;
    cursor: default;
  }
</style>