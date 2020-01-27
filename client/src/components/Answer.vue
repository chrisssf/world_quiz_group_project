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
  methods: {
    checkAnswer() {
      if (this.selectedAnswer === "Germany") {
        return "CORRECT"
      } else {
        return "INCORRECT"
      }
    },
    handleNextQuestion(){
      
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
