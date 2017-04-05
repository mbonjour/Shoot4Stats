<template>
  <div class="arrowItem">
    <div class="pastillePoint" :style="color">{{ pointView }}</div>
  </div>
</template>

<script>
export default {
  name: 'arrowItem',
  props: ['pointValue'],
  computed: {
    color () {
      /* eslint-disable */
      console.log(this.pointValue)
      switch (this.pointValue) {
        case 11:
        case 10:
        case 9:
          return 'border: 1px solid yellow'
        case 8:
        case 7:
          return 'border: 1px solid red'
        case 6:
        case 5:
          return 'border: 1px solid blue'
        case 4:
        case 3:
          return 'border: 1px solid black'
        case 2:
        case 1:
        case 0:
          return 'border: 1px solid white'
        default:
          return 'border: 1px solid green'
      }
    },
    pointView () {
      switch (this.pointValue) {
        case 11:
          return 'X'
        case 0:
          return 'M'
        default:
          return this.pointValue
      }
    }
  }
}

</script>

<style scoped>
div {
  margin: auto;
}
.pastillePoint {
  border-radius:50%;
  width:30px;
  height:30px;
}
</style>
