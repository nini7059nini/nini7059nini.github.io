<template>
  <div class="box">
    <van-nav-bar title="提交订单" left-text left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="itemcard.length>0">
      <p class="shopname">{{itemcard[0][0].name}}</p>
      <ul class="form">
        <li>
          <h5>单价:</h5>
          <h6>{{itemcard[0][0].xianjia}}元</h6>
        </li>
        <li>
          <h5>数量:</h5>

          <van-stepper v-model="value" />
        </li>
        <li>
          <h5>总价:</h5>
          <h6 class="zongjia">{{itemcard[0][0].xianjia}}元</h6>
        </li>
      </ul>
      <p class="submit" @click="SubmitToOrder2">提交订单</p>
      <h4>
        请登录后进行购买，去
        <a href="http://localhost:8080/login">登录</a>
      </h4>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Stepper } from "vant";
import "../assets/submit.css";
import $ from "jquery";
Vue.use(Stepper);
Vue.use(NavBar);
export default {
  data() {
    return {
      itemdata: "",
      //card数据
      itemcard: [],
      //input的数量
      num: 1,
      value: 1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "home" });
    },
    SubmitToOrder2() {
      window.location.href =
        "http://localhost:8080/main/order?" + this.itemdata;
    },
    getData() {
      this.itemdata = decodeURI(window.location.search).slice(1); //?之后的参数
      window.console.log(this.itemdata);
      this.$axios
        .get("http://localhost:3000/getitem", {
          params: {
            name: this.itemdata
          }
        })
        .then(data => {
          this.itemcard.push(data.data);
          window.console.log(data.data);
        });
    },
    //加
    add(num) {
      this.num = num + 1;
    },
    //减
    dec(num) {
      if (this.num <= 0) {
        $(".warn").html("至少购买一件哦~");
      } else {
        this.num = num - 1;
        $(".warn").html("欢迎选购");
      }
    }
  }
};
</script>
<style  scoped>
* {
  padding: 0;
  margin: 0;
}
.warn {
  top: 0;
  left: -100px;
  position: absolute;
  width: 100px;
  margin-top: 5px;
  color: orange;
}
</style>