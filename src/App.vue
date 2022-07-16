<template>
  <router-view></router-view>
</template>

<style lang="sass" src="@/assets/styles/styles.sass"></style>
<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
