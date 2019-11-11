<template>
  <div>
    <header>我的订单</header>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <Order1 />
      </van-tab>
      <van-tab title="待付款">   <Order2 /></van-tab>
      <van-tab title="待使用"> <Order1 /></van-tab>
      <van-tab title="待评价"> <Order1 /></van-tab>
      <!-- <van-tab title="退款/售后">退款/售后</van-tab> -->
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import Order1 from "../component(order)/Order1";
import Order2 from "../component(order)/Order2";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    Order1,
    Order2
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
header {
 
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  font-size: 0.6rem;
  background-color: #fdc800;

}


</style>