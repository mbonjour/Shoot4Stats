<template>
  <div class="dashboard">
    <!-- <span v-if="shoots">Go create a Shoot !</span>  Vérifier qu'il y aie des Shoots  -->
    <shootSummary v-for="currentShoot in shoots" :key="currentShoot.id" :shoot="currentShoot"></shootSummary>
  </div>
</template>

<script>
import shootSummary from '../SharedComponents/shootSummary'
export default {
  components: { shootSummary },
  name: 'dashboard',
  data () {
    return {
      shoots: []
    }
  },
  created () {
    this.$http.get('/api/shoots').then((response) => {
      this.shoots = response.data
    })
  }
}
</script>
