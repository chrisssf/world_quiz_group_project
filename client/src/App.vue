<template>
  <div id="app">
    <div class="map-container">
      <div class="map-layout">
        <map-view :questionData='questionData'/>
      </div>
      <div class="map-layout-box">
        <country-info v-if='mapCountryInfo !== null' :mapCountryInfo='mapCountryInfo' />
      </div>
    </div>




    <selection-buttons/>
    <questions/>
    <answers/>
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
      questionData: null,
      mapCountryInfo: null
    }
  },
  mounted() {
    eventBus.$on('country-quiz-selected', () => {
      this.questionData = 'Germany';
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

.map-container{
  justify-content: center;
}

.map-layout{
  position: absolute;
  z-index: -1
}

.map-layout-box{
  position: relative;
  z-index: 1;
  left: 10px;
top: 630px
}


</style>
