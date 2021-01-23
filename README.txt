***JOKE NORRIS***
----------------------------------------------------------------------------------------------------------------------------------------
Urheber:	Tim Friedrich 31293
		Max Wolf 31287
----------------------------------------------------------------------------------------------------------------------------------------
URL zu unserer Anwendung: https://joke-norris.netlify.app/#/
----------------------------------------------------------------------------------------------------------------------------------------
Auflistung der verwendeten fremden Codebstandteile:
!!! Die Verwendete API stammt von http://www.icndb.com/api/ !!!

1. Die Routerfunktionen kommen aus diesem Tutorial:
	https://github.com/bradtraversy/vue_crash_todolist

2. In App.vue wurde CSS global resettet durch: 
	http://meyerweb.com/eric/tools/css/reset/ 
   	v2.0 | 20110126
  	License: none (public domain)

3. Die LocalStorage Funktionen haben wir uns 
   aus der Dokumentation und einem Stackoverflow Beitrag erschlossen.
   	https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
   	https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage

4. Bild für den Header aus folgendem Artikel: 
   	Chuck Norris Picture: https://www.nordbayern.de/panorama/karate-weltmeister-und-kult-star-chuck-norris-wird-80-1.9906391

5. Displaying data from an API:
        https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html

6. Die Tooltips sind von:
	https://stackoverflow.com/questions/19480010/adding-a-tooltip-to-an-input-box

7. Footer Bewegung von:
	 https://developer.mozilla.org/de/docs/Web/HTML/Element/marquee

8. Key-Changing Strategie von der Website https://michaelnthiessen.com/force-re-render/
         verwendet um die Visibility von dem getJokesImage upzudaten mithilfe des renderUpdate Keys
----------------------------------------------------------------------------------------------------------------------------------------
Ausführliche Beschreibung und Begründung der Architektur unseres Codes:
Kurze Beschreibung für jede Komponente:
1. App.vue
- Oberste Instanz der App (root)
- Verwart und verwaltet die Joke Daten der API und der Favorites
- Verwaltet Favourites im Local Storage des Browsers
- rerender der Page nach jedem Laden eines Jokes (um den Favourite-Button richtig upzudaten)

2. Header.vue
- Beinhaltet router-links für "Home" und "Favourites", um den Bereich zwischen Header und Footer austauschen 
zu können

3. Home.vue
- Aufbau der Home Seite
- API wird per axios.get auf Witze abgefragt

4. Favourites.vue
- Aufbau der Favourites Seite

5. ReloadJoke.vue
- Eingabe der Joke-Menge und Button zum ausgeben der Jokes

6. JokeList.vue
- Gibt für jeden Joke der Liste einen Joke an JokeListItem weiter und beinhaltet den Footer (damit er auch bei Favourites angezeigt wird)

7. JokeListItem.vue
- Gibt jeden ankommenden Joke von JokeList einzeln aus, beinhaltet den Favourise-Button
----------------------------------------------------------------------------------------------------------------------------------------
Ausführliche Bescheibung des Datenflusses der Komponenten:
Mounted() holt beim Start der Website, falls existierend, die Favourites aus dem LocalStorage und schreibt diese in jokesFavorites

ReloadJoke.vue gibt das Event "reload-jokes" mit dem Amount aus dem Input-Field an Home.vue
Home.vue fragt Witze aus der API ab und gibt diese mit dem Event "load-data" an App.vue

App.vue gibt jokesAPI Witze an Home.vue
Home.vue gibt die Witze an die JokeList weiter 
JokeList geht das Witze-Array durch und gibt für jede gefundene ID einen joke an JokeListItem 
JokeListItem gibt jeden JokeText mit einem Favourise Button aus
Durch den Favourise Button wird der saved Boolean geflippt und ein Event an root (App.vue) geschickt
Je nachdem ob saved true oder false ist wird der Witz in das jokesFavorites-Array geschrieben oder gelöscht
Bei jedem Speichern oder Löschen wird FavoriteJokes in der Local Storage des Browsers geschrieben

App.vue gibt jokesFavorites an Favourites.vue weiter
Favorites.vue gibt die Witze an die JokeList weiter 
JokeList geht das Witze-Array durch und gibt für jede gefundene ID einen joke an JokeListItem 
JokeListItem gibt jeden JokeText mit einem Favourise Button aus
Durch den Favourise Button wird ein Event an root (App.vue) geschickt
----------------------------------------------------------------------------------------------------------------------------------------
Erste Skizze vorab zu unserem Projekt (Screenshot):
https://prnt.sc/xi2oln
--------------------------------------------------------------------
Beschreibung der Notwendigen Schritte, um die Anwendung lokal zu starten:
Zum richtigen Projektverzeichnis wechseln, dann 'npm install' um die Dependencies zu installieren,
dann 'npm run serve' um die Website local auf 'localhost:8080' zu hosten