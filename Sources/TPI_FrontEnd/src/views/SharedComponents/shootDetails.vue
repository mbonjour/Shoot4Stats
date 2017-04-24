<template>
  <div>
    <ul class="collection with-header">
      <li class="collection-header"><h4>Shoot details:</h4></li>
      <li class="collection-item">Tens (with X's) : {{ currentDetailsShoot.tens }}</li>
      <li class="collection-item">Nines : {{ currentDetailsShoot.nines }}</li>
      <li class="collection-item">Gold Hitting percentage : {{ currentDetailsShoot.gold_hit | twoDecimals }}%</li>
      <li class="collection-item">Total des points : {{ currentDetailsShoot.total }} / {{ maxPoint }}</li>
      <li class="collection-item">Average Arrow : {{ currentDetailsShoot.average_arrow | twoDecimals }}</li>
    </ul>

    <chart :chartData="datacollection" :options="options" class="small"></chart>

    <div class="row">
      <div class="yellowItem col s2">X, 10 or 9</div> <!-- SN: Should be a component (like arrowPill) wrapping the style, because here we get the style from arrowItem -->
      <div class="redItem col s2">8 or 7</div>
      <div class="blueItem col s2">6 or 5</div>
      <div class="blackItem col s2">4 or 3</div>
      <div class="whiteItem col s2">M, 1 or 2</div>
    </div>
  </div>
</template>

<script>
import Chart from './Charts/chart.js'
import { mapGetters } from 'vuex'

export default {
  components: { Chart },
  data () {
    return {
      datacollection: null,
      options: {
        tooltipEvents: [],
        showTooltips: true,
        onAnimationComplete: () => {
          this.showTooltip(this.segments, true)
        },
        tooltipTemplate: '<%= label %> - <%= value %>',
        legend: {
          display: false,
          labels: {
            fontSize: 14,
            usePointStyle: true
          }
        },
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
  computed: {
    ...mapGetters(['currentDetailsShoot']),
    maxPoint () {
      return (this.currentDetailsShoot.nb_total_ends * this.currentDetailsShoot.nb_arrows_by_end * 10)
    }
  },
  filters: {
    twoDecimals (value) {
      if (!value) return ''
      value = value.toString()
      return value.toFixed(2)
    }
  },
  methods: {
    fetchData () {
      this.datacollection = {
        labels: [
          'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'X'
        ],
        datasets: [{
          data: [
            this.currentDetailsShoot.count[0] || 0, // SN: Adapt name to be explcit and maybe manage undefined value in api or vuex
            this.currentDetailsShoot.count[1] || 0,
            this.currentDetailsShoot.count[2] || 0,
            this.currentDetailsShoot.count[3] || 0,
            this.currentDetailsShoot.count[4] || 0,
            this.currentDetailsShoot.count[5] || 0,
            this.currentDetailsShoot.count[6] || 0,
            this.currentDetailsShoot.count[7] || 0,
            this.currentDetailsShoot.count[8] || 0,
            this.currentDetailsShoot.count[9] || 0,
            this.currentDetailsShoot.count[10] || 0,
            this.currentDetailsShoot.count[11] || 0
          ],
          backgroundColor: [
            '#fafafa', '#fafafa', '#fafafa', '#424242', '#424242', '#64b5f6', '#64b5f6', '#e57373', '#e57373', '#fff176', '#fff176', '#fff176'
          ],
          borderColor: [
            '#eeeeee', '#eeeeee', '#eeeeee', '#212121', '#212121', '#2196f3', '#2196f3', '#ef5350', '#ef5350', '#ffb300', '#ffb300', '#ffb300'
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
