<template>
  <div class="shootDetails">
    <!-- Mettre un composant consacrée aux Stats -->
    Tens : {{ this.$store.getters.currentDetailsShoot.tens }}</br>
    Nines: {{ this.$store.getters.currentDetailsShoot.nines }}</br>
    Gold Hitting percentage : {{ this.$store.getters.currentDetailsShoot.gold_hit.toFixed(2) }}%</br>
    Total des points : {{ this.$store.getters.currentDetailsShoot.total }} / {{ (this.$store.getters.currentDetailsShoot.nb_total_ends*this.$store.getters.currentDetailsShoot.nb_arrows_by_end)*10 }}</br>
    Average Arrow : {{ this.$store.getters.currentDetailsShoot.average_arrow.toFixed(2) }}</br>
    <!-- <pointsTable :shoot="this.$store.getters.currentDetailsShoot"></pointsTable> -->
    <canvas id="myChart"
            width="100"
            height="100"></canvas>
  </div>
</template>
<script>
import pointsTable from './tablePoints'
import Chart from 'chart.js'
export default {
  components: { pointsTable },
  mounted () {
    /*eslint-disable*/
    var ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
      /*eslint-disable*/
      type: 'doughnut',
      data: {
        labels: [
          'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'X'
        ],
        datasets: [{
          data: [
            this.$store.getters.currentDetailsShoot.count[0] || 0,
            this.$store.getters.currentDetailsShoot.count[1] || 0,
            this.$store.getters.currentDetailsShoot.count[2] || 0,
            this.$store.getters.currentDetailsShoot.count[3] || 0,
            this.$store.getters.currentDetailsShoot.count[4] || 0,
            this.$store.getters.currentDetailsShoot.count[5] || 0,
            this.$store.getters.currentDetailsShoot.count[6] || 0,
            this.$store.getters.currentDetailsShoot.count[7] || 0,
            this.$store.getters.currentDetailsShoot.count[8] || 0,
            this.$store.getters.currentDetailsShoot.count[9] || 0,
            this.$store.getters.currentDetailsShoot.count[10] || 0,
            this.$store.getters.currentDetailsShoot.count[11] || 0,
          ],
          backgroundColor: [
            'white', 'white', 'white', 'black', 'black', 'blue', 'blue', 'red', 'red', 'yellow', 'yellow', 'yellow'
          ],
          hoverBackgroundColor: [
            'white', 'white', 'white', 'black', 'black', 'blue', 'blue', 'red', 'red', 'yellow', 'yellow', 'yellow'
          ]
        }]
      },
      options: {
        animation: {
          animateScale: true
        },
        responsive: true
      }
    })
  }
}
</script>
