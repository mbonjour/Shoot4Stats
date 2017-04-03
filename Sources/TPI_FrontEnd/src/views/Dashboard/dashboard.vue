<template>
  <div class="dashboard">
    <!-- <span v-if="shoots">Go create a Shoot !</span>  Vérifier qu'il y aie des Shoots  -->
    <shootItem v-for="currentShoot in shoots" :key="currentShoot.id" :shoot="currentShoot"></shootItem>
  </div>
</template>

<script>
import shootItem from './shootItem'
export default {
  components: { shootItem },
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
