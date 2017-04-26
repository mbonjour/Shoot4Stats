/* eslint-disable */
<template>
  <div id="app">
    <nav style="background-color: #35495E;">
      <div class="nav-wrapper">
        <router-link to="/dashboard" class="brand-logo center">Shoot4Stats</router-link>
        <a data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="left hide-on-med-and-down">
          <li v-if="!user.logged"><router-link to="/">Home</router-link></li>
          <li v-if="user.logged"><router-link to="/dashboard">Home</router-link></li>
          <li v-if="isAdmin"><router-link to="/administration">Users (admins only)</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li v-if="!user.logged"><router-link to="/">Home</router-link></li>
          <li v-if="user.logged"><router-link to="/dashboard">Home</router-link></li>
          <li v-if="isAdmin"><router-link to="/administration">Users (admins only)</router-link></li>
        </ul>
        <ul class="right">
          <li v-if="user.logged"><a href="/api/login/logout"><i class="material-icons">power_settings_new</i></a></li>
          <li v-if="!user.logged"><a href="/api/login/facebook?url=/dashboard"><i class="material-icons">perm_identity<!--mode_edit--></i></a></li>
        </ul>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
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
    this.$store.dispatch('updateUser')
    /* eslint-disable */
    $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    })
  },
  computed : {
    ...mapGetters(['user']),
    isAdmin () {
      if (this.user.user) {
        if (this.user.user.is_admin) {
          return this.user.user.is_admin
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
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
h3 {
  color: #41B883;
}
</style>
