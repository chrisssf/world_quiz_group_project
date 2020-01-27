<template lang="html">
    <div id="regions_div"></div>
</template>

<script>
import {eventBus} from '../main.js'
import apiKey from '../apikey.js'

export default {
  name: "map-view",
  data() {
    return {
      countries: this.countriesForMap,
    }
  },
  props: ['countriesForMap'],
  mounted() {
    google.charts.load('current', {
      'packages':['geochart'],
      'mapsApiKey': apiKey
    });

    google.charts.setOnLoadCallback(drawRegionsMap);

    const countriesOnMap = this.countriesForMap
    countriesOnMap.unshift(['Country'])

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable(
        countriesOnMap
      );

      var options = {
        colorAxis: {colors: ['#008000']},
        backgroundColor: '#81d4fa'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      // This function makes map areas selectable and displays area name in console
      google.visualization.events.addListener(chart, 'select', function () {
        var selection = chart.getSelection();
        if (selection.length > 0) {
          eventBus.$emit('select-more-info', (data.getValue(selection[0].row, 0)))
        }
      });
      chart.draw(data, options);
    }

  },
}
</script>

<style lang="css" scoped>
  #regions_div {
    width: 100%;
  }
</style>
