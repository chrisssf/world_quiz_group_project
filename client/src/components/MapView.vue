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

    //
    // const definedPropertyAndColours = () =>{
    //   if (countriesOnMap.length < 5) {
    //     console.log('yes');
    //     countriesOnMap.unshift(['Country', '']);
    //
    //   } else {
    //     console.log('nae');
    //     countriesOnMap.unshift(['Country']);
    //   }
    // }
    //
    // definedPropertyAndColours()

    countriesOnMap.unshift(['Country', '']);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable(
        countriesOnMap
      );

      // const definedColours = () => {
      //
      //   if (countriesOnMap.length < 10) {
      //     return {colors: ['red', 'green', 'blue', 'yellow']}
      //   } else {
      //     return {colors: ['#000000']}
      //   }
      // };
      //
      //
      // const coloursToBeUsed = definedColours()

      const definedColours = () => {
        if (countriesOnMap.length < 10) {
          return {colors: ['red', 'green', 'blue', 'yellow']}
        } else {
          return {colors: ['green', 'darkgreen']}
        }
      };

      const coloursToBeUsed = definedColours()
      var options = {
        backgroundColor: '#81d4fa',
        colorAxis: coloursToBeUsed,
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
