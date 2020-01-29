<template>
  <div id="app">
    <a href="http://localhost:8080/">
      <h1 class="title">

        <span id="W">W</span>
        <span id="O">O</span>
        <span id="R">R</span>
        <span id="L">L</span>
        <span id="D">D</span>

        <span id="M">M</span>
        <span id="A">A</span>
        <span id="P">P</span>
        <span id="map-logo"><i class="fas fa-globe-americas"></i></span>
      </h1>
</a>
    <div class="grid-container">
      <div class="col-1">
        <map-view class="map" v-if="this.loaded" :countriesForMap='countriesForMap' :key="componentKey"/>
      </div>
      <div class="col-2">
        <selection-buttons class="quiz-choices"/>
        <questions class="questions" v-if="this.randomAnswer" :question='randomAnswer'/>
        <answers class="answers" v-if="this.randomOptions" :selectedQuiz="selectedQuiz" :correctAnswer='randomAnswer' :randomCountries="randomCountries" :questionCounter="questionCounter" />
        <country-info class="map-info-box" v-if='mapCountryInfo !== null && randomOptions === null' :mapCountryInfo='mapCountryInfo' />

      </div>
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
import CountryService from './services/CountriesService.js'
import CapitalsService from './services/CapitalsService.js'
import apiKey from './apikey.js'



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
      // question: null,
      // options: null,
      // correctAnswer: null,
      mapCountryInfo: null,
      mapDataArray: [],
      allCountriesForMap: [],
      loaded: null,
      componentKey: 0,
      // countries: [], //!!!!!!!!!!!
      questionCounter: 0,
      selectedQuiz: null,
      randomOptions: null,
      randomCountries: [],
      randomAnswer: null,
    }
  },
  computed: {
    countriesForMap: function() {

      if (this.randomOptions) {
        return this.randomOptions
      } else {
        return this.allCountriesForMap
      }
    }
  },
  methods: {
    fetchData(questionNumber) {
      CountryService.getCountries()
      // .then(countries => countries)
      .then((countries) => {
        this.options = countries[questionNumber].Options
        return countries
      })
      .then((countries) => {
        this.question = countries[questionNumber].Question
        return countries
      })
      .then((countries) => this.correctAnswer = countries[questionNumber].Answer)
      .then(() => this.componentKey += 1)
    },

    fetchCapitalData(questionNumber) {
      CapitalsService.getCapitals()
      .then((capitals) => {
        this.options = capitals[questionNumber].Options
        return capitals
      })
      .then((capitals) => {
        this.question = capitals[questionNumber].Question
        return capitals
      })
      .then((capitals) => this.correctAnswer = capitals[questionNumber].Answer)
      .then(() => this.componentKey += 1)
    },

    getRandomCountries() {
      // while (this.loaded === null) {
      //   console.log("not loaded API data yet");
      // }
      // while (this.mapDataArray.length === 0) {
      //   console.log("not loaded API data yet");
      // }

        const randomCountries = []
        while (randomCountries.length < 4 ) {
          const randomIndex = Math.floor(Math.random() * 251);
          // if this.mapDataArray
          const randomCountry = this.mapDataArray[randomIndex]
          console.log(randomCountry.area, randomIndex, randomCountry.name);
          if (randomCountry.area >= 200000 && randomCountries.includes(randomCountry) === false && randomCountry.name !== "Antarctica") {
            randomCountries.push(randomCountry)
          }
        }
        console.log(randomCountries);
        this.randomCountries = randomCountries
        this.randomOptions = randomCountries.map((country, index) => [{v: country.alpha2Code, f:"?"}, {v:index, f:""}])
        const randomAnswerIndex = Math.floor(Math.random() * 4);
        this.randomAnswer = randomCountries[randomAnswerIndex]
        this.componentKey += 1
    }
  },

  mounted() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(countries => this.mapDataArray = countries)
    .then(() => {
      // this.mapDataArray.forEach(country => this.allCountriesForMap.push([country.alpha2Code, country.numericCode]))
      this.mapDataArray.forEach((country, index)=> this.allCountriesForMap.push([{v: country.alpha2Code, f: country.name}, {v:index, f:""}]))
      // this.mapDataArray.forEach(country => this.allCountriesForMap.push([country.name]))
    })
    .then(() => {
        this.loaded = true
    })
    // .then(() => this.getRandomCountries() )


    eventBus.$on('country-quiz-selected', () => {
      this.selectedQuiz = "countries"
      this.questionCounter = 1
      this.getRandomCountries()
      // this.fetchData(0)
    })

    eventBus.$on('capital-quiz-selected', () => {
      this.selectedQuiz = "capitals"
      this.questionCounter = 1
      this.fetchCapitalData(0)
    })

    eventBus.$on('select-more-info', countryCode => {
      fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => this.mapCountryInfo = countries.find(country => country.alpha2Code === countryCode))
    })

    eventBus.$on('next-question', (selectedQuiz) => {
      if (selectedQuiz === "countries"){
        // this.fetchData(this.questionCounter)
        // this.loaded = null
        this.getRandomCountries()
      }
      else if
      (selectedQuiz === "capitals"){
        this.fetchCapitalData(this.questionCounter)
      }
      this.questionCounter += 1;
    })

    // function () {
      // this.getRandomCountries()
    // }
  }
}

</script>

<style>
body {
  background-color: #F8F8ff;
  color: #303030;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */

}

.grid-container {
  display: grid;
  grid-template-columns: 7fr 3fr;
}

@media (max-width: 1050px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

.col-2{
  text-align: center;
  justify-content: center;
}

.map {
  position: relative;
  /* display: inline; */
  /* width: 60%; */
}

.map-info-box{
  margin: auto;
  margin-top: 60px;
}

/* .map-info-box{
  position: absolute;
  left: 80px;
  bottom: 70px;
} */

.quiz-choices {
  /* display: inline; */
  /* width: 40%; */
}

.title {
  text-align: center;
  /* padding-left: 30px; */
  font-size: 3em;
}

.questions{
  margin-top: 70px;
}

.answers {
  margin-top: 30px;
}

#W{
  color: #57cfff;
  text-shadow: 1px 0 0;
}

#O{
color: #ff2921;
}

#R{
color: #ebc634;
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
color: #ebc634;
}

#P{
color: #51ff1c;
}

#map-logo {
  padding-left: 20px;
  color: #57cfff;
}

#app > a {
  text-decoration: none;
}

</style>
