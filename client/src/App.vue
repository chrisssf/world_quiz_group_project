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
        <questions class="questions" v-if="this.correctAnswer" :selectedQuiz='selectedQuiz' :question='correctAnswer' :easyQuestion='question' />
        <answers class="answers" v-if="this.options" :selectedQuiz='selectedQuiz' :correctAnswer='correctAnswer' :randomCountries='randomCountries' :questionCounter='questionCounter' :easyOptions='options' :easyAnswer='answer' />
        <country-info class="map-info-box" v-if='mapCountryInfo !== null && options === null' :mapCountryInfo='mapCountryInfo' />
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
import FlagsService from './services/FlagsService.js' //!!!!!!!
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
      question: null,
      options: null,
      correctAnswer: null,

      mapCountryInfo: null,
      mapDataArray: [],
      allCountriesForMap: [],
      loaded: null,
      componentKey: 0,
      // countries: [], //!!!!!!!!!!!
      questionCounter: 0,
      selectedQuiz: null,
      // randomOptions: null,
      randomCountries: [],
      // randomAnswer: null,
    }
  },
  computed: {
    countriesForMap: function() {

      if (this.options) {
        return this.options
      } else {
        return this.allCountriesForMap
      }
    }
  },
  methods: {
    fetchCountryData(questionNumber) {
      CountryService.getCountries()
      // .then(countries => countries)
      .then((countries) => {
        this.options = countries[questionNumber].Options

        console.log("options", this.options)
        return countries
      })
      .then((countries) => {
        this.question = countries[questionNumber].Question

        console.log("question", this.question)
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

    fetchFlagData(questionNumber) {
      FlagsService.getFlags()
      // .then(countries => countries)
      .then((flags) => {
        this.options = flags[questionNumber].Options

        console.log("options", this.options)
        return flags
      })
      .then((flags) => {
        this.question = flags[questionNumber].Question

        console.log("question", this.question)
        return flags
      })
      .then((flags) => this.correctAnswer = flags[questionNumber].Answer)
      .then(() => this.componentKey += 1)
    },

    getRandomCountries() {
        const randomCountries = []
        while (randomCountries.length < 4 ) {
          const randomIndex = Math.floor(Math.random() * (this.mapDataArray.length - 1));
          const randomCountry = this.mapDataArray[randomIndex]
          console.log(randomCountry.area, randomIndex, randomCountry.name);
          if (randomCountry.area >= 200000 && randomCountries.includes(randomCountry) === false && randomCountry.name !== "Antarctica") {
            randomCountries.push(randomCountry)
          }
        }
        console.log(randomCountries);
        this.randomCountries = randomCountries
        this.options = randomCountries.map((country, index) => [{v: country.alpha2Code, f:"?"}, {v:index, f:""}])
        const randomAnswerIndex = Math.floor(Math.random() * 4);
        this.correctAnswer = randomCountries[randomAnswerIndex]
        this.componentKey += 1
    },

  getRandomCapitals() {
    const randomCountries = []
    while (randomCountries.length < 4 ) {
      const randomIndex = Math.floor(Math.random() * (this.mapDataArray.length - 1));
      const randomCountry = this.mapDataArray[randomIndex]
      console.log(randomCountry.area, randomIndex, randomCountry.capital);
      if (randomCountry.area >= 200000 && randomCountries.includes(randomCountry) === false && randomCountry.name !== "Antarctica") {
        randomCountries.push(randomCountry)
      }
    }
    console.log(randomCountries);
    this.randomCountries = randomCountries
    this.options = randomCountries.map((country, index) => [{v: country.alpha2Code, f: country.name}, {v:index, f:""}])
    const randomAnswerIndex = Math.floor(Math.random() * 4);
    this.correctAnswer = randomCountries[randomAnswerIndex]
    this.componentKey += 1
  },

  getRandomFlags() {
    const randomCountries = []
    while (randomCountries.length < 4){
      const randomIndex = Math.floor(Math.random() * (this.mapDataArray.length - 1));
      const randomCountry = this.mapDataArray[randomIndex]
      if (randomCountry.area >= 200000 && randomCountries.includes(randomCountry) === false && randomCountry.name !== "Antarctica") {
        randomCountries.push(randomCountry)
      }
    }
    this.randomCountries = randomCountries
    this.options = randomCountries.map((country, index) => [{v: country.alpha2Code, f: country.name}, {v: index, f: ""}])
    const randomAnswerIndex = Math.floor(Math.random() * 4)
    this.correctAnswer = randomCountries[randomAnswerIndex]
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


    eventBus.$on('hard-country-quiz-selected', () => {
      this.correctAnswer = null
      this.selectedQuiz = "hardCountries"
      this.questionCounter = 0
      this.getRandomCountries()


      // this.fetchCountryData(0)
    })

    eventBus.$on('easy-country-quiz-selected', () =>{
      this.correctAnswer = null
      this.selectedQuiz = "easyCountries"
      this.questionCounter = 1
      this.fetchCountryData(0)
    })

    eventBus.$on('hard-capital-quiz-selected', () => {
      this.correctAnswer = null
      this.selectedQuiz = "hardCapitals"
      this.questionCounter = 0
      this.getRandomCapitals()

    })

    eventBus.$on('easy-capital-quiz-selected', () => {
      this.correctAnswer = null
      this.selectedQuiz = "easyCapitals"
      this.questionCounter = 1
      this.fetchCapitalData(0)

    })

    eventBus.$on('hard-flag-quiz-selected', () =>{ 
      this.correctAnswer = null
      this.options = null
      this.selectedQuiz = "hardFlags"
      this.questionCounter = 0
      this.getRandomFlags()
    })

 
    eventBus.$on('easy-flag-quiz-selected', () => {
      this.correctAnswer = null
      this.options = null
      this.selectedQuiz = "easyFlags"
      this.questionCounter = 1
      this.fetchFlagData(0)
    })

    eventBus.$on('select-more-info', countryCode => {
      fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => this.mapCountryInfo = countries.find(country => country.alpha2Code === countryCode))
    })


    eventBus.$on('next-question', (selectedQuiz) => {
      if (selectedQuiz === "hardCountries"){
        // this.fetchCountryData(this.questionCounter)
        // this.loaded = null
        this.getRandomCountries()
      }
      else if (selectedQuiz === "hardCapitals"){
        this.getRandomCapitals()
      }
      else if (selectedQuiz === "hardFlags"){ //!!!!!!!!!!
        this.getRandomFlags()
      }
      else if (selectedQuiz === "easyCountries"){
        this.fetchCountryData(this.questionCounter)
        // this.loaded = null
      }
      else if (selectedQuiz === "easyCapitals"){
        this.fetchCapitalData(this.questionCounter)
      }
      else if (selectedQuiz === "easyFlags"){ //!!!!!!!!
        this.fetchFlagData(this.questionCounter)
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
  justify-content: cetnter;
}

.map {
  position: relative;
  /* display: inline; */
  /* width: 60%; */
}

.map-info-box{
  margin: auto;
  margin-top: 10px;
}

/* .map-info-box{
  position: absolute;
  left: 80px;
  bottom: 70px;
} */

/* .quiz-choices {
  display: inline; */
  /* width: 40%;
} */

.title {
  text-align: center;
  /* padding-left: 30px; */
  font-size: 3em;
}

.questions{
  margin-top: 50px;
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
