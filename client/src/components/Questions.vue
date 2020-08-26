<template lang="html">
  <!-- <h2>Which of these countries is Germany?</h2> -->
  <div class="question-container">
    <h2 v-if="this.selectedQuiz === 'easyCountries'"> {{this.easyQuestion}} </h2>
    <h2 v-if="this.selectedQuiz === 'hardCountries'">Which country on the map is {{question.name}}?</h2>
    <h2 v-if="this.selectedQuiz === 'easyCapitals'"> {{this.easyQuestion}} </h2>
    <h2 v-if="this.selectedQuiz === 'hardCapitals'">Which country's capital is {{question.capital}}?</h2>
    <h2 class="flag-question" v-if="this.selectedQuiz === 'hardFlags'">Which country's flag is <br> <img class="small-flag" :src="question.flag" alt="NoneApplicable"> </h2>
    <h2 class="flag-question" v-if="this.selectedQuiz === 'easyFlags'">Which country's flag is <br> <img class="small-flag" :src="this.easyQuestion" alt="NoneApplicable"> </h2>
    <h2 class="question">Click the country you think it is</h2>
  </div>

</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: 'questions',
  data() {
    return {
      quizType: null
    }
  },
  props: ['question', 'selectedQuiz', 'easyQuestion'],
  mounted() {
  //   eventBus.$on('country-quiz-selected', () => {
  //     this.quizType = "country"
  //   })
  //
  //   eventBus.$on('capital-quiz-selected', () => {
  //     this.quizType = "capital"
  //   })
  //

  this.console.log("easyQuestion")
  }
}

</script>

<style lang="css" scoped>
h2 {
  font-size: 25px;
}

.question-container {
  margin-top: 10px;
}

.flag-question {
  margin-bottom: 5px;
}

.question {
  margin-top: 0px;
}

.small-flag {
  height: 70px;
  border: solid black 2px;
  margin-top: 10px;
}

</style>
