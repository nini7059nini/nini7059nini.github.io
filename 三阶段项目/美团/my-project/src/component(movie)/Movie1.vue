<template>
  <div>
    <van-list
      :ofset="50"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="(m,index) in movie"
        :key="index"
        :num="m.start"
     
        :desc="m.star"
        :title="m.nm"
        :thumb="m.img"
      >
        <div slot="tags">
          <van-tag plain type="danger">{{m.showInfo}}</van-tag>
          <van-tag plain type="danger">观众评{{m.sc}}</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">购票</van-button>
        </div>
      </van-card>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List,} from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);

export default {
  data() {
    return {
      loading: false,
      finished: false,
      movie: [],
    };
  },
  methods: {
    onLoad() {
      //调用全局的axios 到达底部触发一次axios
      this.$axios.get("http://localhost:3000/movie").then(data => {
        this.movie = this.movie.concat(data.data); //解构 然后在原有的数据上后面加新的数据
        window.console.log(data.data);

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.movie.length >= 20) {
          this.finished = true;
        }
        window.console.log("到底部了");
      });
    },

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
.van-nav-bar {
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: rgb(243, 64, 64);
}
.van-nav-bar__title {
  color: #fff;
  font-size: 18px;
  margin-left: 60px;
}
.van-icon-arrow-left {
  color: #fff;
  font-size: 20px;
}
.van-button--mini {
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  margin-top: -40px;
    position: absolute;
top: 80px;
left:260px;

}
.van-card{
    position: relative;
}
.van-card__title {
  font-size: 17px;
}
.van-list {
  margin-top: 2px;
}
.van-card__price {
  font-size: 16px;
}
.van-tag--plain{
  color: #999;
  font-size: 14px;
  display: block;

}
.van-tag--plain:nth-child(2){
  color: #f03d37
}
.van-hairline--surround::after{
border:none !important;
}
.van-ellipsis{
  font-size: 16px;
}
.van-card__price{
  color: orange;
  font-weight: 700;
}
.van-card__content{
  background-color: #fff;
}
.van-image{
  width: 80px !important;
  text-align: center;
  margin-left: 4px;
  background-color: #fff !important;
}
</style>

