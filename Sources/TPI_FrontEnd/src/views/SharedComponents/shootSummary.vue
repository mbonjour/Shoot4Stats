<template>
  <div class="shootSummary">
    <div class="card horizontal">
      <div class="card-image">
        <img :src="borderColor">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <div><strong>{{ this.shoot.title }}</strong>        {{ this.shoot.date }}</div>
          <div>{{ this.shoot.description }}</div>
          <div>Nbre flèches : {{ this.shoot.nb_ends*this.shoot.nb_arrows_by_end }}/{{ this.shoot.nb_total_ends*this.shoot.nb_arrows_by_end }}</div>
          <div class="i-details"><i class="material-icons" @click="toggleDetails">{{ iconToShow }}</i>
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
      this.$store.dispatch('setShoot', this.shoot.id)
      if (this.shoot.finished) {
        this.detailVisibility = !this.detailVisibility
      } else {
        this.$router.push({ path: '/editShoot' })
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
      return this.shoot.finished ? 'https://dummyimage.com/10x150/69f054/fff.png&text=+' : 'https://dummyimage.com/10x150/e34245/0011ff.png&text=+'
    },
    iconToShow () {
      return this.shoot.finished ? 'info' : 'mode_edit'
    }
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
