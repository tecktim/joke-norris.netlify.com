<template>
  <div id="app">
    <Header />
    <router-view v-if="renderComponent"
    v-on:load-data="loadData"
    :jokesAPIFromApp="jokesAPI" 
    :jokesFavoritesFromApp="jokesFavorites"/>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
  data()  {
    return {
      jokesAPI : [],
      jokesFavorites : [],
      myStorage: localStorage,
      renderComponent : true
    }
  },
  mounted() 
  {
    this.$root.$on("handle-joke", this.handleJoke);
    let myStorageFavourites = this.myStorage.getItem('FavoriteJokes')
    if(myStorageFavourites != null) {
      this.jokesFavorites = JSON.parse(myStorageFavourites);
    }
  },
  methods : {
    forceRerender()
    {
      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    loadData(data)
    {
      this.jokesAPI = data;
      
    },
    /** Die LocalStorage Funktionen haben wir uns 
     *  aus der Dokumentation und einem Stackoverflow Beitrag erschlossen.
     *  https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
     *  https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
     */
    handleJoke(jokeListItem) {
        if(this.jokesFavorites === undefined) {
          this.jokesFavorites = [];
        }
        if(jokeListItem.saved == true) {
          this.jokesFavorites.push(jokeListItem);
          this.myStorage.setItem('FavoriteJokes', JSON.stringify(this.jokesFavorites));
        }else{
          /*erstellt ein neues Array mit allen Elementen bei denen joke.id != der jokeListItem.id zutrifft
          * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
          */
          this.jokesFavorites = this.jokesFavorites.filter(joke => joke.id != jokeListItem.id);
          this.myStorage.setItem('FavoriteJokes', JSON.stringify(this.jokesFavorites));
        }
        for(let i=0;i<this.jokesAPI.length;i++) {
          if(this.jokesAPI[i] !== undefined && jokeListItem !== undefined)
          {
            if(this.jokesAPI[i].id === jokeListItem.id) {
              this.jokesAPI[i].saved = jokeListItem.saved;
            }
          }
        }
        this.forceRerender();

      }
  }
}
</script>

<style>
 /*In App.vue wurde CSS global resettet durch: 
   http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  font-family:monospace;
  align-self: center;
}

</style>

