<template>
  <div class="admiistration">
    <p v-for="user in users">{{ user.id }}, {{ user.first_name }}, {{ user.last_name }}, {{ user.email }}</p>
  </div>
</template>

<script>
export default {
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
