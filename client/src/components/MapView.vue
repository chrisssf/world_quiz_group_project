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
      countries: this.countriesForMap
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
    countriesOnMap.unshift(['Country', '']);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable(
        countriesOnMap
      );


    //   const definedColours = () => {
    //     console.log("maybe");
    //   if (countriesOnMap.length < 10) {
    //     console.log("YAYYYYY", countriesOnMap.length)
    //     return {colors: ['#283947']}
    //     // return   {colors: ['red', 'green', 'blue', 'yellow'], values: [0, 1, 2, 3]}
    //   } else {
    //     console.log("BOOOOOO", countriesOnMap.length)
    //     return {colors: ['#000000']}
    //   }
    // };



      var options = {
        backgroundColor: '#81d4fa',
      colorAxis: {colors: ['red', 'green', 'blue', 'yellow']},
      legend: 'none'
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
