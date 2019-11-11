<template>
  <div>
    <div class="header-search">
      <img
        src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@44d57b8"
        alt
      />
      <div :class="isFixed== true?'isFixed':''">
        <i class="iconfont icon-qianjin-copy" @click="FoodToHome"></i>

        <van-search
          class="food-search"
          placeholder="输入商家名、品类或商圈"
          v-model="value"
          
        />
        <i class="iconfont icon-wode" @click="FoodToLogin"></i>
      </div>
    </div>
    <span class="line"></span>
    <ul class="header-grid">
      <li>
        <img src="//p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png" alt />
        <p>火锅</p>
      </li>
      <li>
        <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" alt />
        <p>甜点饮品</p>
      </li>
      <li>
        <img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" alt />
        <p>自助餐</p>
      </li>
      <li>
        <img src="//p0.meituan.net/codeman/12ff749bd7fdf473abd59e2651a9ee1913684.png" alt />
        <p>小吃快餐</p>
      </li>
      <li>
        <img src="//p0.meituan.net/codeman/0fe84029cc6cf6ccf12838ce6546734a16488.png" alt />
        <p>西餐</p>
      </li>
      <li>
        <img src="//p0.meituan.net/codeman/2ae734d26259e6138ea61f2dcdac8fa115018.png" alt />
        <p>烧烤烤肉</p>
      </li>
      <li>
        <img src="//p1.meituan.net/codeman/a7c360a9aeca1f972a1819465154c6b414043.png" alt />
        <p>香锅烤鱼</p>
      </li>
      <li>
        <img src="//p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png" alt />
        <p>海鲜</p>
      </li>
    </ul>
    <div class="tiao"></div>
    <ul class="filtrate" :class="isTop== true?'isTop':''">
      <li>
        <p>全部类目</p>
        <i></i>
      </li>
      <li>
        <p>附近商家</p>
        <i></i>
      </li>
      <li>
        <p>智能排序</p>
        <i></i>
      </li>
      <li>
        <p>筛选</p>
        <i></i>
      </li>
    </ul>
    <van-list
      :ofset="50"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="(l,index) in valueComputed"
        :key="index"
        :num="l.recent_order_num"
        :price="l.xianjia"
        :desc="l.description"
        :title="l.name"
        :thumb="l.img"
      >
        <div slot="tags">
          <van-tag plain type="danger">{{l.promotion_info}}</van-tag>
          <!-- <van-rate v-model="value" readonly size="15px" /> -->
        </div>
        <div slot="footer"></div>
      </van-card>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List, Search, Rate } from "vant";
import "../assets/food.scss";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
Vue.use(Search);
Vue.use(Rate);
export default {
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      value: "",
      //吸顶菜单1
      isFixed: false,
      //吸顶菜单2
      isTop:false
    };
  },
  methods: {
    onLoad() {
      //调用全局的axios 到达底部触发一次axios
      this.$axios.get("http://localhost:3000/list").then(data => {
        this.list = this.list.concat(data.data); //解构 然后在原有的数据上后面加新的数据
        // window.console.log(data);

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 30) {
          this.finished = true;
        }
        // window.console.log("到底部了");
      });
    },
    onSearch() {},
    FoodToHome() {
      this.$router.push({ name: "home" });
    },
    FoodToLogin() {
      this.$router.push({ name: "login" });
    },
    //吸顶菜单
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //当滚动超过50px,实现吸顶效果
      if (scrollTop >= 30) {
        this.isFixed = true;
      
      } else {
        this.isFixed = false;
      }
    
      if (scrollTop >= 210) {
        this.isTop = true;
      
      } else {
        this.isTop = false;
      }
    }
  },
  //挂载之后 m和v都完成了数据的更新 事件监听scroll
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 在mounted调用，以及在最后销毁这个方法，要不然会在别的组件也会出现这个滚动事件，会引发一些列的bug
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    //数据筛选列表
    valueComputed() {
      let _ = this;
      if (_.value) {
        return _.list.filter(function(item) {
          if (item.name.indexOf(_.value) >= 0) {
            return item;
          }
        });
      } else {
        return _.list;
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
.van-tag:nth-child(2) {
  color: orange;
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
.van-tag {
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px;
}
.van-tag--plain {
  border: 1px solid #fff !important;
}
</style>
