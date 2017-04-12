<template>
  <div class="card" :class="borderColor" @click="showDetailsOrEdit()">
    <div class="title">{{ shoot.title }}</div>
    <div class="desc">{{ shoot.description }}</div>
    <shootSummary v-if="!showDetails" :shoot="shoot"></shootSummary>
    <shootDetails v-if="showDetails" :shoot="shoot"></shootDetails>
  </div>
</template>

<script>
import shootSummary from './shootSummary'
import shootDetails from './shootDetails'
export default {
  components: {shootSummary, shootDetails},
  props: ['shoot'],
  data () {
    return {
      showDetails: false
    }
  },
  methods: {
    showDetailsOrEdit () {
      if (this.shoot.finished) {
        if (!this.showDetails) {
          this.$store.dispatch('setDetailsShoot', this.shoot.id)
          this.$events.$emit('anotherDetails', this.shoot.id)
        }
        this.showDetails = !this.showDetails
      } else {
        this.$router.push({ path: '/editShoot/' + this.shoot.id })
      }
    }
  },
  mounted () {
    this.$events.$on('anotherDetails', (shootId) => {
      if (shootId !== this.shoot.id) {
        this.showDetails = false
      }
    })
  },
  computed: {
    borderColor () {
      if (this.shoot.finished) {
        if (this.shoot.nb_ends < this.shoot.nb_total_ends) {
          return 'notReallyFinished'
        } else {
          return 'finished'
        }
      } else {
        return 'notFinished'
      }
    }
  }
}
</script>

<style>
.card {
  padding: 5px;
}
.title {
  border-bottom: 1px solid #dadada;
  font-weight: bold;
  background-color: #fdfdfd;
  margin: 2px;
}
.finished {
  border-left: 10px solid #41B883;
}
.notReallyFinished {
  border-left: 10px solid #fff176;
}
.notFinished {
  border-left: 10px solid #ef5350;
}
.pushRight {
  float: right;
}
.desc {
  border-bottom: 1px solid #dadada;
  margin: 2px;
}
</style>
