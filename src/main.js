// 入口文件 main.js

// 导入 Vue
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource 
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// Vue.http.options.emulateJSON = true
// 按需导入 Mint-UI 的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 1.3 创建自己的 router.js 模块
// 1.4 导入自己的 router.js 模块
import router from './router.js'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入 app 根组件
import app from './App.vue'

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	// 1.4 挂载路由对象到 vm 实例上
	router
})