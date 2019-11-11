<template>
  <div class="box">
    <div class="login">
      <p>兑换前请先登录</p>
      <span @click="MoreToLogin">立即登录</span>
    </div>
    <div class="imgbox">
      <div class="left">
        <img src="//yun.duiba.com.cn/images/201910/crwugjcwol.jpg" alt />
      </div>
      <div class="right">
        <img src="//yun.duiba.com.cn/images/201910/r8onusfmp9.jpg" alt />
        <img src="//yun.duiba.com.cn/images/201910/sromdt6k96.jpg" alt />
      </div>
    </div>
    <div class="main1">
      <img src="//yun.duiba.com.cn/images/201903/it3cqrpnj3.png" alt />
      <img src="//yun.duiba.com.cn/images/201804/miaq1o1asn.png" alt />
    </div>
    <div class="main2">
      <div class="left">
        <span>
          <h5>超级会员8折</h5>
          <h6>3元品质联盟专享红包</h6>
        </span>
        <p>72金币</p>
         <span class="duihuan">兑换</span>
       
      </div>
      <div class="right">
        <span>
          <h5>超级会员8折</h5>
          <h6>3元品质联盟专享红包</h6>
        </span>
        <p>72金币</p>
        <span class="duihuan">兑换</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    MoreToLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>