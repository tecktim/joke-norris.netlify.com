<template>
  <div class="userInput">
    <div class="tooltip">
      <input id="inputField" type="input" class="text" v-model="amount">
      <div class="tooltiptext">Insert how many creative jokes you want to be generated</div>
    </div>
      <button id="reloadButton" type="reload" class="btn" value="Generate new Jokes" @click="reloadJokes">Generate new Jokes</button>
   </div>
   
</template>

/* tooltip von https://stackoverflow.com/questions/19480010/adding-a-tooltip-to-an-input-box */

<script>
// import uuid from 'uuid';
export default {
  name: "ReloadJoke",
  data() {
    return {
      amount: 1
    } 
  },
  methods: {
    reloadJoke() {

    },
    reloadJokes() {
      this.$emit("reload-Jokes", this.amount);
    }
  },
}
</script>

<style scoped>

.text{
  width: 99.56%;
  height: 50px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 30px;
  background-color: grey;
  } 
.btn{
  width: 100%;
  height: 50px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 30px;
  background-color: grey;
  }
.tooltip {
    display: inline-block;    
    width: 100%;
}
.tooltip .tooltiptext {
    margin-left: 53%;
    width : 250px;
    visibility: hidden;
    background-color: white;
    border-radius:4px;
    border: 1px solid black;
    position: absolute;
    z-index: 1;
    padding: 5px;
    margin-top : -50px; 
    opacity: 0;
    transition: opacity 1s;
    font-size: 15px;
    cursor: help;
}
.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;  
    margin-top: -10px;
    margin-left: -224px;
    border-width: 5px;
    border-style: solid;
    border-width: 10px;
    border-color: transparent white transparent transparent;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

</style>