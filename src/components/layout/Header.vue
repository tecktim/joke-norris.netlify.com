<template>
<div>
  <header class="header">
  <img class="left" src="../../assets/ChuckNorrisHeader.jpg"/>
  <img class="right" src="../../assets/ChuckNorrisHeader.jpg"/>
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

/**Die Routerfunktionen kommen aus diesem Tutorial:
	https://github.com/bradtraversy/vue_crash_todolist */

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
    transform: scaleX(-1);
  }

  .header a {
    color: white;
    font-size: 30px;
    height: 10%;
    width: 100%;
    
  }

  .header a:hover {
    color: #434a67;
  }

  .header img {
    width: auto;
    height: 100%;
    cursor: progress;
    transition: all 2s ease-in-out;
  }

/** Transition effect from: https://css-tricks.com/snippets/css/scale-on-hover-with-webkit-transition/ */

  .header img:hover {
    /*transform: scale(10);
    position: absolute;*/
    -webkit-filter: invert(1);
    filter: invert(1);
  }

  h1 {
    font-weight: bold;
    font-size: 400%;
    cursor: default;
    padding: 20px; 

  }

  h2 {
    font-weight: bold;
    font-size: 200%;
    cursor: default;
  }
  
  nav{
    align-content: center;
  }
  
</style>