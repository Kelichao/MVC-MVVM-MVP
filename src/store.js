import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex) // 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex),调用了才能通过 this.$store访问

// 便于全局访问
window.store = new Vuex.Store({
    // 数据仓库
    state: {
        count: 0
    },
    // 做一些计算输出
    getters: {  
        big(state) {
           return console.log(state.count + 5);
        }
    },
    // 唯一更改数据的方法
    mutations: {
        increment: function (state) {
            setTimeout(() => {
                state.count++;
            },1000)
            
        },
        decrement: function (state) {
            state.count--;
        }
    },
    // Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
    actions: {
        increment (context) {
          context.commit('increment')
        }
    }
});



// 原生态触发方法
store.commit('increment')

// 取得值,如果注册在了vue实例中，则可以用 this.$store.state获取数据源
store.state.count// 1

export default store;