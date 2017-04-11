<template>
  <div class="shootSummary">
    <span>Arrows : {{ shoot.nb_ends*shoot.nb_arrows_by_end }}/{{ shoot.nb_total_ends*shoot.nb_arrows_by_end }}</span>
    <span class="pushRight">{{ shoot.date }}</span>
  </div>
</template>

<script>
export default {
  name: 'shootSummary',
  props: ['shoot']
}
</script>

<style scoped>
.shootSummary {
  margin: 2px;
}
</style>
