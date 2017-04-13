<template>
  <div class="shootDetails">
    Tens : {{ this.$store.getters.currentDetailsShoot.tens }}</br>
    Nines: {{ this.$store.getters.currentDetailsShoot.nines }}</br>
    Gold Hitting percentage : {{ this.$store.getters.currentDetailsShoot.gold_hit.toFixed(2) }}%</br>
    Total des points : {{ this.$store.getters.currentDetailsShoot.total }} / {{ (this.$store.getters.currentDetailsShoot.nb_total_ends*this.$store.getters.currentDetailsShoot.nb_arrows_by_end)*10 }}</br>
    Average Arrow : {{ this.$store.getters.currentDetailsShoot.average_arrow.toFixed(2) }}</br>
    <!-- <pointsTable :shoot="this.$store.getters.currentDetailsShoot"></pointsTable> -->
    <!-- <canvas id="myChart" width="200" height="200">
    </canvas> -->
    <chart :chartData="datacollection" :options="options" class="small"></chart>
    <!--<table>
      <tr>
        <td>
          M
        </td>
        <td v-for="i in 10">
          {{ i }}
        </td>
        <td>
          X
        </td>
      </tr>
      <tr>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[0] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[1] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[2] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[3] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[4] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[5] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[6] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[7] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[8] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[9] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[10] || 0 }}
        </td>
        <td>
          {{ this.$store.getters.currentDetailsShoot.count[11] || 0 }}
        </td>
      </tr>
    </table>-->
  </div>
</template>
<script>
import pointsTable from './tablePoints'
import Chart from './chart.js'
export default {
  components: { pointsTable, Chart },
  data () {
    return {
      datacollection: null,
      options: {
        animation: {
          animateScale: true
        },
        responsive: true
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.datacollection = {
        labels: [
          'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'X'
        ],
        datasets: [{
          data: [
            this.$store.getters.currentDetailsShoot.count[0],
            this.$store.getters.currentDetailsShoot.count[1],
            this.$store.getters.currentDetailsShoot.count[2],
            this.$store.getters.currentDetailsShoot.count[3],
            this.$store.getters.currentDetailsShoot.count[4],
            this.$store.getters.currentDetailsShoot.count[5],
            this.$store.getters.currentDetailsShoot.count[6],
            this.$store.getters.currentDetailsShoot.count[7],
            this.$store.getters.currentDetailsShoot.count[8],
            this.$store.getters.currentDetailsShoot.count[9],
            this.$store.getters.currentDetailsShoot.count[10],
            this.$store.getters.currentDetailsShoot.count[11]
          ],
          backgroundColor: [
            '#fafafa', '#fafafa', '#fafafa', '#424242', '#424242', '#64b5f6', '#64b5f6', '#e57373', '#e57373', '#fff176', '#fff176', '#fff176'
          ]
        }]
      }
    }
  }
}
</script>

<style>
.small {
    max-width: 500px;
  }
</style>
