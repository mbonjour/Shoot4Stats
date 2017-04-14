<template>
  <div class="pointsTable">
    <table v-if="shoot.ends.length !== 0 || arrows.length !== 0">
      <div v-for="(end, index) in shoot.ends">
        <tr>
          <td :rowspan="computedRowSpan" class="nbEnd">{{index + 1}}</td>
          <td v-if="!multipleLines" v-for="arrow in end.arrows">
            <arrowItem :pointValue="arrow.point"></arrowItem>
          </td >
          <td v-for="arrow in firstPart(end.arrows)">
            <arrowItem :pointValue="arrow.point"></arrowItem>
          </td>
          <td :rowspan="computedRowSpan" class="endTotal">
            {{total(end.arrows)}}
          </td>
        </tr>
        <tr v-if="multipleLines">
          <td v-for="arrow in secondPart(end.arrows)">
            <arrowItem :pointValue="arrow.point"></arrowItem>
          </td>
        </tr>
      </div>
      <div>
        <tr v-if="!shoot.finished" class="currentEnd">
          <td :rowspan="computedRowSpan" class="nbEnd">{{ shoot.nb_ends + 1 }}</td>
          <td v-if="!multipleLines" v-for="arrow in arrows">
            <arrowItem :pointValue="arrow.point"></arrowItem>
          </td>
          <td v-if="multipleLines" v-for="arrow in firstPart(arrows)" class="removeCurrentEnd">
            <arrowItem :pointValue="arrow.point"></arrowItem>
          </td>
        </tr>
        <tr v-if="multipleLines && !shoot.finished" class="currentEnd">
          <td v-for="arrow in secondPart(arrows)">
            <arrowItem :pointValue="arrow.point"></arrowItem>
          </td>
        </tr>
      </div>
    </table>
    <div v-else style="padding: 10px;">
      <h3>Begin to shoot !</h3> 
      Selct your points with the selection box and add them !
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
      multipleLines: false,
      currentEnd: []
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
    },
    firstPart (arrowsArray) {
      let result = []
      for (let i = 0; i < (arrowsArray.length / 2); i++) {
        if (arrowsArray[i]) {
          result.push(arrowsArray[i])
        }
      }
      console.log(result)
      return result
    },
    secondPart (arrowsArray) {
      let result = []
      for (let i = (arrowsArray.length / 2); i < arrowsArray.length; i++) {
        if (arrowsArray[i]) {
          result.push(arrowsArray[i])
        }
      }
      console.log(result)
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
  width: 15%;
}
.removeCurrentEnd {
  border: none;
}
</style>
