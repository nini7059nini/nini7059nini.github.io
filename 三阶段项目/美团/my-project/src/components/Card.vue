<template>
  <div>
    <span class="top"></span>
    <p>猜你喜欢</p>
    <span class="line"></span>
    <van-list
      :ofset="50"
      v-model="loading"
      :finished="finished"
     
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="(c,index) in cardComputed"
        :key="index"
        :desc="c.promotion_info"
        :title="c.name"
        :thumb="c.img"
        @click="navToDetail(c.name)"
      >
        <div slot="tags">
          <van-tag plain type="danger">{{c.xianjia}}元</van-tag>
          <van-tag plain type="danger">门市价:{{c.yuanjia}}</van-tag>
          <!-- <van-tag plain type="danger">已售</van-tag> -->
        </div>
        <div slot="footer"></div>
      </van-card>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List } from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
export default {
  data() {
    return {
      loading: false,
      finished: false,
      card: []
    };
  },
  created() {},
  methods: {
    //点击跳转到详情页
    navToDetail(name) {
      // this.$router.push({ name: "detail" });
      // window.console.log(index)
      window.location.href = "http://localhost:8080/detail?" + name;
    },
    onLoad() {
      //调用全局的axios 到达底部触发一次axios
      this.$axios.get("http://localhost:3000/card").then(data => {
        this.card = this.card.concat(data.data); //解构 然后在原有的数据上后面加新的数据
        // window.console.log(data);

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.card.length >= 10) {
          this.finished = true;
        }
        // window.console.log("到底部了");
      });
    }
  },
  computed: {
    //从仓库把value取出来
    search() {
      return this.$store.getters.getSearch;
    },
    //数据筛选
    cardComputed() {
      if (this.search.value) {
        return this.card.filter(item => {
          if (item.name.indexOf(this.search.value) >= 0) {
            return item;
          }
        });
      } else {
        return this.card;
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
div {
  margin-top: 10px;
}
.top {
  width: 100%;
  height: 10px;
  display: block;
  background-color: #f0efed;
}
.line {
  background-color: #f0efed;
  display: block;
  width: 96%;
  height: 1px;
  margin-left: 4px;
}
p {
  font-size: 18px;
  margin-top: 5px;
  margin-left: 4px;
  margin-bottom: 5px;
}

.van-image__img {
  width: 60px;
  height: 60px;
  margin: 10px;
}
.van-card__header {
  background: #fff;
}
.van-card__price {
  font-size: 18px;
  color: #ff6d0d;
  margin-top: 10px;
}
.van-tag {
  font-size: 14px;
}
.van-card__content {
  margin-left: 20px;
}
.van-card__header {
  border-bottom: 1px solid #f0efed;
}
.van-list__finished-text {
  height: 100px;
  margin-top: 10px;
}
.van-tag--plain{
  color: #666;
  font-size: .4rem;
  /* display: block; */
  /* margin-top: .2rem; */
  margin-left: .133333rem;
}
.van-tag--plain:nth-child(1){
  color: #ff6d0d;
  font-size: .47rem;
}
</style>