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
  data () {
    return {
      X: 0,
      tens: 0,
      nines: 0,
      eights: 0,
      sevens: 0,
      sixs: 0,
      fives: 0,
      forths: 0,
      threes: 0,
      twos: 0,
      ones: 0,
      M: 0
    }
  },
  mounted () {
    var ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'X'
        ],
        datasets: [{
          data: [this.M, this.ones, this.twos, this.threes, this.forths, this.fives, this.sixs, this.sevens, this.eights, this.nines, this.tens, this.X],
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
  },
  methods: {
    calculateArrows () {
      for (let end in this.$store.getters.currentDetailsShoot.ends) {
        for (let arrow in end.arrows) {
          switch (arrow.point) {
            case 11:
              this.X += 1
              break
            case 10:
              this.tens += 1
              break
            case 9:
              this.nines += 1
              break
            case 8:
              this.eights += 1
              break
            case 7:
              this.sevens += 1
              break
            case 6:
              this.sixs += 1
              break
            case 5:
              this.fives += 1
              break
            case 4:
              this.forths += 1
              break
            case 3:
              this.threes += 1
              break
            case 2:
              this.twos += 1
              break
            case 1:
              this.ones += 1
              break
            case 0:
              this.M += 1
              break
            default:
              this.M += 1
          }
        }
      }
    }
  }
}
</script>
