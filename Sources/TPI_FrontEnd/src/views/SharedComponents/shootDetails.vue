<template>
  <div class="shootDetails">
    <!-- Mettre un composant consacrée aux Stats -->
    Tens : {{ this.$store.getters.currentShoot.tens }}</br>
    Nines: {{ this.$store.getters.currentShoot.nines }}</br>
    Gold Hitting percentage : {{ this.$store.getters.currentShoot.gold_hit }}%</br>
    <div class="progress"><div class="determinate" :style="styleGoldHit"></div></div>
    Total des points : {{ this.$store.getters.currentShoot.total }} / {{ (this.$store.getters.currentShoot.nb_total_ends*this.$store.getters.currentShoot.nb_arrows_by_end)*10 }}</br>
    Average Arrow : {{ this.$store.getters.currentShoot.average_arrow }}</br>
  </div>
</template>
<script>
export default {
  computed: {
    styleGoldHit () {
      return 'width: ' + this.$store.getters.currentShoot.gold_hit + '%'
    }
  }
}
</script>
