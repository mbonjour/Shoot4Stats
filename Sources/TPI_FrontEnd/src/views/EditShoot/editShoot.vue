<template>
<div class="editShoot">
   

  <table>
    <tr v-for="(end, index) in this.$store.getters.currentShoot.ends">
      <td class="nbEnd">{{ index }}</td>
      <td v-for="arrow in end.arrows">{{ arrow.point }}</td>
    </tr>
  </table>
   <input type="text">
  <button class="validateButton" @click="validateSend()">Add End</button>
</div>
</template>

<script>
export default {
  name: 'editShoot',
  data () {
    return {
      shoot: null,
      // Les points doivent être des chiffres, je ne gère pas les Xs
      arrow1: null,
      arrow2: null,
      arrow3: null
    }
  },
  created () {
    this.shoot = this.$store.getters.currentShoot
  },
  methods: {
    validateSend () {
      this.$http.post('/api/ends', {
        id_shoot: this.$store.getters.currentShoot.id,
        arrows: [
          {
            point: this.arrow1
          },
          {
            point: this.arrow2
          },
          {
            point: this.arrow3
          }
        ]
      })
    }
  }
}
</script>

<style>
table {
  width: 100%;
  border: 1px solid gray;
}
td, th {
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
