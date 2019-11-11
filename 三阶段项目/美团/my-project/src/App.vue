<template>
  <div id="app">
    <!--app为最外层路由 -->
   <router-view />
  </div>
</template>

<script>
import './assets/iconfont/iconfont.css'

export default {
  name: 'app',
  components: {
  
  }
}
</script>
<style lang="scss">
@import 'assets/detail.scss';
@import 'assets/more.scss';
@import 'assets/food.scss';
</style>




