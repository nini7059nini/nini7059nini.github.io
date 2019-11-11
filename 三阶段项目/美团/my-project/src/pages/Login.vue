<template>
  <div>
    <header>
      <img
        class="logo-img"
        src="https://p0.meituan.net/travelcube/7c71ecc4b44d0e17447076cd23e501cb31967.png"
        alt
      />
    </header>
    <main>
      <van-cell-group>
        <van-field
          v-model="phone"
          required
          clearable
          label="手机号码"
          right-icon="question-o"
          placeholder="请输入手机号码"
          @blur="LoginReg"
        />
        <div class="inf1"></div>

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        <div class="inf2"></div>
      </van-cell-group>
      <p id="button" @click="login">登录</p>
      <h6>未注册的手机号验证后将自动登录</h6>
    </main>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
const qs = require("qs");
import { Field, CellGroup } from "vant";
Vue.use(Field);
Vue.use(CellGroup);
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    login() {
      //非空验证
      if (this.phone.trim() && this.password.trim()) {
        //正则验证
        let telreg = /^1[3-9]\d{9}$/;
        let pswreg = /^[a-zA-Z]\w{5,17}$/;
        let telcheck = telreg.test(this.phone);
        let pswcheck = pswreg.test(this.password);
        if (telcheck && pswcheck) {
          //正则验证成功 发送ajax axios的post请求需加qs.stringify
          this.$axios
            .post(
              "http://localhost:3000/login",
              qs.stringify({
                phone: this.phone,
                password: this.password
              })
            )
            .then(res => {
              if (res.data === true) {
                this.$router.push({ name: "mine" });
                //存数据到localstorage中
                window.localStorage.setItem("data",JSON.stringify(res.config.data)
                );
              }else{
                alert('您已经注册成功！请重新输入')
              }
              window.console.log(res);
            });
        }
      } else {
        $(".inf1").html("手机号码不为空！");
        $(".inf2").html("密码不为空！");
      }
    },
    LoginReg() {
      //正则验证
      let telreg = /^1[3-9]\d{9}$/;
      let pswreg = /^[a-zA-Z]\w{5,17}$/;
      let telcheck = telreg.test(this.phone);
      let pswcheck = pswreg.test(this.password);
      if (!telcheck && !pswcheck) {
        $(".van-field__control").blur(function() {
          $(".inf1").html("手机号码不合法！");
        });
        $(".van-field__control").blur(function() {
          $(".inf2").html("密码不合法！");
        });
      }
    }
  }
};
</script>
<style scoped>
.inf1,
.inf2 {
  color: red;
  font-size: 0.4rem;
  margin-left: 0.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
}
header {
  margin: 20px;
  margin-left: 110px;
}
.logo-img {
  width: 100px;
  height: 100px;
  display: block;
}
.code {
  position: relative;
}
.code span {
  position: absolute;
  top: 26px;
  right: 19px;
  font-size: 12px;
}
#button {
  opacity: 1;
  width: 250px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  color: #222222;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 40px;
  background-color: #fe8c00;
  background-image: linear-gradient(-133deg, #ffbd00 0%, #ffd000 100%);
}
h6 {
  color: #999;
  text-align: center;
  margin-top: 10px;
}
</style>