<template>
  <div class="nav-search">
    <span class="nav-city">广州</span>
    <van-search placeholder="请输入商家名、品类或者商圈..." v-model="value" style="background-color:#ffbf00" />
  <div class="search" slot="action" @click="onSearch">搜索</div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods:{
    //点击搜索把输入的值传到仓库中
    onSearch(){
      this.$store.dispatch('setSearch',{
        value:this.value //把value存到仓库中
      })
    }

  }
};
</script>
<style scoped>
.nav-search {
  display: flex;
  background-color: #ffbf00;
}
.nav-city {
  margin-top: 6px;
  font-size: 15px;
 margin-left: 5px;
  margin-right: 10px;
  line-height: 40px;
}

.van-search__content {
  background: #fff;
}
.van-search {
  width: 220px;
  height: 40px;
  
  border-radius: 14px;
  margin-top: 6px;
  margin-bottom: 10px;
  font-size: 8px;
  color: #999999;
}
img {
  width: 22px;
  height: 22px;
  margin-top: 17px;
  margin-left: 10px;
}
.search{
  font-size: 16px;
  margin-left:5px;
  margin-top: 15px;
}
</style>