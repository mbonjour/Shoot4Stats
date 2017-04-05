<template>
<div class="editShoot">
  <table>
    <tr v-for="(end, index) in this.$store.getters.currentShoot.ends">
      <td class="nbEnd">End {{ index }}</td>
      <td v-for="arrow in end.arrows"><arrowItem :pointValue="arrow.point"></arrowItem></td>
    </tr>
  </table>
  <div>
    <arrowItem v-for="arrow in arrows" :pointValue="arrow.point"></arrowItem>
  </div>
  <select v-model="currentArrow" class="browser-default">
    <option disabled value="">Choose your score</option>
    <option value="11">X</option>
    <option v-for="i in 11">{{ i }}</option>
    <option value="0">M</option>
  </select>
  <button v-if="!arrowComplete" class="validateButton" @click="addArrow()">Select her and hit add</button>
  <button v-else class="validateButton" @click="validateSend()">Add End</button>
</div>
</template>

<script>
import arrowItem from '../SharedComponents/arrowItem'
export default {
  name: 'editShoot',
  components: {arrowItem},
  data () {
    return {
      shoot: null,
      arrows: [],
      arrowComplete: false,
      currentArrow: null
    }
  },
  created () {
    this.shoot = this.$store.getters.currentShoot
  },
  methods: {
    validateSend () {
      this.$store.dispatch('addEnd', {
        id_shoot: this.$store.getters.currentShoot.id,
        arrows: this.arrows
      })
      this.arrows = []
      this.arrowComplete = false
    },
    addArrow () {
      console.log(this.currentArrow)
      this.arrows.push({point: parseInt(this.currentArrow)})
      if (this.arrows.length === this.$store.getters.currentShoot.nb_arrows_by_end) {
        this.arrowComplete = true
      }
    }
  }
}
</script>

<style>
table {
  width: 100%;
  border: 1px solid gray;
  text-align: center;
}
td, tr {
  text-align: center;
  border: 1px solid gray;
}
.validateButton {
  width: 100%;
  position: fixed;
  bottom: 0px;
}
.nbEnd {
  border-right: 1px solid gray;
}
</style>
