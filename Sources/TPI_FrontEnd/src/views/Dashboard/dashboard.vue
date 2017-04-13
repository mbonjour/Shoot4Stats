<template>
  <div class="dashboard">
    <!-- <span v-if="shoots">Go create a Shoot !</span>  Vérifier qu'il y aie des Shoots  -->
    <div v-if="this.$store.getters.shoots.length === 0" class="createShoot">
      <h3>You don't have any Shoots yet !</h3>
      <p>Please go to <router-link to="/createShoot">Create a Shoot</router-link> or click the "plus" button to begin !!!</p>
    </div>
    <shootItem v-for="currentShoot in this.$store.getters.shoots" :key="currentShoot.id" :shoot="currentShoot"></shootItem>
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
import shootItem from '../SharedComponents/shootItem'
export default {
  components: { shootItem },
  name: 'dashboard',
  data () {
    return {
      shoots: []
    }
  },
  created () {
    this.$store.dispatch('loadShoots')
  }
}
</script>

<style>
.createShoot {
  padding: 10px;
}
</style>
