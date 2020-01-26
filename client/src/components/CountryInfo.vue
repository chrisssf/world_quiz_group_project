<template lang="html">
  <ul>
    <li>Capital: {{mapCountryInfo.capital}}</li>
    <li>Population: {{mapCountryInfo.population}}</li>
    <li> <img class"small-flag" :src="mapCountryInfo.flag" alt="NoneApplicable"> </li>
  </ul>
</template>

<script>
export default {
  name: 'countryInfo',
  props: ['mapCountryInfo']



}

</script>

<style lang="css" scoped>
.small-flag {
  height: 20px
}
</style>
