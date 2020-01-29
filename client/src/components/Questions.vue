<template lang="html">
  <!-- <h2>Which of these countries is Germany?</h2> -->
  <div class="question-container">
    <h2 v-if="this.selectedQuiz === 'countries'">Which country on the map is {{question.name}}?</h2>
    <h2 v-if="this.selectedQuiz === 'capitals'">Which country's capital is {{question.capital}}?</h2>
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
  props: ['question', 'selectedQuiz']
  // mounted() {
  //   eventBus.$on('country-quiz-selected', () => {
  //     this.quizType = "country"
  //   })
  //
  //   eventBus.$on('capital-quiz-selected', () => {
  //     this.quizType = "capital"
  //   })
  //
  // }
}

</script>

<style lang="css" scoped>
</style>
