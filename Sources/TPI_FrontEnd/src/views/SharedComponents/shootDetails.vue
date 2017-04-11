<template>
  <div class="shootDetails">
    <!-- Mettre un composant consacrée aux Stats -->
    Tens : {{ this.$store.getters.currentDetailsShoot.tens }}</br>
    Nines: {{ this.$store.getters.currentDetailsShoot.nines }}</br>
    Gold Hitting percentage : {{ this.$store.getters.currentDetailsShoot.gold_hit.toFixed(2) }}%</br>
    Total des points : {{ this.$store.getters.currentDetailsShoot.total }} / {{ (this.$store.getters.currentDetailsShoot.nb_total_ends*this.$store.getters.currentDetailsShoot.nb_arrows_by_end)*10 }}</br>
    Average Arrow : {{ this.$store.getters.currentDetailsShoot.average_arrow.toFixed(2) }}</br>
    <canvas id="myChart"
            width="200"
            height="300"></canvas>
  </div>
</template>
<script>
import pointsTable from './tablePoints'
import Chart from 'chart.js'
export default {
  components: { pointsTable },
  mounted () {
    var ctx = document.getElementById("myChart")
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          "M","1","2","3","4","5","6","7","8","9","10","X"
        ],
        datasets: [{
          data: [2,5,1,4,5,0,0,8,9,10,2,1],
          backgroundColor: [
            "white","white","white","black","black","blue","blue","red","red","yellow","yellow","yellow"
          ],
          hoverBackgroundColor: [
            "white","white","white","black","black","blue","blue","red","red","yellow","yellow","yellow"
          ]
        }]
      },
      options: {
        animation:{
          animateScale:true
        }
      }
    })
  }
}
</script>
