<template lang="html">
  <ul>
    <li>Capital: {{mapCountryInfo.capital}}</li>
    <li>Population: {{mapCountryInfo.population}}</li>
  </ul>
</template>

<script>
export default {
  name: 'countryInfo',
  props: ['mapCountryInfo']



}

</script>

<style lang="css" scoped>
</style>
