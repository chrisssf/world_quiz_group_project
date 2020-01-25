<template lang="html">
  <div>
    <h1>World Quiz</h1>
    <div id="regions_div" style="width: 900px; height: 500px;"></div>
  </div>
</template>

<script>

import apiKey from '../apikey.js'
export default {
  name: "map-view",
  data() {
    return {
      mapDataArray: [],
      countriesOnMap: [['Country', 'Population']],

    }
  },
  mounted() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => this.mapDataArray = countries)
      // .then(() => console.log(this.mapDataArray[0]))
      .then(() => {
        // this.mapDataArray.forEach(country => this.countriesOnMap.push([country.alpha2Code, country.population]))
        this.mapDataArray.forEach(country => this.countriesOnMap.push([{v: country.alpha2Code, f: country.name}, country.population]))
      })
      // .then(() => console.log(this.names))
// [{v: 'IT', f: 'Italy'}, 2400000]

      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': apiKey
      });

      google.charts.setOnLoadCallback(drawRegionsMap);

      const countriesOnMap = this.countriesOnMap
      // console.log(countriesOnMap);
      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(
          countriesOnMap
          // ['Country', 'Population'],
          // ['CA', 500]
          // [mapDataArray[0][0].name, mapDataArray[0][0].population],
          // // [mapDataArray[0][13].name, mapDataArray[0][13].population]
      );

        var options = {
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        // This function makes map areas selectable and displays area name in console
        google.visualization.events.addListener(chart, 'select', function () {
          var selection = chart.getSelection();
          if (selection.length > 0) {
            console.log(data.getValue(selection[0].row, 0));
          }
        });
        chart.draw(data, options);
      }
  }
}

</script>

<style lang="css" scoped>
</style>
