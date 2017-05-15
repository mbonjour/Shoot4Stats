<template>
  <div>
    <!-- <span v-if="shoots">Go create a Shoot !</span>  Vérifier qu'il y aie des Shoots  -->
    <div v-if="areShootsEmpty" class="createShoot dashboard">
      <h3>You don't have any Shoots yet !</h3>
      <p>Please go to <router-link to="/createShoot">Create a Shoot</router-link> or click the "plus" button to begin !!!</p>
    </div>
    <div class="row">
      <shootItem v-for="currentShoot in list" :key="currentShoot.id" :shoot="currentShoot"></shootItem>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
        <span slot="no-more">
          There is no more Shoots :(
        </span>
      </infinite-loading>
    </div>
    <div class="fixed-action-btn toolbar">
      <a class="btn-floating btn-large" style="background-color: #41B883;">
        <i class="large material-icons" style=" color: #35495E;">add</i>
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
import InfiniteLoading from 'vue-infinite-loading'
import shootItem from '../SharedComponents/shootItem'
import { mapGetters } from 'vuex'

export default {
  components: { shootItem, InfiniteLoading },
  name: 'dashboard',
  data () {
    return {
      list: [],
      count: 0
    }
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        let currentCount = this.count
        for (this.count; this.count < currentCount + 10; this.count++) {
          if (this.shoots[this.count]) {
            this.list.push(this.shoots[this.count])
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
            break
          }
        }
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 500)
    }
  },
  created () {
    this.$store.dispatch('loadShoots')
  },
  computed: {
    ...mapGetters(['shoots']),
    areShootsEmpty () {
      return this.shoots.length === 0
    }
  }
}
</script>

<style>
.createShoot {
  padding: 10px;
}
</style>
