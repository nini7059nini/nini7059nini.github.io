<template>
  <div>
    <div class="header">
      <img
        v-if="tel"
        src="https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/0ff41bd5ad6eddc4ea939a3838dbb6fd536633f8.jpg"
        alt
      />
      <img
        v-else
        src="https://p0.meituan.net/travelcube/7c71ecc4b44d0e17447076cd23e501cb31967.png"
        alt
      />
      <div class="header-text" >
        <h5 v-if="tel" v-text="tel"></h5>
        <h5 v-else @click="MineToLogin">登录/注册</h5>
        <i>></i>
        <h6 v-if="tel" @click="Exit">退出登录</h6>
        <h6 v-else>登录后享受更多特权</h6>
      </div>
    </div>
    <div class="money">
      <p class="red-packet">
        <i class="iconfont icon-hongbao"></i>
        红包
      </p>
      <p class="gold">
        <i class="iconfont icon-jinbi"></i>
        金币
      </p>
    </div>
    <span class="tiao"></span>
    <div class="address">
      <i class="iconfont icon-dizhi"></i>
      <span class="span1">
        我的地址
        <span class="jiantou">></span>
      </span>
    </div>
    <div class="jinbi">
      <span class="tiao"></span>
      <div class="jinbi1">
        <i class="iconfont icon-shouye"></i>
        <span class="span2">
          金币商城
          <span class="jiantou">></span>
        </span>
      </div>
      <div class="jinbi1">
        <i class="iconfont icon-libao"></i>
        <span class="span2">
          分享拿20现金
          <span class="jiantou">></span>
        </span>
      </div>
    </div>
    <span class="tiao"></span>
    <div class="menu">
      <div class="kefu">
        <i class="iconfont icon-kefu"></i>
        <span class="span2">
          我的客服
          <span class="jiantou">></span>
        </span>
      </div>
      <div class="app">
        <img src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" alt />
        <span class="span2">
          下载美团APP
          <span class="jiantou">></span>
        </span>
      </div>
      <div class="rules">
        <i class="iconfont icon-guizeshuoming"></i>
        <span class="span2">
          规则中心
          <span class="jiantou">></span>
        </span>
      </div>
      <div class="yinsi">隐私政策</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: 0
    };
  },
  created() {
    this.logindata();
  },
  methods: {
    MineToLogin() {
      this.$router.push({ name: "login" });
    },
    logindata() {
      window.console.log(this.tel);
      //从localstorage拿数据渲染
      let data = JSON.parse(localStorage.getItem("data"));
      window.console.log(data);
      let val = data.split("&"); //["phone=13333333333", "password=asdasd"]
      window.console.log(val);
      for (let i = 0; i < val.length; i++) {
        let val1 = val[i].split("=");
        if (val1[0] == "phone" && val1[1]) {
          this.tel = val1[1];
        }
      }
      window.console.log(this.tel);
    },
    Exit() {
    window.localStorage.removeItem("data");
    this.$router.push({name:'mine'})
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.tiao {
  width: 100%;
  background-color: rgb(241, 241, 241);
  height: 10px;
  display: block;
}
.header {
  display: flex;
  background-image: linear-gradient(90deg, #f8da81);
  color: #fff;
  height: 100px;
  align-items: center;
}
.header img {
  width: 80px;
  height: 80px;
  margin-left: 10px;
  border-radius: 10px;
  margin-right: 10px;
}
.header-text h5 {
  font-size: 20px;
}
.header-text i {
  position: absolute;
  top: 50px;
  right: 15px;
  font-size: 15px;
}
.header-text h6 {
  margin-top: 5px;
}
.money {
  height: 70px;
  display: flex;
  font-size: 12px;
  text-align: center;
}

.money .red-packet {
  width: 50%;
  border-right: 1px solid #aaa;
}
.money .gold {
  margin-left: 60px;
}
.icon-hongbao {
  margin-top: 10px;
  color: red;
  font-size: 30px;
  display: block;
}
.icon-jinbi {
  margin-top: 10px;
  display: block;
  color: #fff;
  background-color: #58bc58;
  border-radius: 100%;
  font-size: 30px;
}
.icon-dizhi {
  margin-top: 3px;
  margin-left: 5px;
  color: #f7c83e;
  font-size: 20px;
  margin-right: 4px;
}
.address {
  display: flex;
  position: relative;
}
.jiantou {
  position: absolute;
  color: #ccc;
  top: 0;
  right: 0;
}
.span1 {
  font-size: 14px;
  margin-top: 4px;
  height: 30px;
}
.icon-shouye {
  color: #58bc58;
  margin-left: 4px;
}
.icon-libao {
  color: red;
  margin-left: 4px;
}
.jinbi .span2 {
  height: 30px;

  display: inline-block;
  margin-top: 5px;
}

.jinbi1 {
  position: relative;
  border-bottom: 1px solid rgb(228, 226, 226);
}
.app {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(228, 226, 226);
  position: relative;
}
.kefu {
  border-bottom: 1px solid rgb(228, 226, 226);
  height: 40px;
  line-height: 40px;
  position: relative;
}
.rules {
  height: 40px;
  line-height: 40px;
  position: relative;
}
.app img {
  margin-left: 10px;
  width: 20px;
  height: 20px;
}
.icon-kefu {
  margin-left: 10px;
  color: #f7c83e;
}
.icon-guizeshuoming {
  margin-left: 10px;
  color: #f7c83e;
}
.yinsi {
  height: 100px;
  text-align: center;
  color: #f7c83e;
  background-color: rgb(245, 239, 239);
}
</style>