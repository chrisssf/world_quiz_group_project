<template lang="html">
  <div v-if="selectedAnswer">
    <p>You selected {{ selectedAnswer }}</p>
    <p>That is {{ checkAnswer() }} </p>
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
</style>
