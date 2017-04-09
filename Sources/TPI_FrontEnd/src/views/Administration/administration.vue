<template>
  <div class="administration">
    <div v-for="user in users">
      <userItem :user="user"></userItem>
    </div>
  </div>
</template>

<script>
import userItem from './userItem'
export default {
  components: { userItem },
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.$http.get('/api/users').then((response) => {
      this.users = response.data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>
