<template>
  <div id="app">
    <div class="grid-container">
      <h1 class="title">

          <span id="W">W</span>
          <span id="O">O</span>
          <span id="R">R</span>
          <span id="L">L</span>
          <span id="D">D</span>

          <span id="M">M</span>
          <span id="A">A</span>
          <span id="P">P</span>

      </h1>
      <map-view class="map" v-if="this.loaded" :countriesForMap='countriesForMap' :key="componentKey"/>
      <country-info class="map-info-box" v-if='mapCountryInfo !== null && answer === null' :mapCountryInfo='mapCountryInfo' />
      <selection-buttons class="quiz-choices" />
      <questions class="questions" v-if="this.answer"/>
      <answers class="answers" v-if="this.answer"/>
    </div>
  </div>
</template>

<script>
import MapView from './components/MapView.vue'
import CountryInfo from './components/CountryInfo.vue'
import SelectionButtons from './components/SelectionButtons.vue'
import Questions from './components/Questions.vue'
import Answers from './components/Answer.vue'
import {eventBus} from './main.js'



export default {
  name: 'app',
  components: {
    "map-view": MapView,
    "country-info": CountryInfo,
    "selection-buttons": SelectionButtons,
    "questions": Questions,
    "answers": Answers
  },
  data() {
    return {
      answer: null,
      mapCountryInfo: null,
      mapDataArray: [],
      allCountriesForMap: [],
      loaded: null,
      componentKey: 0
    }
  },
  computed: {
    countriesForMap: function() {
      if (this.answer) {
        return this.answer
      } else {
        return this.allCountriesForMap
      }
    }
  },

  mounted() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(countries => this.mapDataArray = countries)
    .then(() => {
      // this.mapDataArray.forEach(country => this.allCountriesForMap.push([country.alpha2Code, country.population]))
      this.mapDataArray.forEach(country => this.allCountriesForMap.push([{v: country.alpha2Code, f: country.name}]))
      // this.mapDataArray.forEach(country => this.allCountriesForMap.push([country.name]))
    })
    .then(() => {
        this.loaded = true
    })


    eventBus.$on('country-quiz-selected', () => {
      this.answer = [["Germany"],["Australia"],["Canada"], ["Finland"]]
      this.componentKey += 1
    })

    eventBus.$on('select-more-info', countryCode => {
      fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => this.mapCountryInfo = countries.find(country => country.alpha2Code === countryCode))
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

.map {
  position: relative;
}

.map-info-box{
  position: absolute;
  left: 80px;
  bottom: -105px;
}

.title {
  font-size: 3em;
}

#W{
  color: #57cfff;
  text-shadow: 1px 0 0;
}

#O{
color: #ff2921;
}

#R{
color: #fff200;
}

#L{
color: #51ff1c;
}

#D{
color: #57cfff;
margin-right: 10px;
}

#M{
color: #ff2921;
margin-left: 10px;
}

#A{
color: #fff200;
}

#P{
color: #51ff1c;
}

</style>
