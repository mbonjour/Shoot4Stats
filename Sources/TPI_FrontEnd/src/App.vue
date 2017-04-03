/* eslint-disable */
<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#!"
           class="brand-logo">Logo</a>
        <a href="#"
           data-activates="mobile-demo"
           class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
        <ul class="side-nav"
            id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    </nav>
    <!-- Mettre ici Layout sympa, gèrer ici les menus -> bonne idée ? -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    /* eslint-disable */
    console.log(this)
    $('.button-collapse').sideNav()
  }
}
</script>

<style>

</style>
