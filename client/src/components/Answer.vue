<template lang="html">
  <div class="answer-container" v-if="selectedAnswer">
    <p>You selected {{ selectedAnswer }}</p>
    <p v-if='this.selectedQuiz.slice(0, 1) === "h"'><i v-if='this.selectedAnswer === this.correctAnswer.name' class="far fa-thumbs-up fa-2x"></i><i v-if='this.selectedAnswer !== this.correctAnswer.name' class="far fa-thumbs-down fa-2x"></i></p>
    <p v-if='this.selectedQuiz.slice(0, 1) === "e"'><i v-if='this.selectedAnswer === this.correctAnswer' class="far fa-thumbs-up fa-2x"></i><i v-if='this.selectedAnswer !== this.correctAnswer' class="far fa-thumbs-down fa-2x"></i></p>
    
    <div v-if='this.selectedQuiz.slice(0, 1) === "h"'><button v-if="questionCounter < 9" class="btn next" @click="handleNextQuestion" type="button" name="next-question">Next</button>
      <div v-if="questionCounter === 9"> <p>Well done on completing the quiz! Your score is {{this.quizScore}}</p>
        <a href="http://localhost:8080" class="btn next">Return home</a></div>
    </div>
    
    <div v-if='this.selectedQuiz.slice(0, 1) === "e"'><button v-if="questionCounter < 10" class="btn next" @click="handleNextQuestion" type="button" name="next-question">Next</button>
      <div v-if="questionCounter === 10"> <p>Well done on completing the quiz! Your score is {{this.quizScore}}</p>
        <a href="http://localhost:8080" class="btn next">Return home</a></div>
    </div>
  </div>
</template>

  <script>
  import { eventBus } from '../main.js'


  export default {
    name: 'answer',
    data(){
      return{
        selectedAnswer: null,
        quizScore: 0,
      }
    },
    watch: {
      selectedAnswer() {
        this.checkAnswer()
      }
    },
    props: ['correctAnswer', 'selectedQuiz', 'questionCounter', 'randomCountries'],
    methods: {
      checkAnswer() {
        if ( this.selectedQuiz.slice(0, 1) === 'h') {
          if (this.selectedAnswer === this.correctAnswer.name && this.selectedAnswer != null) {
            this.quizScore += 1
            return "Correct!"
          } else {
            return "Incorrect"
          }
        } else if ( this.selectedQuiz.slice(0, 1) === 'e'){
          if (this.selectedAnswer === this.correctAnswer && this.selectedAnswer != null) {
            this.quizScore += 1
            return "Correct!"
          } else {
            return "Incorrect"
          }
        }
      },
      handleNextQuestion(){
        this.selectedAnswer = null
        eventBus.$emit('next-question', this.selectedQuiz)
      }
    },
    mounted() {
      eventBus.$on('select-more-info', (selectedAnswer) => {
        if ( this.selectedQuiz.slice(0, 1) === 'h') {
          const selectedCountry = this.randomCountries.find(country => country.alpha2Code === selectedAnswer)
          this.selectedAnswer = selectedCountry.name
        }
        else {
          this.selectedAnswer = selectedAnswer
        }
        // this.checkAnswer()
      })

      eventBus.$on('easy-country-quiz-selected', () => {
        this.selectedAnswer = null
        this.quizScore = 0
      })
      eventBus.$on('hard-country-quiz-selected', () => {
        this.selectedAnswer = null
        this.quizScore = 0
      })
      eventBus.$on('easy-capital-quiz-selected', () => {
        this.selectedAnswer = null
        this.quizScore = 0
      })
      eventBus.$on('hard-capital-quiz-selected', () => {
        this.selectedAnswer = null
        this.quizScore = 0
      })
      eventBus.$on('easy-flag-quiz-selected', () => {
        this.selectedAnswer = null
        this.quizScore = 0
      })
      eventBus.$on('hard-flag-quiz-selected', () => {
        this.selectedAnswer = null
        this.quizScore = 0
      })
    }
  }

</script>

<style lang="css" scoped>

p{
  font-size: 1.5em;
}

.btn {
  border: 2px solid black;
  background-color: white;
  border-radius: 5px;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}

/* Green */
.next {
  border-color: #26c0d1;
  color: #26c0d1;
  margin-right: 10px;
  text-decoration: none;
}

.next:hover {
  background-color: #26c0d1;
  color: white;
}

/* .answer-container a {
  margin-top: 50px;
} */


</style>
