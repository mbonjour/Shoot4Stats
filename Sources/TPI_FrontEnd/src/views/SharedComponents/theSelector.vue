<template>
  <div class="theSelector">
    <select :value="currentArrow"
            ref="arrow"
            class="browser-default selectPoint"
            @input="updateValue()">
      <option disabled
              value="">Select here and hit add !</option>
      <option value="0">M</option>
      <option v-for="i in 10">{{ i }}</option>
      <option value="11">X</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'theSelector',
  props: ['value'],
  data () {
    return {
      prout: ''
    }
  },
  methods: {
    updateValue () {
      this.$emit('input', this.$refs.arrow.value)
    }
  }
}
</script>

<style scoped>
.selectPoint {
  width: 100%;
  position: fixed;
  bottom: 50px;
  height: 50px;
  background-color: #efe;
  text-align-last: center;
  text-align: center;
  font-weight: bold;
  font-size: larger;
  color: #41B883;
  padding: 0 0 0 20px;
}
</style>
