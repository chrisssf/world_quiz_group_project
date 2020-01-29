<template lang="html">
  <div class="answer-container" v-if="selectedAnswer">
    <p>You selected {{ selectedAnswer }}</p>
    <p><i v-if='this.selectedAnswer === this.correctAnswer.name' class="far fa-thumbs-up fa-2x"></i><i v-if='this.selectedAnswer !== this.correctAnswer.name' class="far fa-thumbs-down fa-2x"></i></p>
    <button v-if="questionCounter < 9" class="btn next" @click="handleNextQuestion" type="button" name="next-question">Next</button>
    <div v-if="questionCounter === 9"> <p>Well done on completing the quiz! Your score is {{this.quizScore}}</p>
      <a href="http://localhost:8080" class="btn next">Return home</a></div>
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
        if (this.selectedAnswer === this.correctAnswer.name) {
          console.log(this.quizScore);
          this.quizScore += 1
          return "Correct!"
        } else {
          return "Incorrect"
        }
      },
      handleNextQuestion(){
        eventBus.$emit('next-question', this.selectedQuiz)
        this.selectedAnswer = null
      }
    },
    mounted() {
      eventBus.$on('select-more-info', (selectedAnswer) => {
        const selectedCountry = this.randomCountries.find(country => country.alpha2Code === selectedAnswer)
        this.selectedAnswer = selectedCountry.name

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

.answer-container a {
  /* margin-top: 50px; */
}


</style>
