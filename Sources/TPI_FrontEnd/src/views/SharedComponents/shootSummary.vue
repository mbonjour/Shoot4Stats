<template>
  <div class="shootSummary">
    <div class="card horizontal">
      <div class="card-image">
        <img :src="borderColor">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <div><strong>{{ this.shoot.title }}</strong></div>
          <div>{{ this.shoot.date }}</div>
          <div>{{ this.shoot.description }}</div>
          <div>Nbre flèches : {{ this.shoot.nb_ends*this.shoot.nb_arrows_by_end }}/{{ this.shoot.nb_total_ends*this.shoot.nb_arrows_by_end }}</div>
          <div class="i-details"><i class="material-icons" @click="toggleDetails">{{ iconToShow }}</i></div>
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
          this.$store.dispatch('setShoot', this.shoot.id)
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
      // Mettre images en local
      return this.shoot.finished ? 'https://dummyimage.com/10x160/69f054/fff.png&text=+' : 'https://dummyimage.com/10x160/e34245/0011ff.png&text=+'
    },
    iconToShow () {
      return this.shoot.finished ? 'info' : 'mode_edit'
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
#i-details {
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
