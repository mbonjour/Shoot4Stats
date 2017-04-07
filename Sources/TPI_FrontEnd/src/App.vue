/* eslint-disable */
<template>
  <div id="app">
    <nav style="background-color: #41B883;">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Shoot4Stats</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li v-if="logged"><router-link to="/dashboard">Dashboard</router-link></li>
          <li v-if="logged"><router-link to="/createShoot">Create A Shoot !</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><router-link to="/">Home</router-link></li>
          <li v-if="logged"><router-link to="/dashboard">Dashboard</router-link></li>
          <li v-if="logged"><router-link to="/createShoot">Create A Shoot !</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      logged: false
    }
  },
  mounted () {
    this.$http.get('/api/login/me')
    .then((response) => {
      this.logged = response.data.logged
    })
    /* eslint-disable */
    $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    })
  }
}
</script>
