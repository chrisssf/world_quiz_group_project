<template>
  <div id="app">
    <map-view v-if="this.loaded" :countriesForMap='countriesForMap' :key="componentKey"/>
    <country-info v-if='mapCountryInfo !== null && answer === null' :mapCountryInfo='mapCountryInfo' />
    <selection-buttons/>
    <questions v-if="this.answer"/>
    <answers v-if="this.answer"/>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
