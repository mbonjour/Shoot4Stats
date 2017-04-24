<template>
  <div class="card" :class="borderColor" @click="showDetailsOrEdit()">
    <div class="title">{{ shoot.title }}</div>
    <div class="desc">{{ shoot.description }}</div>
    <transition name="slide-fade" mode="out-in">
      <shootSummary v-if="!showDetails" :shoot="shoot"></shootSummary>
      <shootDetails v-else :shoot="shoot"></shootDetails>
    </transition>
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
      let result = ''
      if (this.shoot.finished) {
        if (this.shoot.nb_ends < this.shoot.nb_total_ends) {
          result = 'notReallyFinished'
        } else {
          result = 'finished'
        }
      } else {
        result = 'notFinished'
      }
      return result + ' col s12 m3'
    }
  }
}
</script>

<style>
.card {
  padding: 5px;
  margin: 5px;
  margin-top: 15px; 
}
.title {
  border-bottom: 1px solid #fafafa;
  font-weight: bold;
  margin: 2px;
  padding: 5px;
  padding-bottom: 10px;
}
.finished {
  border-left: 5px solid #41b883;
  border-top: 1px solid #41b883;
  border-bottom: 1px solid #41b883;
  border-right: 1px solid #41b883;
}
.notReallyFinished {
  border-left: 5px solid #fff176;
  border-top: 1px solid #fff176;
  border-bottom: 1px solid #fff176;
  border-right: 1px solid #fff176;
}
.notFinished {
  border-left: 5px solid #ef5350;
  border-top: 1px solid #ef5350;
  border-bottom: 1px solid #ef5350;
  border-right: 1px solid #ef5350;
}
.pushRight {
  float: right;
}
.desc {
  border-bottom: 1px solid #fafafa;
  margin: 2px;
  padding-left: 5px;
  padding-right: 2px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: justify;
}
.shootSummary {
  padding: 5px;
  padding-top: 10px;
}
.shootDetails {
  padding: 5px;
  padding-top: 10px;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
