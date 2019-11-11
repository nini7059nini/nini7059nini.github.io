<template>
  <div>
    <van-nav-bar
      :class="isFixed== true?'isFixed':''"
      title="猫眼电影"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs :sticky="true" v-model="activeName" :offset-top="50">
      <van-tab title="正在热映" name="a">
        <Movie1 :class="iftop== true?'iftop':''" />
      </van-tab>
      <van-tab title="即将上映" name="b">
        <Movie2 :class="iftop== true?'iftop':''" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import Movie1 from "../component(movie)/Movie1";
import Movie2 from "../component(movie)/Movie2";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      activeName: "a",
      isFixed: false,
      isFixed2: false,
      iftop: false
    };
  },
  components: {
    Movie1,
    Movie2
  },
  //挂载之后 m和v都完成了数据的更新 事件监听scroll
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 在mounted调用，以及在最后销毁这个方法，要不然会在别的组件也会出现这个滚动事件，会引发一些列的bug
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "home" });
    },
    //吸顶菜单
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //当滚动超过50px,实现吸顶效果
      if (scrollTop >= 0) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
      if (scrollTop > 10) {
        this.iftop = false;
      } else {
        this.iftop = true;
      }
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.iftop {
  margin-top: 70px;
}
.isFixed {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
.van-nav-bar {
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: rgb(243, 64, 64);
}
.van-nav-bar__title {
  color: #fff;
  font-size: 18px;
  margin-left: 60px;
}
.van-icon-arrow-left {
  color: #fff;
  font-size: 20px;
}
.van-button--mini {
  width: 60px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  margin-top: -40px;
}
.van-card__title {
  font-size: 17px;
}
.van-list {
  margin-top: 2px;
}
.van-card__price {
  font-size: 16px;
}
.van-tag--plain {
  color: #999;
  font-size: 14px;
  display: block;
}
.van-tag--plain:nth-child(2) {
  color: #f03d37;
}
.van-hairline--surround::after {
  border: none !important;
}
.van-ellipsis {
  font-size: 16px;
}
.van-card__price {
  color: orange;
  font-weight: 700;
}
.van-card__content {
  background-color: #fff;
}
.van-image {
  width: 80px !important;
  text-align: center;
  margin-left: 4px;
  background-color: #fff !important;
}
</style>

