<template>
  <div>
    <van-nav-bar
      title="团购详情"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <i class="iconfont icon-shoucang1"></i>
    <p class="size1">收藏</p>
    <i class="iconfont icon-daohang"></i>
    <div class="size2" @click="hide">
      导航
      <div class="nav-right" v-if="show">
        <router-link to="main/home" class="iconfont icon-1">首页</router-link>
        <router-link to="main/mine" class="iconfont icon-wode">我的</router-link>
      </div>
    </div>
    <div class="imgbox"></div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import "../assets/iconfont/iconfont.css";
Vue.use(NavBar);
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "home" });
    },
    onClickRight() {},
    //点击导航显示隐藏
    hide() {
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.van-nav-bar {
  background-color: #06c1ae;
  position: relative;
  height: 50px;
}
.van-nav-bar__title {
  margin-left: 70px;
  font-size: 18px;
  color: #fff;
}
.van-icon-arrow-left {
  font-size: 35px;
  color: #fff;
}
.van-nav-bar__text {
  color: #fff;
  font-size: 10px;
}
.icon-daohang {
  color: #fff;
  position: absolute;
  top: 8px;
  z-index: 1;
  right: 18px;
  font-size: 16px;
}
.icon-shoucang1 {
  color: #fff;
  position: absolute;
  top: 7px;
  z-index: 1;
  right: 52px;
  font-size: 20px;
}
.size1 {
  position: absolute;
  top: 30px;
  z-index: 1;
  right: 52px;
  font-size: 10px;
  color: #fff;
}
.size2 {
  position: absolute;
  top: 30px;
  z-index: 1;
  right: 17px;
  color: #fff;
  font-size: 10px;
}
.nav-right {
  position: absolute;
  top: 22px;
  right: -15px;
  width: 100px;
  font-size: 12px;
  background-color: #06c1ae;
  opacity: 0.7;
  text-align: center;
}
.icon-1 {
  color: #fff;
  display: block;
  border-bottom: 1px solid rgb(126, 125, 125);
}
.icon-wode {
  color: #fff;
  display: block;
}
.imgbox {
  display: block;
  height: 94px;
  width: 100%;
  max-width: 400px;
  background: url("//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@44d57b8")
    center center no-repeat #e0e0e0;
  background-size: 100% auto;
}
</style>