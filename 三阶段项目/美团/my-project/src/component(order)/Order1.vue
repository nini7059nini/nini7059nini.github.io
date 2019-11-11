<template>
  <div class="box">
    <div class="order">
      <span class="title">
        <div class="imgbox">
          <img src="../assets/images/logo.png" alt />
          <h6>东北水饺(文明路店)</h6>
        </div>
        <h6 class="pinjia">待评价</h6>
      </span>
      <div class="text">
        <span class="main">
          <img
            src="https://cube.elemecdn.com/f/88/59d314d01e576a7a2eaeb7c6454a2jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
            alt
          />
          <div class="main-text">
            <h5>下单时间：2019-11-7 10:30</h5>
            <h6>总价：35</h6>
          </div>
        </span>
        <span class="button">
          <p>评价</p>
          <p>再来一单</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.order {
  height: 4rem;
  background-color: #f4f4f4;
  margin-top: 0.266667rem;
  border-radius:.666667rem;
}
.order .title {
  display: flex;
  padding-top: 0.533333rem;
  margin-left: 0.533333rem;
  font-size: 0.4rem;
}
.imgbox {
  display: flex;
  height: 2.666667rem;
}
.imgbox img {
  width: 0.533333rem;
  height: 0.533333rem;
}
.title .pinjia {
  margin-left: -2.466667rem;
  font-size: 0.4rem;
  color: #666;
}
.main {
  display: flex;
  margin-top: -1.6rem;
  margin-left: 0.533333rem;
}
.main-text {
  margin-left: 0.266667rem;
}
.main img {
  width: 2rem;
  height: 2rem;
}
.button {
  margin-left: 0.533333rem;
  display: flex;
  color: #666;
  position: relative;
}
.button p {
  border: 0.013333rem solid #ccc;
  height: 0.666667rem;
  line-height: 0.666667rem;
  width: 1.7rem;
  font-size: 0.24rem;
  text-align: center;
  margin-left: 2rem;
  /* margin-bottom: 0.266667rem; */
  border-radius: 0.266667rem;
}
.button p:nth-child(1) {
  position: absolute;
  top: -0.666667rem;
  right: 2.666667rem;
}
.button p:nth-child(2) {
  position: absolute;
  top: -0.666667rem;
  right: 0.533333rem;
}
</style>