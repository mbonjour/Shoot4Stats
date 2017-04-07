<template>
<div class="editShoot">
  <table>
    <tr v-for="(end, index) in this.$store.getters.currentShoot.ends">
      <td class="nbEnd">End {{ index + 1 }}</td>
      <td v-for="arrow in end.arrows"><arrowItem :pointValue="arrow.point"></arrowItem></td>
    </tr>
    <tr v-if="!this.$store.getters.currentShoot.finished">
      <td class="nbEnd">Current End</td>
      <td v-for="arrow in arrows"><arrowItem :pointValue="arrow.point"></arrowItem></td>
    </tr>
  </table>
  <div>
    
  </div>
  <select v-model="currentArrow" class="browser-default" v-if="!this.$store.getters.currentShoot.finished">
    <option disabled value="">Select here and hit add !</option>
    <option value="0">M</option>
    <option v-for="i in 10">{{ i }}</option>
    <option value="11">X</option>
  </select>
  <p>You're at : {{ this.$store.getters.currentShoot.nb_ends }}/{{ this.$store.getters.currentShoot.nb_total_ends }} ends</p>
  <div><button @click="finishShoot()" v-if="!this.$store.getters.currentShoot.finished" class="finishButton"><strong> UP !</strong></button></div>
  <div><button v-if="!arrowComplete" class="validateButton" @click="addArrow()"><strong>Add Arrow</strong></button>
  <button v-else class="validateButton" @click="validateSend()">Add End</button>
  <button v-if="this.$store.getters.currentShoot.finished" class="redirectButton" @click="redirect()">Go to Dashboard (Shoot Finished)</button></div>
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
      currentArrow: ''
    }
  },
  methods: {
    validateSend () {
      // Voir pour éviter redondance
      // this.arrows.push({point: parseInt(this.currentArrow)})
      // this.arrows = this.arrows.sort((a, b) => {
      //   return b.point - a.point
      // })
      this.addArrow()
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
      if (this.arrows.length >= this.$store.getters.currentShoot.nb_arrows_by_end - 1) {
        this.arrowComplete = true
      }
    },
    redirect () {
      this.$router.push({path: '/dashboard'})
    },
    finishShoot () {
      // fenêtre modale pour demander confirmation à faire
      this.$http.get('/api/shoots/' + this.$store.getters.currentShoot.id + '/finish')
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
  height: 50px;
  position: fixed;
  bottom: 0px;
  color: #35495E;
  background-color: #41B883;
  border: none;
}
.redirectButton {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  color: #35495E;
  background-color: #41B883;
  border: none;
}
.nbEnd {
  border-right: 1px solid gray;
}
.finishButton {
  width: 100px;
  height: 40px;
  color: #35495E;
  background-color: #41B883;
  border: none;
}
</style>
