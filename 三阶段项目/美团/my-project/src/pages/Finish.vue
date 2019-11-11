<template>
  <div>
    <van-nav-bar title="支付订单" left-text left-arrow @click-left="onClickLeft" />
    <div class="timer">
      <span>支付剩余时间</span>
      <van-count-down :time="time" />
    </div>
    <p class="price">
      <span>￥</span>{{data}}
    </p>
    <div class="imgbox">
        <img class="img2" src="https://img.meituan.net/pay/weixin_g2.png" alt="">
<img class="img1" src="https://img.meituan.net/pay/b11b4e84c8e8e4eac3124b652cca1c4d2955.png" alt="">
    </div>

    <van-radio-group v-model="radio" checked-color='orange'>
      <van-cell-group>
        <van-cell title="美团支付" clickable @click="radio = '1'">
          <van-radio slot="right-icon" name="1" />
        </van-cell>
        <van-cell title="微信支付" clickable @click="radio = '2'">
          <van-radio slot="right-icon" name="2" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <p class="zhifu">确认支付</p>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, CountDown, RadioGroup, Radio, CellGroup, Cell } from "vant";
Vue.use(NavBar);
Vue.use(CountDown);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(CellGroup);
Vue.use(Cell);
export default {
  data() {
    return {
      time: 24 * 60 * 60 * 1000,
      radio: "1",
      data:[]
    };
  },
  created(){
      this.getdata()
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "order" });
    },
    getdata(){
    let data = JSON.parse(localStorage.getItem('money'));
    this.data=data;
       window.console.log(data)
    }
  }
};
</script>
<style scoped>
.van-nav-bar {
  background-color: rgb(245, 243, 243);
  z-index: 2;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #999;
  position: relative;
}
.van-nav-bar__title {
  color: #000;
  font-size: 16px;
}
.van-icon-arrow-left:before {
  color: #000;
  font-size: 18px;
  position: absolute;
  top: -10px;
  left: -10px;
}
.timer {
  display: flex;
  margin-left: 100px;
  margin-top: 30px;
  font-size: 14px;
}
.price {
  font-size: 30px;
  margin-top: -260px;
  margin-left: 95px;
  font-weight: 500;
}
.price span {
  font-size: 20px;
  margin-right: 15px;
}
.van-cell-group {
  margin-top: 70px;
}
.imgbox{
    position: relative;
    width: 20px;
    height: 20px;
}
.img1{
position: absolute;
top: 106px;
left:0;
width: 20px;
height: 20px;
z-index: 99;
}
.img2{
position: absolute;
top: 146px;
left:0;
width: 20px;
height: 20px;
z-index: 99;
}
.van-cell__title{
    margin-left: 30px;
}
.zhifu{
height: 40px;
width: 270px;
font-size: 16px;
line-height: 40px;
margin-left: 30px;
text-align: center;
background-color: #FFBD00;
margin-top: 230px;
}
</style>