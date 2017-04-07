<template>
  <div class="dashboard">
    <!-- <span v-if="shoots">Go create a Shoot !</span>  Vérifier qu'il y aie des Shoots  -->
    <div v-if="this.shoots.length === 0">
      <p>You don't have any Shoots yet !</p>
      <p>Please go to <router-link to="/createShoot">Create a Shoot</router-link> or click the "plus" button to begin !!!</p>
    </div>
    <shootSummary v-for="currentShoot in shoots" :key="currentShoot.id" :shoot="currentShoot"></shootSummary>
    <div class="fixed-action-btn toolbar">
      <a class="btn-floating btn-large" style="background-color: #41B883;">
        <i class="large material-icons">add</i>
      </a>
      <ul>
        <li class="waves-effect waves-light"><router-link to="/createShoot/training">training</router-link></li>
        <li class="waves-effect waves-light"><router-link to="/createShoot/indoor">indoor</router-link></li>
        <li class="waves-effect waves-light"><router-link to="/createShoot/outdoor">outdoor</router-link></li>
      </ul>
    </div>
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
