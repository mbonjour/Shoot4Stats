<template>
<div class="editShoot">
  <button v-if="this.$store.getters.currentShoot.finished" class="finishButton" @click="redirect()">Go to Dashboard (Shoot Finished)</button>
  <table>
    <tr v-for="(end, index) in this.$store.getters.currentShoot.ends">
      <td class="nbEnd">End {{ index + 1 }}</td>
      <td v-for="arrow in end.arrows"><arrowItem :pointValue="arrow.point"></arrowItem></td>
    </tr>
    <tr>
      <td class="nbEnd">Current End</td>
      <td v-for="arrow in arrows"><arrowItem :pointValue="arrow.point"></arrowItem></td>
    </tr>
  </table>
  <div>
    
  </div>
  <select v-model="currentArrow" class="browser-default">
    <option disabled value="">Select her and hit add</option>
    <option value="0">M</option>
    <option v-for="i in 10">{{ i }}</option>
    <option value="11">X</option>
  </select>
  <button v-if="!arrowComplete" class="validateButton" @click="addArrow()">Add Arrow</button>
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
      this.arrows.push({point: parseInt(this.currentArrow)})
      this.arrows = this.arrows.sort((a, b) => {
        return b.point - a.point
      })
      if (this.arrows.length === this.$store.getters.currentShoot.nb_arrows_by_end) {
        this.arrowComplete = true
      }
    },
    redirect () {
      this.$router.push({path: '/dashboard'})
    }
  },
  created () {
    if (this.$route.params.shootId) {
      this.$store.dispatch('setShoot', this.$route.params.shootId)
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
.finishButton {
  width: 100%;
  position: fixed;
  top: 0px;
}
.nbEnd {
  border-right: 1px solid gray;
}
</style>
