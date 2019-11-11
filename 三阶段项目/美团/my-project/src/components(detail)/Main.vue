<template>

    <div class="box" v-if="itemcard.length>0">
      <div class="boximg">
        <img class="boximg-img" :src="itemcard[0][0].img" />
        <span class="boximg-img-text">
          <h2 v-text="itemcard[0][0].name"></h2>
          <h3 v-text="itemcard[0][0].description"></h3>
        </span>
      </div>
      <div class="price">
        <div class="price1" :class="isFixeds== true?'isFixeds':''">
          <h4 v-text="itemcard[0][0].xianjia">
            <i>元</i>
          </h4>
          <h5>门市价：{{itemcard[0][0].yuanjia}} 元</h5>
          <p @click="DetailToSubmit()">立即抢购</p>
        </div>
        <div class="jinglin">
          <span class="pics1 pics">
            <img src="../assets/images/精灵_03.png" alt /> 支持随时退款
          </span>
          <span class="pics2 pics">
            <img src="../assets/images/精灵_05.png" alt /> 支持过期自动退
          </span>
          <span class="pics3 pics">
            <img src="../assets/images/精灵_07.png" alt />
            已售{{itemcard[0][0].recent_order_num}}
          </span>
        </div>
        <h4 class="tiao"></h4>

        <div class="evaluate">
          <span>
            <img src="../assets/images/star.png" alt />
            <img src="../assets/images/star.png" alt />
            <img src="../assets/images/star.png" alt />
            <img src="../assets/images/star.png" alt />
            <img src="../assets/images/star.png" alt />
            <h2>5.0</h2>
          </span>
          <h3>2396人评价></h3>
        </div>
        <div class="pane">
          <span>
            味道赞
            <p>335</p>
          </span>
          <span>
            回头客
            <p>167</p>
          </span>
          <span>
            肉类好
            <p>47</p>
          </span>
          <span>
            分量少
            <p>17</p>
          </span>
          <span>
            点心少
            <p>68</p>
          </span>
          <span>
            上菜慢
            <p>74</p>
          </span>
          <span>
            交通便利
            <p>182</p>
          </span>
          <span>
            高大上
            <p>182</p>
          </span>
        </div>
        <div class="msg">
          <span class="tiao"></span>
          <p>商家信息</p>
          <h5 v-text="itemcard[0][0].xinxi"></h5>
          <h6 v-text="itemcard[0][0].promotion_info "></h6>
        </div>
      </div>
      <div class="rule">
        <span class="tiao"></span>
        <p>购买须知</p>
        <h5>有效期</h5>
        <span class="text">2016.12.8 至 2019.11.22 23:59（周末、法定节假日通用）</span>
        <ul>
          <h5>使用规则</h5>
          <li>1.2米(不含)以下的儿童免费， 1.2米(含)-1.4米(含)的儿童40元/位， 1.4米(不含)以上的等同成人，需购买多1张券或店价支付</li>
          <li>1.纸巾2元一包；</li>
          <li>2.周末法定节假日通用，11:40 - 14:30，周末及法定节假日接待时间为11:30-15:30；</li>
          <li>3.部分菜品因时令原因有所不同，请以店内当日实际供应为准</li>
          <li>4.生日当天在本餐厅就餐的客户，请您提前一天致电联系我们，以便我们为您送上专属您的生日蛋糕；</li>
          <li>5.每桌赠送一人一杯鲜榨果汁。</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      itemname: "",
      //接收card的数据
      itemcard: [],
      isFixeds: false
    };
  },
  //1.从card.vue带数据name过来
  //2.前端发送axios 把name带给后端
  //3.后端处理数据再传给前端
  created() {
    this.itemname = decodeURI(window.location.search).slice(1); //?之后的参数
    window.console.log(this.itemname);
    this.itemComputed();
  },
  //挂载之后 m和v都完成了数据的更新 事件监听scroll
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 在mounted调用，以及在最后销毁这个方法，要不然会在别的组件也会出现这个滚动事件，会引发一些列的bug
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    itemComputed() {
      //前端发送ajax给后端你想要什么 点击对应的name
      this.$axios
        .get("http://localhost:3000/getitem", {
          params: {
            name: this.itemname
          }
        })
        .then(data => {
          //前端接收后端发送的数据
          this.itemcard.push(data.data);
          window.console.log(data.data);
        });
    },
    //吸顶菜单
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //当滚动超过50px,实现吸顶效果
      if (scrollTop >= 600) {
        this.isFixeds = true;
      } else {
        this.isFixeds = false;
      }
    },
    DetailToSubmit() {

      window.location.href = "http://localhost:8080/submit?" + this.itemname;
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.box{
  background-color: #fff;
}
.isFixeds {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
}
.boximg {
  height: 50px;
  position: relative;
}
.boximg-img {
  height: 208px;
  display: block;
  width: 100%;
  max-width: 400px;
}
.boximg-img-text {
  position: absolute;
  top: 135px;
  left: 18px;
  color: #fff;
}

h2 {
  font-size: 20px;
}
h3 {
  font-size: 14px;
  margin-top: 10px;
}
.evaluate {
  position: absolute;
  top: 138px;
  width: 100%;
}
.evaluate h3 {
  margin-left: 90px;
}
.pane {
  position: absolute;
  top: 192px;
}
.msg {
  position: absolute;
  top: 310px;
}
</style>