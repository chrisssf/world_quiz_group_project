<template lang="html">
  <div v-if="selectedAnswer">
    <p>You selected {{ selectedAnswer }}</p>
    <p> {{ checkAnswer() }} <i v-if='this.selectedAnswer === this.correctAnswer' class="far fa-thumbs-up fa-2x"></i><i v-if='this.selectedAnswer !== this.correctAnswer' class="far fa-thumbs-down fa-2x"></i></p>
    <button class="btn next" @click="handleNextQuestion" type="button" name="next-question">Next</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'


export default {
  name: 'answer',
  data(){
    return{
      selectedAnswer: null
    }
  },
  props: ['correctAnswer', 'selectedQuiz'],
  methods: {
    checkAnswer() {
      if (this.selectedAnswer === this.correctAnswer) {
        return "Correct!"
      } else {
        return "Try again"
      }
    },
    handleNextQuestion(){
      eventBus.$emit('next-question', this.selectedQuiz)
    this.selectedAnswer = null
    }
  },
  mounted() {
    eventBus.$on('select-more-info', (selectedAnswer) => {
      this.selectedAnswer = selectedAnswer
    })
  }
}
</script>

<style lang="css" scoped>

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
  margin-right: 10px
}

.next:hover {
  background-color: #26c0d1;
  color: white;
}

</style>
