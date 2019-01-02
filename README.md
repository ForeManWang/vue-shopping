# Vue商城
## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)
## 上传至github项目仓库
```shell
git add .
git commit -m ""
git remote add origin git@github.com:ForeManWang/vue-shopping.git 
git push -u origin master
```

## 制作根App组件
- 完成 `Header` 区域，使用的是 `Mint-UI` 中的 `Header` 组件,

```html
<!-- 顶部 Header 区域 -->
<mt-header fixed title="Vue商城"></mt-header>
```

- 制作底部的 `Tabbar` 区域，使用的是 `MUI` 中的 `tabbar.html` 组件

```html
 <!-- 底部 TabBar 区域 -->
<nav class="mui-bar mui-bar-tab">
	<a class="mui-tab-item mui-active" href="#tabbar">
		   <span class="mui-icon mui-icon-home"></span>
		<span class="mui-tab-label">首页</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-chat">
		<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
		<span class="mui-tab-label">消息</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-contact">
		<span class="mui-icon mui-icon-contact"></span>
		<span class="mui-tab-label">通讯录</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-map">
		<span class="mui-icon mui-icon-gear"></span>
		<span class="mui-tab-label">设置</span>
	</a>
</nav>
```

- 修改`Tabbel` 代码，部分类和文字需要修改
  - 这里在制作购物车小图标的时候，先把扩展图标的`css`样式文件和`fonts`文件到项目`lib`对应文件中
  - 为购物车小图标添加如下样式`mui-icon mui-icon-extra mui-icon-extra-cart`

修改完`Tabble`代码如下

```html
<!-- 底部 TabBar 区域 -->
<nav class="mui-bar mui-bar-tab">
	<a class="mui-tab-item mui-active" href="#tabbar">
		   <span class="mui-icon mui-icon-home"></span>
		<span class="mui-tab-label">首页</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-chat">
		<span class="mui-icon mui-icon-contact"></span>
		<span class="mui-tab-label">会员</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-contact">
		<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
		<span class="mui-tab-label">购物车</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-map">
		<span class="mui-icon mui-icon-search"></span>
		<span class="mui-tab-label">搜索</span>
	</a>
</nav>
```

- 在 `Header` 和 `Tabbar` 之间放入 `<router-view></router-view>` 用来展示路由匹配到的组件

## 制作`router-view`组件

### 路由操作（vue-router）

#### 安装 `vue-router`

```shell
npm i vue-router -S
```

#### main.js

```js
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
```

#### 创建自己的`router.js`模块

> 负责分发路由操作

```js
// 1.3 创建自己的router.js模块
// 导入 vue-router
import VueRouter from 'vue-router'

// 创建路由对象
var router = new VueRouter({
  routes: [
  ]
})

// 把路由对象暴露出去
export default router
```

#### 导入自己的 router.js 模块

```js
// 1.4 导入自己的 router.js 模块
import router from './router.js'
```

#### 挂载路由对象到`vm`实例上

```js
var vm = new Vue({
	el: '#app',
	render: c => c(app),
	// 1.4 挂载路由对象到 vm 实例上
	router
})
```

### 修改 `router-view`组件

- 修改`a`为`router-link` `herf`为`to`

```html
<!-- 底部 TabBar 区域 -->
<nav class="mui-bar mui-bar-tab">
	<a class="mui-tab-item mui-active" href="#tabbar">
		   <span class="mui-icon mui-icon-home"></span>
		<span class="mui-tab-label">首页</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-chat">
		<span class="mui-icon mui-icon-contact"></span>
		<span class="mui-tab-label">会员</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-contact">
		<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
		<span class="mui-tab-label">购物车</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-map">
		<span class="mui-icon mui-icon-search"></span>
		<span class="mui-tab-label">搜索</span>
	</a>
</nav>
```

- 底部按钮高亮样式设置

`router.js`配置路由规则下面，添加覆盖默认的路由高亮的类

```js
linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
```

这样就可以点击下面按钮，显示高亮了

### 组件切换

点击 `tabbar` 中的路由链接，展示对应的路由组件

- 在`src`下新建一个组件文件夹`components/tabbar`,这个文件夹下存放四个按钮对应的四个组件

![1546404359585](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546404359585.png)

- 为四个文件分别添加最基本的代码

```vue
<template>
	<div>
		<h3>HomeContainer</h3>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

- 导入对应的路由组件

```js
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
```

- 配置路由规则

```
routes: [ // 配置路由规则
  	{ path: '/home', component: HomeContainer },
  	{ path: '/member', component: MemberContainer },
  	{ path: '/shopcar', component: ShopcarContainer },
  	{ path: '/search', component: SearchContainer }
  ],
```

### 轮播图

#### Mint UI swipe 组件

- 按需导入 `Mint-UI` 组件

```js
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
```

- `HomeContainer.vue`中加入轮播图代码片段

```html
<template>
	<div>
		<!-- 轮播图区域 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		  <mt-swipe-item>4</mt-swipe-item>
		  <mt-swipe-item>5</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<!-- 轮播图样式 -->
<style lang="scss" scoped>
	.mint-swipe {
		height: 200px;
		.mint-swipe-item {
			&:nth-child(1) {
				background-color: red;
			}
			&:nth-child(2) {
				background-color: yellow;
			}
			&:nth-child(3) {
				background-color: blue;
			}
			&:nth-child(4) {
				background-color: cyan;
			}
			&:nth-child(5) {
				background-color: pink;
			}	
		}
	}
</style>
```

这样就可以看到页面中的轮播图了

#### 加载首页轮播图数据

- 获取数据，使用 vue-resource

#### 安装 `vue-resource`

- 安装 `vue-resource`

```shell
npm i vue-resource -S
```

- 导入和使用

```js
// 2.1 导入 vue-resource 
import VueResource = from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
```

- 至此就可以在每一个组件里发送请求了
- 编写获取轮播图数据的方法,设置空数组bannerList保存数据，并在created的时候执行该轮播图函数

```js
export default {
		data() {
			return {
				bannerList: []
			}
		},
		created() {
			this.getBanner()
		},
		methods: {
			getBanner() {
				// 获取轮播图数据的方法
				this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
					// console.log(result.body)
					// console.log(1)
					if (result.body.status === 0) {
						this.bannerList = result.body.message
					} else {
						Toast('加载轮播图失败')
					}
				})
			}
		}
	}
```

- 在轮播图区域进行遍历数据

```html
<mt-swipe :auto="1000">
		  <mt-swipe-item v-for="item in bannerList" :key="item.url">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		  <mt-swipe-item>4</mt-swipe-item>
		  <mt-swipe-item>5</mt-swipe-item>
</mt-swipe>
```

#### TODO:

这里原项目老师给的接口不能用了，需要处理，考虑到只关系到到轮播图数据，并不会影响后面具体功能，暂未处理

### 九宫格区域

改造九宫格为六宫格

```html
<!-- 九宫格改造为六宫格 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	   <img src="../../images/menu1(1).png" alt="">
	   <div class="mui-media-body">新闻资讯</div></a></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	   <img src="../../images/menu2.png" alt="">
	   <div class="mui-media-body">图片分享</div></a></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	   <img src="../../images/menu3.png" alt="">
	   <div class="mui-media-body">商品购买</div></a></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	   <img src="../../images/menu4.png" alt="">
	   <div class="mui-media-body">留言反馈</div></a></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	   <img src="../../images/menu5.png" alt="">
	   <div class="mui-media-body">视频专区</div></a></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	   <img src="../../images/menu6.png" alt="">
       <div class="mui-media-body">联系我们</div></a></li>
</ul>
<!-- 并添加样式到下面style中 -->
.mui-grid-view.mui-grid-9 {
	background-color: #fff;
	border: none;
	img {
		 width: 60px;
		 height: 60px;
	}
	.mui-media-body{
		 font-size: 13px;
	}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
	border: 0;
}
```

### 组件切换动画

- transition 包裹

```html
<!-- 中间路由 router-view 区域 -->
<transition>
	<router-view></router-view>
</transition>
```

- 基本样式

```scss
.v-enter,
.v-leave-to {
	opacity: 0;
	transform: translateX(100%);
}
.v-enter-active,
.v-leave-actice {
	transition: all 1s ease;
}
```

**这样已经可以切换了，但是发现有点丑，切换不自然**

修改一下：

```scss
.v-enter,
.v-leave-to {
	opacity: 0;
	transform: translateX(100%);
}
// 将 .v-leave-to 设置 transform: translateX(-100%); 这样就实现从右边进，左边出
.v-leave-to {
	transform: translateX(-100%);
}
.v-enter-active,
.v-leave-actice {
	transition: all 1s ease;
}
```

这样代码过渡自然点













































































-  `Header` 和 `Tabbar` 之间放入 `<router-view></router-view>` 用来展示路由匹配到的组件