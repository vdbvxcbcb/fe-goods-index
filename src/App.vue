<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar/>
  </div>
</template>

<script>
import "assets/icon/iconfont.css";
import TabBar from "common/tabBar/TabBar"
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
</style>
