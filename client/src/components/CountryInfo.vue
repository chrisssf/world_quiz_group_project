<template lang="html">
  <ul>
    <li>Capital: {{mapCountryInfo.capital}}</li>
    <li>Population: {{mapCountryInfo.population}}</li>
    <li> <img :src="mapCountryInfo.flag" alt="NoneApplicable"> </li>
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
