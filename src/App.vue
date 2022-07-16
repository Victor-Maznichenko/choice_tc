<template>
  <router-view></router-view>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
</style>
<style lang="sass" src="@/assets/styles/styles.sass"></style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
#app{
  font-family: "Bebas Neue";
}
nav {
  padding: 30px;
  .title{
    font-weight: 400;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
