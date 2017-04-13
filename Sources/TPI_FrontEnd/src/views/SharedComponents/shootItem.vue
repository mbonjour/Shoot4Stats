<template>
  <div class="card" :class="borderColor" @click="showDetailsOrEdit()">
    <div class="title">{{ shoot.title }}</div>
    <div class="desc">{{ shoot.description }}</div>
    <transition name="bounce" mode="out-in">
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
  padding: 5px;
  padding-bottom: 10px;
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
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.shootSummary {
  padding: 5px;
  padding-top: 10px;
}
.shootDetails {
  padding: 5px;
  padding-top: 10px;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>
