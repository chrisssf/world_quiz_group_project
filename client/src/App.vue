<template>
  <div id="app">
    <map-view />
    <selection-buttons/>
    <questions/>
    <answers/>
  </div>
</template>

<script>
import MapView from './components/MapView.vue'
import SelectionButtons from './components/SelectionButtons.vue'
import Questions from './components/Questions.vue'
import Answers from './components/Answer.vue'
import {eventBus} from './main.js'

export default {
  name: 'app',
  components: {
    "map-view": MapView,
    "selection-buttons": SelectionButtons,
    "questions": Questions,
    "answers": Answers
  },
  data() {
    return {
      // "questionData": null;
    }
  },
  mounted() {
    // eventBus.$on('country-quiz-selected', {
    //   this.questionData = [{v: 'DE', f: 'Germany'}, ]
    // })
    eventBus.$on('select-more-info', countryCode => {
      fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(countries => console.log(countries))
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
