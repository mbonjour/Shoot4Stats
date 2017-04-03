<template>
  <div class="shootSummary">
    <div class="card horizontal">
      <div class="card-image">
        <img :src="borderColor">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <div class="tout-dedans">
            <p>{{ shoot.title }}</p>
            <i class="material-icons" @click="toggleDetails">info</i>
          </div>
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
      return this.shoot.finished ? 'https://dummyimage.com/10x100/69f054/fff.png&text=+' : 'https://dummyimage.com/10x100/e34245/0011ff.png&text=+'
    }
  }
}
</script>

<style>
#tout-dedans.i {
  position: absolute;
  right: 0px;
  padding: 3px;
}
</style>
