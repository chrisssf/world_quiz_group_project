<template lang="html">
  <div v-if="selectedAnswer">
    <p>You selected {{ selectedAnswer }}</p>
    <p>That is {{ checkAnswer() }} </p>
    <button @click="handleNextQuestion" type="button" name="next-question">Next</button>
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
  props: ['correctAnswer'],
  methods: {
    checkAnswer() {
      if (this.selectedAnswer === this.correctAnswer) {
        return "CORRECT"
      } else {
        return "INCORRECT"
      }
    },
    handleNextQuestion(){
      eventBus.$emit('next-question')
    this.selectedAnswer = null
    }
  },
  mounted() {
    eventBus.$on('select-more-info', (selectedAnswer) => {
      this.selectedAnswer = selectedAnswer
    })

    eventBus.$emit('next-question')
  }
}
</script>

<style lang="css" scoped>
</style>
