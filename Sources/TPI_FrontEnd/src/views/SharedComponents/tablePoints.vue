<template>
  <div class="pointsTable">
    <table v-if="shoot.ends.length !== 0 || arrows.length !== 0">
      <tr v-for="(end, index) in shoot.ends">
        <td :rowspan="computedRowSpan" class="nbEnd">{{ index + 1 }}</td>
        <td v-if="!multipleLines" v-for="arrow in end.arrows">
          <arrowItem :pointValue="arrow.point"></arrowItem>
        </td >
        <td v-else v-for="arrow in firstPart">
          <arrowItem :pointValue="arrow.point"></arrowItem>
        </td>
        <td :rowspan="computedRowSpan" class="endTotal">
          {{ total(end.arrows) }}
        </td>
      </tr>
      <tr v-if="multipleLines">
        <td v-for="arrow in secondPart">
          <arrowItem :pointValue="arrow.point"></arrowItem>
        </td>
      </tr>
      <tr v-if="!shoot.finished" class="currentEnd">
        <td class="nbEnd">{{ shoot.nb_ends + 1 }}</td>
        <td v-for="arrow in arrows">
          <arrowItem :pointValue="arrow.point"></arrowItem>
        </td>
      </tr>
    </table>
    <div v-else style="padding: 10px;">
      <h3>Begin to shoot !</h3> 
      Selct your points With the selection box and add them !
    </div>
  </div>
</template>

<script>
import arrowItem from '../SharedComponents/arrowItem'
export default {
  name: 'pointsTable',
  components: { arrowItem },
  props: ['arrows', 'shoot'],
  data () {
    return {
      multipleLines: false
    }
  },
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
  },
  computed: {
    computedRowSpan () {
      if (this.shoot.nb_arrows_by_end > 6) {
        this.multipleLines = true
        return 2
      } else {
        return 1
      }
    },
    firstPart () {

    },
    secondPart () {

    }
  }
}
</script>

<style>
tr:nth-child(odd) {
  background-color: #fafafa;
}

table {
  width: 100%;
  border: 1px solid #dadada;
  text-align: center;
}
td, tr {
  padding: 10px 5px;
  text-align: center;
  border-bottom: 1px solid #dadada;
  border-top: 1px solid #dadada;
}
.nbEnd {
  width: 5%;
  border-right: 1px solid #dadada;
}
.currentEnd {
  background-color: #efe;
  border-bottom: 3px solid #41B883;
}
.endTotal {
  border-left: 1px solid #41B883;
}
</style>
