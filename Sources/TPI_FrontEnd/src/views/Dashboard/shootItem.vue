<template>
  <div class="shootItem">
    <div class="card horizontal">
      <div class="card-image">
        <img :src="borderColor">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          
          <p>{{ shoot.title }}</p>
          <i class="material-icons" @click="toggleDetails" style="padding: 5px; text-align: right;">info</i>
          <div v-if="detailVisibility">
            <!-- Mettre une vue consacrée aux Stats -->
            {{ this.$store.getters.currentShoot.nb_ends }}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'shootItem',
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
      return this.shoot.finished ? 'https://dummyimage.com/10x100/69f054/fff.png&text=+' : 'https://dummyimage.com/10x100/e34245/0011ff.png&text=+'
    }
  }
}
</script>
