<template>
  <div class="shootSummary">
    <span>{{ shoot.nb_ends }}</span>
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
