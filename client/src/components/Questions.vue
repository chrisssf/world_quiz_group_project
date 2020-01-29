<template lang="html">
  <!-- <h2>Which of these countries is Germany?</h2> -->
  <h2>Which country on the map is {{question.name}}?</h2>
</template>

<script>
export default {
  name: 'questions',
  props: ['question']
}
</script>

<style lang="css" scoped>
</style>
