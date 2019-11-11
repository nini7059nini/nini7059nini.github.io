<template>
  <div class="box">
    <!--最外层div 透明遮罩-->
    <div id="cont">
      <!--居中显示视图-->
      <!-- style="display: {{nones}};" -->
      <div class="dislog">
        <!--内容-->
        <div class="dis_cont">
          <div class="cont_dis">确定购买</div>
          <div class="dis_bott">
            <label class="left_name" @click="cances()">取消</label>
            <label class="right_name" @click="submits()">确认</label>
          </div>
        </div>
      </div>
      <!--列表-->
      <div id="list" v-for="(item,index) in itemcard" :key="index">
        <!--icon选中/未选中ICON-->
        <i v-if="itemcard[0][0].selected" class="list_icon iconfont icon-ziyuan" @click="radios(index)" />
        <i else="!itemcard[0][0].selected" class="list_icon iconfont icon-ziyuan" @click="radios(index)" />
        <!--列表图片-->
        <img class="list_img" :src="item[0].img" @click="delerte(index)" />
        <!--列表名称-->
        <label class="list_name">{{item[0].name}}</label>
        <!--列表标题-->
        <label class="list_title">{{item[0].xinxi}}</label>
        <!--列表价格-->
        <label class="money">{{item[0].xianjia}}</label>
        <!--加减功能  文本框数量-->
        <div class="sum_cont">
          <label class="minute" @click="btn_minute(index)">-</label>
          <input class="input" v-model="item[0].num" />
          <label class="add" @click="btn_add(index)">+</label>
        </div>
      </div>

      <!--底部固定样式-->
      <div class="bottom">
        <!--已获得数量-->
        <label class="bott_num">已获得：{{num}}</label>
        <!--总价-->
        <label class="bott_money">总和：{{money}}</label>
        <!--结算-->
        <label class="btn_sub" @click="btn_sub()">结算</label>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
import { Card, Button, Tag } from "vant";
import "../assets/iconfont/iconfont.css";
Vue.use(Card);
Vue.use(Button);
Vue.use(Tag);
export default {
  data() {
    return {
      //默认总价
      money: 0,
      //默认总数量
      num: 0,
      //数据
      itemcard:[],
      //					购物车假数据
      list: [
        {
          name: "养护液",
          num: 1,
          money: 10,
          src:
            "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/0ff41bd5ad6eddc4ea939a3838dbb6fd536633f8.jpg",
          title: "养护液",
          selected: true
        },
        {
          name: "养护液",
          num: 1,
          money: 10,
          src:
            "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/0ff41bd5ad6eddc4ea939a3838dbb6fd536633f8.jpg",
          title: "养护液",
          selected: false
        },
        {
          name: "养护液",
          num: 1,
          money: 10,
          src:
            "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/0ff41bd5ad6eddc4ea939a3838dbb6fd536633f8.jpg",
          title: "养护液",
          selected: true
        },
        {
          name: "养护液",
          num: 1,
          money: 10,
          src:
            "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/0ff41bd5ad6eddc4ea939a3838dbb6fd536633f8.jpg",
          title: "养护液",
          selected: true
        },
        {
          name: "养护液",
          num: 1,
          money: 10,
          src:
            "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/0ff41bd5ad6eddc4ea939a3838dbb6fd536633f8.jpg",
          title: "养护液",
          selected: true
        }
      ]
    };
  },
  //初始化加载   显示总价总数量
  created() {
    this.getData();
    var price = 0;
    var numb = 0;
    var list = this.itemcard[0]; //数据
    for (var i = 0; i < list.length; i++) {
      if (list[i].selected) {
        //为勾选的状态 则计算总价 总数量
        price += list[i].num * list[i].money; //数量乘以单价=总价
        numb += list[i].num*1;
      }
    }
    this.money = price;
    this.num = numb;
    window.console.log(numb);
    window.console.log(price);
  },
  methods: {
    //总价总数量方法   方便调用   再次多写了一次[可以跟初始化封装为一个方法]
    hh: function() {
      var price = 0;
      var numb = 0;
      var list = this.itemcard[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i].selected) {
          price += list[i].num * list[i].xianjia;
          numb += list[i].num*1;
        }
      }
      this.money = price;
      this.num = numb;
      window.console.log(numb);
    },
    //删除购物车列表
    delerte: function(index) {
      this.itemcard.splice(index, 1);
      this.money="0";
      this.num="0";

    },
    //选中未选中
    radios: function(index) {
      var list = this.itemcard[0];
      list[index].selected = !list[index].selected;
      this.hh();
      window.console.log(list[index].selected);
    },
    //添加
    btn_add: function(index) {
      var list = this.itemcard[0];
      var num = list[index].num;
      num = num *1+ 1;
      list[index].num = num;
      this.hh();
    },
    //减去
    btn_minute: function(index) {
      var list = this.itemcard[0];
      var num = list[index].num;
      if (num > 1) {
        num = num - 1;
        list[index].num = num;
      }
      this.hh();
    },
    //点击结算
    btn_sub() {
      $(".dislog").css("display", "block");
    },
    //确定
    submits() {
      window.location.href = "http://localhost:8080/finish?"+this.itemdata;
      window.localStorage.setItem("money",JSON.stringify(this.money));
    },
    //取消
    cances() {
      $(".dislog").css("display", "none");
    },
    //拿数据库对应的数据
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
       window.localStorage.setItem("list",JSON.stringify(this.itemcard))
        });
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
/*清除一下margin-padding*/

body {
  margin: 0 auto;
  padding: 0;
  background-color: #f5f5f5;
}
/*购物车列表样式*/

#list {
  position: relative;
  top: 10px;
  width: 100%;
  height: 130px;
  background-color: #fff;
  margin-bottom: 10px;
}
/*选中未选中ICON*/

.list_icon {
  position: absolute;
  width: 35px;
  height: 35px;
  top: 35px;
  left: 20px;
}
.icon-ziyuan:nth-child(1) {
  color: #000;
}
.icon-ziyuan:nth-child(2) {
  color: #58bc58;
}
/*列表图*/

.list_img {
  position: absolute;
  width: 80px;
  height: 80px;
  left: 55px;
  top: 20px;
}
/*列表名称*/

.list_name {
  position: absolute;
  top: 30px;
  left: 150px;
}
/*列表标题*/

.list_title {
  position: absolute;
  top: 55px;
  left: 150px;
  font-size: 10px;
  color: #cccccc;
}
/*money*/

.money {
  position: absolute;
  top: 78px;
  left: 150px;
  font-size: 15px;
  color: #ec971f;
}
/* 总数量*/

.sum_cont {
  position: absolute;
  right: 0;
  bottom: 7px;
  width: 130px;
  height: 30px;
  line-height: 30px;
}
/*减号*/

.minute {
  position: absolute;
  width: 25px;
  text-align: center;
  height: 20px;
  line-height: 20px;
  left: 9px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #dd524d;
}
/*加号*/

.add {
  width: 25px;
  border: 1px solid #dd524d;
  height: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  right: 10px;
  border-radius: 5px;
  font-size: 18px;
}
/*文本框*/

.input {
  width: 35px;
  height: 18px;
  display: inline-block;
  line-height: 18px;
  text-align: center;
  position: absolute;
  right: 45px;
}
/*底部固定样式*/

.bottom {
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  bottom: 45px;
  background-color: #323232;
}
/*总价*/

.bott_money {
  padding-left: 20px;
  color: #fff;
}
/*总数量*/

.bott_num {
  padding-left: 50px;
  color: #fff;
}
/*点赞*/

.btn_sub {
  position: absolute;
  right: 0;
  width: 100px;
  height: 60px;
  line-height: 60px;
  background-color: #ffbf00;
  color: #fff;
  text-align: center;
}
/*弹窗*/

.dislog {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: none;
  text-align: center;
  background-color: #000;
  opacity: 0.8;
}

.dis_cont {
  position: relative;
  border-radius: 10px;
  top: 25%;
  width: 80%;
  display: inline-block;
  text-align: center;
  height: 160px;
  background-color: #ffbf00;
}
/*确认取消*/

.dis_bott {
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid #ddd;
  width: 100%;
  height: 70px;
  background-color: #f5f5f5;
  bottom: 0px;
}
/*取消按钮*/

.left_name {
  position: absolute;
  border-bottom-left-radius: 10px;
  text-align: center;
  left: 0px;
  width: 50%;
  height: 70px;
  line-height: 70px;
  background-color: #fff;
}
/*确认*/

.right_name {
  position: absolute;
  text-align: center;
  border-bottom-right-radius: 10px;
  right: 0px;
  width: 49%;
  height: 70px;
  line-height: 70px;
  background-color: #fff;
}
/* 提示*/

.cont_dis {
  position: relative;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 90px;
  font-size: 20px;

  display: flex;
  align-items: center;
  color: #fff;
  box-sizing: border-box;
  padding: 20px 20px;
}
</style>