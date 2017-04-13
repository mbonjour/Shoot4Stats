<template>
  <div class="home">
    <h3>
      Welcome to Shoot4Stats !!!
    </h3>
    <p>This platform allow you to save your Shoots and have some interestings stats about them !</p>
    <a href="/api/login/facebook?url=/dashboard">
      <button class="loginBtn">
        Login with Facebook
      </button>
    </a>
    <img src="../../assets/archery-target.png" alt="image cible officielle WA" style="float: right;"/>
  </div>
</template>

<style scoped>
.home {
  padding: 10px;
  padding-right: 0px;
}
.loginBtn {
  position: fixed;
  height: 50px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  border: none;
  text-align: center;
  color: #FFF;
  background-color: #35495E;
}
</style>
