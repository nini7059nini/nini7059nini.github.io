<template>
  <div>
    <!-- 外层路由 -->
    <router-view />
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "../components/Tabbar.vue";
export default {
  components: {
    Tabbar
  }
};
</script>