<template>
  <div class="shootItem" :style="borderColor">
    <button @click="toggleDetails"></button>
    <p>{{ shoot.title }}</p>
    <div v-if="detailVisibility">
      <!-- Mettre une vue consacrée aux Stats -->
      {{ this.$store.getters.currentShoot.nb_ends }}
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
      let color = this.shoot.finished ? '#0f0' : '#f00'
      return 'border-color: ' + color + ';'
    }
  }
}
</script>

<style scoped>
div {
  border-style: dashed;
  border: 2px solid;
}
</style>
