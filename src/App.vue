<template>
  <div id="app">
    <router-view/>
    <app-tab-bar v-show="!$route.meta.hideTabBar"></app-tab-bar>
  </div>
</template>

<script>

</script>

<style lang="scss">
#app{
  width:100%;
  height:100%;
  /*background:#f5f5f5;*/
}
</style>
