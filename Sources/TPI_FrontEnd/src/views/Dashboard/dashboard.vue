<template>
  <div>
    <div v-if="areShootsEmpty" class="createShoot">
      <h3>You don't have any Shoots yet !</h3>
      <p>Please go to <router-link to="/createShoot">Create a Shoot</router-link> or click the "plus" button to begin !!!</p>
    </div>
    <div class="row">
      <shootItem v-for="currentShoot in shoots" :key="currentShoot.id" :shoot="currentShoot"></shootItem>
    </div>
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
import { mapGetters } from 'vuex'

export default {
  components: { shootItem },
  name: 'dashboard',
  computed: {
    areShootsEmpty () {
      return this.shoots.length === 0
    },
    ...mapGetters(['shoots'])
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
