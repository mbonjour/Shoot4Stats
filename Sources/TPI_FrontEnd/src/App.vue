/* eslint-disable */
<template>
  <div id="app">
    <nav style="background-color: #35495E;">
      <div class="nav-wrapper">
        <a class="brand-logo">Shoot4Stats</a>
        <a data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li v-if="!logged"><router-link to="/">Home</router-link></li>
          <li v-if="logged"><router-link to="/dashboard">Home</router-link></li>
          <li v-if="admin"><router-link to="/administration">Users (admins only)</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li v-if="!logged"><router-link to="/">Home</router-link></li>
          <li v-if="logged"><router-link to="/dashboard">Home</router-link></li>
          <li v-if="admin"><router-link to="/administration">Users (admins only)</router-link></li>
        </ul>
        <ul class="right">
          <li v-if="logged"><a href="/api/login/logout"><i class="material-icons">power_settings_new</i></a></li>
          <li v-if="!logged"><a href="/api/login/facebook?url=/dashboard"><i class="material-icons">perm_identity<!--mode_edit--></i></a></li>
        </ul>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      logged: false,
      admin: false
    }
  },
  mounted () {
    this.$events.$on('toastError', (message) => {
      /*eslint-disable*/
      Materialize.toast(message, 5000, 'errorToast')
      /*eslint-enable*/
    })
    this.$events.$on('toastSuccess', (message) => {
      /*eslint-disable*/
      Materialize.toast(message, 3000, 'successToast')
      /*eslint-enable*/
    })
    this.$http.get('/api/login/me')
    .then((response) => {
      this.logged = response.data.logged
      if (this.logged) {
        this.admin = response.data.user.is_admin
      }
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.successToast {
  background-color: #41B883;
}
.errorToast {
  background-color: #ef5350;
}
</style>
