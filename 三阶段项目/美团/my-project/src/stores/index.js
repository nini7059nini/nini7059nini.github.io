import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
    //action触发commit  commit去触发mutations 最后才去改变state的值
    //在search.js把搜索值放入仓库中 card.js再从仓库把值取出
    state: {
        search: {
            value: ''
        },
      

    },
    mutations: {
        setSearch(state, data) {
            state.search = data;
        },
    },
    actions: {
        setSearch(context, data) {
            context.commit('setSearch', data);
        },

    },
    getters: {
        getSearch(state) {
            return state.search
        },

    }
})