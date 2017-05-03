<template>
  <div class="home">
    <h3>
      Welcome to Shoot4Stats !!!
    </h3>
    <p>This platform allow you to save your Shoots and have some interestings stats about them !</br>
    But first login with Facebook !</p>
    <a href="/api/login/facebook?url=/dashboard">
      <button class="home__loginBtn">
        Login with Facebook
      </button>
    </a>
    <img src="../../assets/archery-target.png" alt="image cible officielle WA" style="float: right;"/>
  </div>
</template>

<style>
.home {
  padding: 10px;
  padding-right: 0px;
}
.home__loginBtn {
  position: fixed;
  height: 50px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  border: none;
  text-align: center;
  color: #35495E;
  background-color: #41B883;
}
</style>
