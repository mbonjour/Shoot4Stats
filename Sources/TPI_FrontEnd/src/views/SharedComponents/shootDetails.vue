<template>
  <div class="shootDetails">
    <!-- Mettre un composant consacrée aux Stats -->
    Tens : {{ this.$store.getters.currentDetailsShoot.tens }}</br>
    Nines: {{ this.$store.getters.currentDetailsShoot.nines }}</br>
    Gold Hitting percentage : {{ this.$store.getters.currentDetailsShoot.gold_hit }}%</br>
    <div class="progress"><div class="determinate" :style="styleGoldHit"></div></div>
    Total des points : {{ this.$store.getters.currentDetailsShoot.total }} / {{ (this.$store.getters.currentDetailsShoot.nb_total_ends*this.$store.getters.currentDetailsShoot.nb_arrows_by_end)*10 }}</br>
    Average Arrow : {{ this.$store.getters.currentDetailsShoot.average_arrow }}</br>
  </div>
</template>
<script>
export default {
  computed: {
    styleGoldHit () {
      return 'width: ' + this.$store.getters.currentDetailsShoot.gold_hit + '%'
    }
  }
}
</script>
