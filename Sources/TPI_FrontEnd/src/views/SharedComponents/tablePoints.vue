<template>
  <div class="pointsTable">
    <table>
      <tr v-for="(end, index) in this.$store.getters.currentShoot.ends">
        <td class="nbEnd">End {{ index + 1 }}</td>
        <td v-for="arrow in end.arrows">
          <arrowItem :pointValue="arrow.point"></arrowItem>
        </td>
      </tr>
      <tr v-if="!this.$store.getters.currentShoot.finished">
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
  props: ['arrows']
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
</style>
