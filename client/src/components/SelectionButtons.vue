<template lang="html">
  <div class="button-choices">
    <button type="button" v:on-click="handleCountryClick" name="country-select-button">Countries</button>
    <button type="button" name="capital-select-button">Capitals</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'select-buttons',
  methods: {
    handleCountryClick() {
      eventBus.$emit('country-quiz-selected')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
