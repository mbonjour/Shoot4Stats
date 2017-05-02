<script>
/* eslint-disable */
export default ({
  extends: VueChartJs.Doughnut,
  mixins: [VueChartJs.mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.$nextTick(() => {
      this.renderChart(this.chartData, this.options)
    })
  }
})
</script>
