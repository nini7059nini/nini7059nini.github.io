<template>
  <div>
    <div class="header">
      <span class="left">
        <div class="leftText">
          <h5 class="h5-1">金币商城</h5>
          <h6 class="h6-1">0元好物在这里</h6>
        </div>
        <img
          src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"
          alt
        />
      </span>
      <span class="right">
        <div class="rightbox">
          <div class="rightText">
            <h5 class="h5-2">推荐有奖</h5>
            <h6 class="h6-2">20元现金拿不停</h6>
          </div>
          <img
            class="img1"
            src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"
            alt
          />
        </div>
        <div class="rightbox">
          <div class="rightText">
            <h5 class="h5-3">周边优惠</h5>
            <h6 class="h6-3">领取口碑好券</h6>
          </div>
          <img
            class="img2"
            src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"
            alt
          />
        </div>
      </span>
    </div>
    <div class="center">
      <p class="tiao"></p>
      <div class="title">
        <span class="xianshi">限时好礼</span>
        <h6>金币换好礼</h6>
      </div>
      <div class="pics">
        <img
          src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp"
          alt
        />
        <img
          src="https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp"
          alt
        />
        <img
          src="https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp"
          alt
        />
      </div>
      <div class="pics-title">
        <div>
          <h5>3元品质联盟红包</h5>
          <span>
            <h6>90金币</h6>
            <p>¥3</p>
          </span>
        </div>

        <div>
          <h5>数码经络按摩仪</h5>
          <span>
            <h6>9金币</h6>
            <p>¥239</p>
          </span>
        </div>

        <div>
          <h5>机械手感背光键盘套装</h5>
          <span>
            <h6>9金币</h6>
            <p>¥130</p>
          </span>
        </div>
      </div>
      <div class="more" @click="RecoverToMore">查看更多</div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    RecoverToMore(){
      this.$router.push({name:'more'})
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.header {
  height: 150px;
  display: flex;
  font-size: 16px;
}
.left {
  display: flex;
  width: 50%;
  position: relative;
  border-right: 1px solid rgb(231, 231, 231);
}
.left img {
  position: absolute;
  top: 70px;
  right: 5px;
  width: 70px;
  height: 70px;
}
.right {
  width: 50%;
}
.right img {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.leftText {
  margin-left: 10px;
}
.rightbox {
  display: flex;
  margin-bottom: 10px;
}
.rightbox:nth-child(1) {
  border-bottom: 1px solid rgb(231, 231, 231);
}
.rightbox .img2 {
  margin-left: 35px;
}
h5 {
  margin-top: 20px;
  margin-left: 5px;
}
h6 {
  color: #999;
  font-size: 12px;
  margin-left: 5px;
}
.h5-1 {
  color: rgb(255, 153, 0);
  font-size: 16px;
}

.h5-2 {
  color: rgb(27, 169, 225);
}
.h5-3 {
  color: rgb(237, 102, 96);
}
.center .tiao {
  background-color: rgb(243, 237, 237);
  height: 10px;
  width: 100%;
}
.center .title {
  text-align: center;
  margin-top: 20px;
}
.title .xianshi {
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
}
.title h6 {
  font-size: 10px;
}
.pics {
  display: flex;
  margin-left: 10px;
}
.pics img {
  width: 100px;
  height: 90px;
}
.pics-title {
  display: flex;
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
.pics-title h5 {
  width: 100px;
}
.pics-title h6 {
  color: #ff5339;
  font-size: 12px;
}
.pics-title p {
  font-size: 10px;
  color: #aaa;
  display: inline-block;
  vertical-align: middle;
  margin-top: 5px;
}
.pics-title span {
  display: flex;
  margin-top: 5px;
}
.more{
  text-align: center;
  color: #aaa;
  margin-top: 10px;
  font-size: 14px;
}
</style>