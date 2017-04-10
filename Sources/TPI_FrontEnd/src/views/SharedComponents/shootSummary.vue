<template>
  <div class="shootSummary">
    <div class="card horizontal" :style="borderColor" @click="toggleDetails()">
      <div class="card-stacked">
        <div class="card-content">
          <div><strong>{{ this.shoot.title }}</strong></div>
          <div>{{ this.shoot.date }}</div>
          <div>{{ this.shoot.description }}</div>
          <div>Nbre flèches : {{ this.shoot.nb_ends*this.shoot.nb_arrows_by_end }}/{{ this.shoot.nb_total_ends*this.shoot.nb_arrows_by_end }}</div>
          <shootDetails v-if="detailVisibility"></shootDetails>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shootDetails from './shootDetails'

export default {
  name: 'shootSummary',
  components: { shootDetails },
  props: ['shoot'],
  methods: {
    toggleDetails () {
      if (this.shoot.finished) {
        if (!this.detailVisibility) {
          this.$store.dispatch('setDetailsShoot', this.shoot.id)
          this.$events.$emit('anotherDetails', this.shoot.id)
        }
        this.detailVisibility = !this.detailVisibility
      } else {
        this.$router.push({ path: '/editShoot/' + this.shoot.id })
      }
    }
  },
  data () {
    return {
      detailVisibility: false
    }
  },
  computed: {
    borderColor () {
      if (this.shoot.finished) {
        if (this.shoot.nb_ends < this.shoot.nb_total_ends) {
          return 'border-left: 10px solid yellow'
        } else {
          return 'border-left: 10px solid green'
        }
      } else {
        return 'border-left: 10px solid red'
      }
    }
  },
  mounted () {
    this.$events.$on('anotherDetails', (shootId) => {
      if (shootId !== this.shoot.id) {
        this.detailVisibility = false
      }
    })
  }
}
</script>

<style scoped>
#tout-dedans {
  position: relative;
}
</style>
