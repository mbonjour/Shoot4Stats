<template>
  <div class="shootSummary">
    <span>Arrows : {{ nbArrows }}/{{ maxNbArrows }}</span>
    <span class="pushRight">{{ shoot.date }}</span>
  </div>
</template>

<script>
export default {
  name: 'shootSummary',
  props: ['shoot'],
  computed: {
    nbArrows () {
      return this.shoot.nb_ends * this.shoot.nb_arrows_by_end
    },
    maxNbArrows () {
      return this.shoot.nb_total_ends * this.shoot.nb_arrows_by_end
    }
  }
}
</script>

<style scoped>
.shootSummary {
  margin: 2px;
}
</style>
