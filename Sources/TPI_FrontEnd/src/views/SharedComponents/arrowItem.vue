<template>
  <div class="arrowItem":style="color">
    {{ pointView }}
  </div>
</template>

<script>
export default {
  name: 'arrowItem',
  props: ['pointValue'],
  computed: {
    color () {
      switch (this.pointValue) {
        // TODO : Modif classe au lieu de style
        case 11:
        case 10:
        case 9:
          return 'border: 1px solid #ffee58; background-color: #ffee58;'
        case 8:
        case 7:
          return 'border: 1px solid #ef5350; background-color: #ef5350; color: #fafafa;'
        case 6:
        case 5:
          return 'border: 1px solid #2196f3; color: #fafafa; background-color: #2196f3;'
        case 4:
        case 3:
          return 'border: 1px solid #212121; color: #fafafa; background-color: #212121;'
        case 2:
        case 1:
        case 0:
          return 'border: 1px solid gray; background-color: #fafafa;'
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
.arrowItem {
  line-height: 30px;
  margin: auto;
  text-align: center;
  border-radius: 3px;
  width: 30px;
  height: 30px;
}
</style>
