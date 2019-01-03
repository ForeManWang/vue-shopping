// 入口文件 main.js

// 导入 Vue
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 3.1 导入时间插件
import moment from 'moment'
// 3.2 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource 
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

// 配置全局根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

// Vue.http.options.emulateJSON = true
// 按需导入 Mint-UI 的组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

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