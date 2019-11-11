<template>
  <div>
    <div class="black">
      <img src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" alt />
      <div class="size">
        <h2>省钱利器 购物超划算</h2>
        <h2>吃喝玩乐尽在美团</h2>
      </div>
      <p>去APP</p>
    </div>
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(g,index) in grid"
        :key="index"
        :icon="g.img"
        :text="g.name"
        @click="GridToMovie(g.name)"
      />
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      //grid数 m层
      grid: []
    };
  },
  created() {
    this.grids();
  },

  methods: {
    grids() {
      // axios 的请求数据方法
      axios.get("http://localhost:3000/grid").then(data => {
        // window.console.log(data.data);
        this.grid = data.data;
      });
    },
    //点击宫格跳转到美食
    GridToMovie(name) {
      if (name === "美食") {
          window.location.href = "http://localhost:8080/food";
      } else {
        window.location.href = "http://localhost:8080/movie";
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
.black {
  height: 55px;
  background: #000000;
  position: relative;
  overflow: hidden;
  display: flex;
}
img {
  display: block;
  width: 40px;
  height: 40px;
  margin-left: 15px;
  margin-top: 5px;
}
.size {
  margin-top: 4px;
}
h2 {
  font-size: 13px;
  color: #fff;
  margin-left: 10px;
  margin-top: 4px;
}
:nth-child(2) {
  font-size: 11px;
}
p {
  position: absolute;
  font-size: 14px;
  right: 20px;
  top: 10px;
  width: 60px;
  height: 35px;
  line-height: 35px;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
  border-radius: 10px;
  text-align: center;
}
</style>