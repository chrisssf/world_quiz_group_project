<template lang="html">
  <div class="button-choices">
    <h2>Pick a Quiz</h2>
    <button type="button" @click="handleCountryClick" name="country-select-button">Countries</button>
    <button type="button" @click="handleCapitalClick" name="capital-select-button">Capitals</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'select-buttons',
  methods: {
    handleCountryClick() {
      eventBus.$emit('country-quiz-selected')
    },
    handleCapitalClick() {
      eventBus.$emit('capital-quiz-selected')
    }
  }
}
  </script>

<style lang="css" scoped>
</style>
