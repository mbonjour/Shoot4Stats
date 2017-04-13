import {
  Doughnut,
  mixins
} from 'vue-chartjs'

export default Doughnut.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.$nextTick(() => {
      this.renderChart(this.chartData, this.options)
    })
  }
})
