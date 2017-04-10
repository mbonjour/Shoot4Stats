<template>
  <div class="pointsTable">
    <table>
      <tr v-for="(end, index) in this.$store.getters.currentEditingShoot.ends">
        <td class="nbEnd">{{ index + 1 }}</td>
        <td v-for="arrow in end.arrows">
          <arrowItem :pointValue="arrow.point"></arrowItem>
        </td>
        <td>
          {{ total(end.arrows) }}
        </td>
      </tr>
      <tr v-if="!this.$store.getters.currentEditingShoot.finished">
        <td class="nbEnd">Current End</td>
        <td v-for="arrow in arrows">
          <arrowItem :pointValue="arrow.point"></arrowItem>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import arrowItem from '../SharedComponents/arrowItem'
export default {
  name: 'pointsTable',
  components: { arrowItem },
  props: ['arrows'],
  methods: {
    total (arrowsArray) {
      let result = 0
      arrowsArray.map((arrow) => {
        let currentArrow = 0
        if (arrow.point === 11) {
          currentArrow = 10
        } else {
          currentArrow = arrow.point
        }
        result += currentArrow
      })
      return result
    }
  }
}
</script>

<style>
tr:nth-child(odd) {
  background-color: #ccc;
}

table {
  width: 100%;
  border: 1px solid gray;
  text-align: center;
}

td,
tr {
  text-align: center;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
}
.nbEnd {
  width: 5%;
}
</style>
