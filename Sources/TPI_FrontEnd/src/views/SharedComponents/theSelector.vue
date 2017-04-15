<template>
  <div class="theSelector">
    <!--<select :value="currentArrow"
            ref="arrow"
            class="browser-default selectPoint"
            @input="updateValue()">
      <option disabled
              value="">Select here and hit add !</option>
      <option value="0">M</option>
      <option v-for="i in 10">{{ i }}</option>
      <option value="11">X</option>
    </select>-->
    <table class="selectPoint">
      <tr>
        <td @click="updateValue('0')">
          <arrow-item :pointValue="0"></arrow-item>
        </td>
        <td @click="updateValue('1')">
          <arrow-item :pointValue="1"></arrow-item>
        </td>
        <td @click="updateValue('2')">
          <arrow-item :pointValue="2"></arrow-item>
        </td>
        <td @click="updateValue('3')">
          <arrow-item :pointValue="3"></arrow-item>
        </td>
        <td @click="updateValue('4')">
          <arrow-item :pointValue="4"></arrow-item>
        </td>
        <td @click="updateValue('5')">
          <arrow-item :pointValue="5"></arrow-item>
        </td>
      </tr>
      <tr>
        <td @click="updateValue('6')">
          <arrow-item :pointValue="6"></arrow-item>
        </td>
        <td @click="updateValue('7')">
          <arrow-item :pointValue="7"></arrow-item>
        </td>
        <td @click="updateValue('8')">
          <arrow-item :pointValue="8"></arrow-item>
        </td>
        <td @click="updateValue('9')">
          <arrow-item :pointValue="9"></arrow-item>
        </td>
        <td @click="updateValue('10')">
          <arrow-item :pointValue="10"></arrow-item>
        </td>
        <td @click="updateValue('11')">
          <arrow-item :pointValue="11"></arrow-item>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ArrowItem from './arrowItem'
export default {
  name: 'theSelector',
  components: {ArrowItem},
  props: ['value'],
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    updateValue (value) {
      this.selected = value
      this.$emit('input', value)
    }
  },
  computed: {
    styleSelected () {
    }
  }
}
</script>

<style scoped>
.selectPoint {
  width: 100%;
  position: fixed;
  bottom: 50px;
}
</style>
