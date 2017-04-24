<template>
  <div class="shootDetails">
    <div id="conteneurFlex">
      <div class="legend">Tens (with X's) : {{ this.$store.getters.currentDetailsShoot.tens }}</div>
      <div class="legend">Nines : {{ this.$store.getters.currentDetailsShoot.nines }}</div>
      <div class="legend">Gold Hitting percentage : {{ this.$store.getters.currentDetailsShoot.gold_hit.toFixed(2) }}%</div>
      <div class="legend">Total des points : {{ this.$store.getters.currentDetailsShoot.total }} / {{ (this.$store.getters.currentDetailsShoot.nb_total_ends*this.$store.getters.currentDetailsShoot.nb_arrows_by_end)*10 }}</div>
      <div class="legend">Average Arrow : {{ this.$store.getters.currentDetailsShoot.average_arrow.toFixed(2) }}</div>
    </div>
    <!-- <pointsTable :shoot="this.$store.getters.currentDetailsShoot"></pointsTable> -->
    <chart :chartData="datacollection" :options="options" class="smallCentered"></chart>
    <div id="conteneurFlex">
      <div class="legend"><div class="pastille jaune"></div>  X, 10 or 9</div>
      <div class="legend"><div class="pastille rouge"></div>  8 or 7</div>
      <div class="legend"><div class="pastille bleu"></div>  6 or 5</div>
      <div class="legend"><div class="pastille noir"></div>  4 or 3</div>
      <div class="legend"><div class="pastille blanc"></div>  M, 1 or 2</div>
    </div>
  </div>
</template>

<script>
// import pointsTable from './tablePoints'
import Chart from './Charts/chart.js'
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
  methods: {
    fetchData () {
      this.datacollection = {
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
            this.$store.getters.currentDetailsShoot.count[11] || 0
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
#conteneurFlex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.legend {
  margin: 5px;
  padding: 5px;
}
.pastille {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: inline-block;
}
.jaune {
  border: 2px solid #ffb300;
  background-color: #fff176;
}
.rouge {
  border: 2px solid #ef5350;
  background-color: #e57373;
}
.bleu {
  border: 2px solid #2196f3;
  background-color: #64b5f6;
}
.noir {
  border: 2px solid #212121;
  background-color: #424242;
}
.blanc {
  border: 2px solid #eeeeee;
  background-color: #fafafa;
}
.smallCentered {
    max-width: 500px;
    margin:auto;
}
</style>
