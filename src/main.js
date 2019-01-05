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

// 4.1 导入 vue-resource
import VuePreview from 'vue-preview'
// 4.2 安装 vue-resource
Vue.use(VuePreview)

// 5.1 导入 vuex
import Vuex from 'vuex'
// 5.2 注册 vuex
Vue.use(Vuex)

// 6.1 每次刚进入网站，肯定会调用 main.js 在刚调用的时候，先从本地存储中把购物车的数据读出来，放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

// 5.3 创建 vuex 实例对象
var store = new Vuex.Store({
	state: {
		// this.$route.state.***
		// 6.2 放到store中
		car: car 
	},
	mutations: {
		// this.$store.commit('方法名称', '按需传入唯一的参数')
		addToCar(state, goodsinfo) {
			var flag = false
			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					// 这个 count 是客户端传过来的
					item.count += parseInt(goodsinfo.count)
					flag = true
					return true
				} 
			})
			// 如果最终循环完毕，得到的 flag == false 则 push
			if (!flag) {
				state.car.push(goodsinfo)
			}
			// 6.3 当更新 car 之后, 把 car 数组存储到本地的 localStorage 中去, 实现持久化存储
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsNum(state, goodsinfo) {
			// 修改购物车中商品的数量值并同步
			// 思路：
			// 1、去购物车组件拿到商品id
			// 2、现在既有商品id，又有商品的数量了
			// 3、监听改变事件：每当数量改变则把最新的数量更新到购物车中
			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count = parseInt(goodsinfo.count)
					return true
				}
			})
			// 当更新 car 之后, 把 car 数组存储到本地的 localStorage 中去, 实现持久化存储
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		removeFormCar(state, id) {
			// 根据id从store购物车中删除对应的那条商品数据
			state.car.some((item, i) => {
				if (item.id == id) {
					state.car.splice(i, 1)
					return true
				}
			})
			// 当删除对应id的 商品数据 之后, 把 car 数组存储到本地的 localStorage 中去, 实现持久化存储
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsSelected(state, info) {
			state.car.some(item => {
				if (item.id == info.id) {
					item.selected = info.selected
				}
			})
			// 当把最新的购物车商品选中状态存储到本地的 localStorage 中去, 实现持久化存储
			localStorage.setItem('car', JSON.stringify(state.car))
		}
	},
	getters: {
		// this.$store.getters.***
		getAllCount(state) {
			var c = 0
			state.car.forEach(item => {
				c += item.count
			})
			return c
		},
		getGoodsCount(state) {
			var goodscount = {}
			state.car.forEach(item => {
				goodscount[item.id] = item.count
			})
			return goodscount
		},
		getGoodsSelected(state) {
			var isSelected = {}
			state.car.forEach(item => {
				isSelected[item.id] = item.selected
			})
			return isSelected
		},
		getGoodsCountAndAmount(state) {
			// 获取已选数量和计算已选商品总价
			var countAndAmount = {
				count: 0, // 勾选数量
				amount: 0 // 总价
			}
			state.car.forEach(item => {
				if (item.selected) {
					countAndAmount.count += item.count
					countAndAmount.amount += item.count * item.price
				}
			})
			return countAndAmount
		}	
	}
})

// 配置全局根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 配置全局 post 表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// Vue.http.options.emulateJSON = true
// 按需导入 Mint-UI 的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

// 这里由于按需加载Lazyload组件有点小bug
// 全部导入 mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

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
	router,
	// 5.4 挂载 vuex 实例对象到 vm 实例上
	store
})