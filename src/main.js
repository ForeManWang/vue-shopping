// 入口文件 main.js

// 导入 Vue
import Vue from 'vue'

// 按需导入 Mint-UI 的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

// 导入 app 根组件
import app from './App.vue'

var vm = new Vue({
	el: '#app',
	render: c => c(app)
})