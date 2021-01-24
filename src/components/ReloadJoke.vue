<template>
  <div class="userInput">
    <div class="tooltip">
      <input id="inputField" type="input" class="text" v-model="amount">
      <div class="tooltiptext">Insert how many creative jokes you want to be generated</div>
    </div>
      <button id="reloadButton" type="reload" class="btn" value="Generate new Jokes" @click="reloadJokes">Generate new Jokes</button>
   </div>
   
</template>

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
    reloadJokes() {
      if(isNaN(this.amount)) {
        //input validation
        alert("Even Chuck Norris is not able to count letters (please insert a number)");
        this.amount = 1;
      }else if(this.amount > 574){
        //max number of jokes is 574
        alert("Even Chuck Norris can not print more than 574 Jokes on this page");
        this.amount = 1; 
      }else{
        this.$emit("reload-Jokes", this.amount);
      }
    },
    }
  }
</script>
/* tooltip von https://stackoverflow.com/questions/19480010/adding-a-tooltip-to-an-input-box */
<style scoped>
input {
  padding: 0px 0px;
  border-width: 0px;
}
.text{
  width: 100%;
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
  border-style: solid;
  border-width: 1px;
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
    border-color: transparent white transparent transparent;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

</style>