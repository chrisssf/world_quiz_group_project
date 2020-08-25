<template lang="html">
  <div class="button-choices" :key="key">
    <p v-if="quizCurrentlySelected">Click a country on the map to find out some more information!</p>
    <p>Up for a challenge?</p>
    <p id="underline">Choose a quiz below:</p>
    <button class="btn success" type="button" @click="handleCountryClick" name="country-select-button">Countries</button>
    <button class="btn danger" type="button" @click="handleCapitalClick" name="capital-select-button">Capitals</button>
    <button class="btn orange" type="button" @click="handleFlagClick" name="flag-select-button">Flags</button>
    <br>
    <button class="btn success difficulty-button" type="button" @click="handleEasyCountryClick" v-if='this.clickedQuiz === "country"' name="easy-country-button">Easy</button>
    <button class="btn success difficulty-button" type="button" @click="handleHardCountryClick" v-if='this.clickedQuiz === "country"' name="hard-country-button">Hard</button>

    <button class="btn danger difficulty-button" type="button" @click="handleEasyCapitalClick" v-if='this.clickedQuiz === "capital"' name="easy-capital-button">Easy</button>
    <button class="btn danger difficulty-button" type="button" @click="handleHardCapitalClick" v-if='this.clickedQuiz === "capital"' name="hard-capital-button">Hard</button>

  
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'select-buttons',
  data() {
    return {
      quizCurrentlySelected: true,
      key: 0,
      clickedQuiz: null
    }
  },
  methods: {
    handleCountryClick(){
      this.clickedQuiz = "country"
      this.key += 1
    },

    handleCapitalClick(){
      this.clickedQuiz = "capital"
      this.key += 1
    },

    handleEasyCountryClick(){
      this.clickedQuiz = null
      this.key += 1
      eventBus.$emit('easy-country-quiz-selected')
      this.quizCurrentlySelected = false
    },

    handleHardCountryClick() {
      this.clickedQuiz = null
      this.key += 1
      eventBus.$emit('hard-country-quiz-selected')
      this.quizCurrentlySelected = false
    },

    handleEasyCapitalClick(){
      this.clickedQuiz = null
      this.key += 1
      eventBus.$emit('easy-capital-quiz-selected')
      this.quizCurrentlySelected = false
    },

    handleHardCapitalClick() {
      this.clickedQuiz = null
      this.key += 1
      eventBus.$emit('hard-capital-quiz-selected')
      this.quizCurrentlySelected = false
    },

    handleFlagClick() {
      this.clickedQuiz = null
      eventBus.$emit('flag-quiz-selected')
      this.quizCurrentlySelected = false
    }
  }
}
</script>

<style lang="css" scoped>
.button-choices p {
  font-size: 2em;
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
.success {
  border-color: #4CAF50;
  color: green;
  margin-right: 10px
}

.success:hover {
  background-color: #4CAF50;
  color: white;
}

/* Red */
.danger {
  border-color: #f44336;
  color: red;
  margin-right: 10px;
}

.danger:hover {
  background: #f44336;
  color: white;
}

.orange{
  border-color: orange;
  color: orange;
}

.orange:hover {
  background: orange;
  color: white;
}

.difficulty-button {
  margin-top: 10px;
}

#underline{
  text-decoration: underline;
}

</style>
