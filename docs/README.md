# Vue商城

小商城项目，部分功能

> └─vue-shopping----------------------------------------------------------------------------------------------------------项目跟文件夹
    ├─assets------------------------------------------------------------------------------------------------------------------图片文件夹
    ├─dist----------------------------------------------------------------------------------------------------------------------压缩后文件
    ├─docs--------------------------------------------------------------------------------------------------------------------项目文档
    ├─node_modules------------------------------------------------------------------------------------------------------项目依赖
    └─src-----------------------------------------------------------------------------------------------------------------------静态资源
        ├─components------------------------------------------------------------------------------------------------------组件文件夹
        │  ├─goods------------------------------------------------------------------------------------------------------------商品文件夹
        │  ├─news-------------------------------------------------------------------------------------------------------------新闻文件夹
        │  ├─photos-----------------------------------------------------------------------------------------------------------图片文件夹
        │  ├─subcomments------------------------------------------------------------------------------------------------子组件
        │  └─tabbar------------------------------------------------------------------------------------------------------------页面tabbar
        ├─images---------------------------------------------------------------------------------------------------------------图片
        └─lib----------------------------------------------------------------------------------------------------------------------依赖

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
</mt-swipe>
```

#### TODO1:

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

### TODO1中的接口问题

今天看到该项目的原作者发布的将接口都改为`http://www.liulongbin.top:3005`的通知，果断把我的接口给改了下，这下就能正常接收接口中轮播图数据了。

### 新闻资讯

在`HomeContainer.vue`中有六个方格的模块，改造一个，其他套路基本一样

#### router-link 改造

```html
<router-link  to="/home/newslink" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	   <img src="../../images/menu1(1).png" alt="">
	   <div class="mui-media-body">新闻资讯</div></a>
</router-link>
```

#### newsList文件

创建新的文件`components/news/newsList.vue`

```javascript
<template>
	<div>
		<h3>新闻列表页面</h3>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
	
</style>
```

在`router.js`中，导入和添加路由

```javascript
import NewsList from './components/news/newsList.vue'
// 在路由规则routes中添加该规则
{ path: '/home/newslist', component: NewsList }
```

这样就可以正常访问了，基本和配置`tabbar`下面的几个路由组件一样的套路

#### 绘制`newsList.vue`页面

使用`MUI`下的组件`mui-master\examples\hello-mui\examples\media-list.html`

中的这一段代码

```html
<ul class="mui-table-view">
	<li class="mui-table-view-cell mui-media">
		<a href="javascript:;">
			<img class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
			<div class="mui-media-body">
				幸福
				<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
			</div>
		</a>
	</li>
	<li class="mui-table-view-cell mui-media">
		<a href="javascript:;">
			<img class="mui-media-object mui-pull-left" src="../images/muwu.jpg">
			<div class="mui-media-body">
				木屋
				<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
			</div>
		</a>
	</li>
	<li class="mui-table-view-cell mui-media">
		<a href="javascript:;">
			<img class="mui-media-object mui-pull-left" src="../images/cbd.jpg">
			<div class="mui-media-body">
				CBD
				<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
			</div>
		</a>
	</li>
</ul>
```

然后改造

- 图片地址改造下，不然报错
- template 中 HTMl 代码修改如下

```javascript
<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../images/author.jpg">
					<div class="mui-media-body">
						<h1>木屋</h1>
						<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						<p class="mui-ellipsis">
							<span>发表时间: 2018-10-10 10:10:10</span>
							<span>点击: 0 次</span>
						</p>
					</div>
				</a>
			</li>
```

- 添加一些对应的`style`样式

```scss
<style lang="scss" scoped>
	.mui-table-view {
		li {
			h1 {
				font-size: 14px;
			}
			.mui-ellipsis {
				font-size: 12px;
				color: #226aff;
				display: flex;
				<!-- css3 属性，两边对齐 -->
				justify-content: space-between;
			}
		}
		
	}
</style>
```

#### 新闻资讯数据

和渲染轮播图数据方法差不多

##### 配置全局根路径

**由于每请求一次接口中的数据都要使用到根路径**，所以将根路径配置起来

注意：要放到注册了`vue-resource`之后, 即`Vue.use(VueResource)`之后

```javascript
// 配置全局根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
```

这样的话，以前接口的地方就需要更改，去掉根路径的这一段即可

##### 请求数据并保存

在`newsList.vue`组件中的`script`标签中导出数据和对应方法，这里主要配置了一个方法和保存之后的数据

```javascript
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				newslist: []
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.$http.get('api/getnewslist').then(result => {
					if (result.body.status === 0) {
						// 如果没有失败，应该把数据保存到data上
						this.newslist = result.body.message
					} else {
						Toast('获取新闻列表失败')
					}
				})
			}
		}
	}
```

##### 渲染数据

将数据去`ul`标签中遍历出来，遍历到每一个`li`中

```html
<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h1>{{ item.title }}</h1>
						<p class='mui-ellipsis'>{{ item.zhaiyao }}</p>
						<p class="mui-ellipsis">
							<span>发表时间: {{ item.add_time }}</span>
							<span>点击: {{ item.click }} 次</span>
						</p>
					</div>
				</a>
			</li>
		</ul>
```

#### 小bug

##### 最底部无法完全显示

`App.vue`中给`.app-container`容器添加`padding-bottom: 50px;`

##### 时间格式

加一个全局过滤器

**可以用moment模块去做时间格式化处理**

```javascript
// 去项目根目录安装moment模块
npm i moment -S
```

**导入模块和定义过滤器**

`main.js`

```javascript
// 3.1 导入时间插件
import moment from 'moment'
// 3.2 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
```

**在组件的时间`item.add_time`后面加上管道符`|`并跟上定义的过滤器`dateFormat`**,表示使用`dateFormat`过滤器规则过滤`item.add_time`，这样输出结果就是我们想要的了

```html
<span>发表时间: {{ item.add_time | dateFormat }}</span>
```

### 新闻详情

实现新闻列表点击跳转到新闻详情页

#### newsInfo页面

创建`components/news/newsInfo.vue`

#### router-link改造

把列表中的每一项改为`router-link`,同时在跳转的时候应该提供唯一的Id标识符

注意：由于这里需要提供id，所以需要拼接字符串，将`to`当做变量来处理，前面加`:`绑定

改造如下

```html
<router-link :to="'/home/newsinfo/' + item.id">
	...
</router-link>
```

#### 创建新闻详情组件`newsInfo.vue`

```html
<template><div><h3>新闻详情</h3></div></template>


<script></script>


<style lang="scss" scoped></style>
```



#### 配置路由规则

在路由模块页面，将新闻详情和组件页面对应

```javascript
import NewsInfo from './components/news/newsInfo.vue'
var router = new VueRouter({
  routes: [ // 配置路由规则
  	...
    // 同样，由于需要匹配id，所以要把变量`:id`加到请求地址后面
  	{ path: '/home/newsinfo/:id', component: NewsInfo }
  ],
  ...
})
```

#### 绘制`newsInfo.vue`页面

```html
<template>
	<div>
		<div class="newsinfo-container">
			<h3 class="title">新闻标题</h3>
			<p>
				<span>发表时间</span>
				<span>点击: 0 次</span>
			</p>
			<hr>
			<div class="content"></div>
		</div>	
	</div>
</template>
```

```scss
<style lang="scss" scoped>
	.newsinfo-container {
		padding: 0 4px;
		.title {
			font-size: 16px;
			text-align: center;
			margin: 15px 0;
			color: red;
		}
		.subtitle {
			font-size: 13px;
			color: #226aff;
			display: flex;
			justify-content: space-between;
		}
		.content {
			img {
		      width: 100%;
		    }
		}
	}
</style>
```

#### 新闻详情数据

```javascript
<script>

	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				// 将 URL 地址中传递过来的 id 值挂载到 data上，方便以后调用
				id: this.$route.params.id,
				newsinfo: {}
			}
		},
		created() {
			this.getNewsInfo()
		},
		methods: {
			getNewsInfo() {
				// 获取新闻详情
				this.$http.get('api/getnew/' + this.id).then(result => {
					if (result.body.status === 0) {
						this.newsinfo = result.body.message[0]
					} else {
						Toast('获取新闻详情失败')
					}
				})
			}
		}
	}
</script>
```

```html
<template>
	<div>
		<div class="newsinfo-container">
			<h3 class="title">{{ newsinfo.title }}</h3>
			<p class="subtitle">
				<span>{{ newsinfo.add_time | dateFormat }}</span>
				<span>点击: {{ newsinfo.click }} 次</span>
			</p>
			<hr>
			<div class="content" v-html="newsinfo.content"></div>
		</div>	
	</div>
</template>
```

### 发表评论

#### comment评论子组件

创建`components/subcomments/comment.vue`

```html
<template>
	<div>
		<h3>评论</h3>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```



#### 将comment评论子组件放入newsInfo组件中

import 手动导入

```js
import comment from '../subcomments/comment.vue'
```

在父组件中，使用`components`属性，将刚才导入 `comment`组件，注册为自己的子组件

```javascript
export default {
		data() {
			...
		},
		created() {
			...
		},
		methods: {
			...
		},
		// 2、注册评论组件
		components: {
			'comment-box': commment
		}
	}
```

#### 页面引用

将注册的子组件的注册名称，以标签形式在页面中引用

```html
<div class="newsinfo-container">
	...
	<!-- 评论子组件区域 -->
	<comment-box></comment-box>
</div>
```

这样就可以在新闻资讯信息详情页面看到这个评论子组件了

#### 获取评论数据

获取所有的评论数据，并实时显示到页面中

```html
<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容,最多输入120字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">第{{ i+1 }}楼&nbsp;&nbsp;用户: {{ item.uer_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">
          {{ item.content = 'undefined' ? '此用户很懒，什么都没说' : item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
```

```javascript
<script>
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        pageIndex: 1, // 默认展示第一页数据
        comments: [] // 存储所有的评论数据
      }
    },
    created() {
      this.getComments()
    },
    methods: {
      getComments() {
        this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
          if (result.body.status === 0) {
            this.comments = result.body.message
          } else {
            Toast('评论数据加载失败')
          }
        })
      }
    },
    props: ["id"]
  }
</script>
```

#### 加载更多

- 为加载更多按钮，绑定click事件
- 当点击时，让 pageIndex++，然后调用一下 this.getComments() 方法获取最新一页的数据

```javascript
  export default {
    data() {
      ...
    },
    created() {
      ...
    },
    methods: {
      getComments() {
        ...
      },
      getMore() {
        // 加载更多
        this.pageIndex++
        this.getComments()
      }
    },
    ...
  }
```

#### 发表评论

##### 思路

> - 双向数据绑定
> - 绑定事件（发表评论按钮）
> - 校验评论区域内容是否为空，如果为空，则提示用户评论内容不能为空，若校验通过，通过 vue-resource 把评论内容提交到服务器
> - 当发表评论OK后，则重新刷新列表，以查看最新的评论
> - 如果调用 getComments 重新刷新列表，只能得到当前评论的最后一页，得不到第一页的评论，而我们的需求是要刷新出来第一页的评论，因为发表评论之后应该刷新从第一页开始，这样才能看到最新的评论
> - 换一种思路：当评论成功后在客户端手动拼接出一个最新的评论对象，然后调用数组的 unshift 把最新的评论追加到 data 中 comments 的最前面，这样就达到需求了

##### 数据绑定

```html
    <textarea ... v-model="msg"></textarea>
    <mt-button ... @click="postComment">发表评论</mt-button>
```

```javascript
 data() {
      return {
        ...
        msg: '' // 发表评论操作，评论输入的内容，双向数据绑定
      }
    },
```

##### 配置

```javascript
// 配置全局 post 表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
```

##### 方法

```javascript
postComment() {
        // 发表评论
        if (this.msg.trim().length === 0) {
          Toast('评论内容不能为空')
        }
        // post请求：
        // 参数一：请求地址 
        // 参数二：提交给服务器的数据对象 { content: msg } 
        // 参数三：提交表单中数据的格式 { emulateJSON: true } 由于考虑到post请求在整个项目中有很多，所以把数据格式全局配置 application/x-www-form-urlencoded
        this.$http
          .post('api/postcomment/' + this.$route.params.id, {
            content: this.msg.trim()
          })
          .then(function (result) {
            if (result.body.status === 0) {
              // 1、拼接出一个评论对象
              var cmt = { user_name: '匿名用户', add_time: Date.now(), content: this.msg.trim() }
              this.comments.unshift(cmt)
              this.msg = ''
            } else {
              Toast('获取评论失败')
            }
          })
        }
```

### 图片分享

点击图片分类，进入对应的图片分享页面

#### photolist 组件

- 新建组件`components\photos\PhotoList.vue`

```html
<template>
	<div>
		<h3>图片分享</h3>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

#### router-link 改造

```html
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	<router-link to="/home/photolist">
	    <img src="../../images/menu2.png" alt="">
	    <div class="mui-media-body">图片分享</div>
    </router-link>
</li>
```

#### 配置路由

```javascript
// 导入对应的路由组件
import PhotoList from './components/photos/PhotoList.vue'
// 配置路由规则
{ path: '/home/photolist', component: PhotoList }
```

这样就能点击图片分享，跳转到图片分享页面了

#### 绘制图片列表页面

##### 顶部滑动条静态渲染

- 借助 `MUI` 中的`tab-top-webview-main.html`组件，选取其中的代码, 去掉`.mui-fullscreen`类

```html
<div id="slider" class="mui-slider">
	<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmentecontrol mui-segmented-control-inverted">
		<div class="mui-scroll">
			<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-topsubpage-html">
				推荐
			</a>
			<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
				热点
			</a>
			<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
				北京
			</a>
			<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
				社会
			</a>
			<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
				娱乐
			</a>
		</div>
	</div>
</div>
```

- 此时滑动条是无法进行正常滑动的，可能是由于 js 没写的原因，去查找官方文档，官方明确写到`若需要使用滑动条，要先初始化mui插件`
- 导入`mui.js`文件

```javascript
import mui from "../../lib/mui/js/mui.min.js"
```

- 调用官方初始化插件方法

```javascript
mui(".mui-scroll-wrapper").scroll({
   deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
})
```

- 注意：在初始化滑动条插件的时候，导入了`mui.min.js`，但是控制台报错，错误信息为

```javascript
Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode
```

- 错误信息是，在严格模式下，不能使用`'caller', 'callee', and 'arguments'`这三个属性

- 这个错误可能是`mui.min.js`中可能用到了`'caller', 'callee', and 'arguments'`这三个属性，但是`bundle.js`打包好的js中，默认启用了严格模式，所以冲突了

- 解决方案：

  - `mui.min.js`中不用`'caller', 'callee', and 'arguments'`这三个属性了，但是肯定不现实

  - 修改`webpack`禁用严格模式，移除严格模式[babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode)

    - 安装

    ```shell
    npm install babel-plugin-transform-remove-strict-mode -S
    ```

    - 配置    **.babelrc**

    ```
    {
      "plugins": ["transform-remove-strict-mode"]
    }
    ```

###### 小bug

- 滑动警告

滑动的时候报警告：`Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080`

**原因**

chrome为了提高页面的滑动流畅度而新折腾出来的一个东西： 

http://www.cnblogs.com/pearl07/p/6589114.html
https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action

**解决办法**

可以加上`* { touch-action: none; }` 这句样式。

这也是比较新的样式

- 刚进入页面无法滑动，但刷新页面之后可以滑动

全部都按照官网流程和思路走完了，发现并不能够滑动，刷新了一下页面就能滑动了，而且浏览器控制台和根目录的控制台都没有报错，为什么会这样呢？

**原因**

初始化时机很重要，按照之前的方法，直接在导入`mui.min.js`之后，`export default`之前去执行初始化滑动插件，这时候因为页面还没有初始化，这时候初始化插件没有任何意义，所以刷新一下之后才能有滑动效果，而这个初始化滑动插件的时机需要在当组件中的DOM结构被渲染好并放到页面中后，这时候才能正常使用滑动插件功能，所以放到`export default`中的`mounted()`时机中去初始化插件

```javascript
	export default {
		data() {
			...
		},
		created() { ... },
		mounted() {
		    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
		    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
		    // 2. 初始化滑动控件
		    mui(".mui-scroll-wrapper").scroll({
		      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		    })
		 },
		methods: { ... }
	}
```

- tab栏无法滑动

当前面的问题全部都解决完了之后，突然发现`tab`栏的组件又给了我一个惊喜，竟然无法正常切换了........

一步一步调试，发现和`mui`有关，但是并不知道什么原因，去引入`tabbar`组件的`App.vue`中把`router-link`标签的类`mui-tab-item`修改了个名字，就好了

##### 顶部滑动条数据渲染

```javascript
	export default {
		data() {
			...
		},
		created() {
			this.getAllCategory()
		},
		mounted() {
		   ...
		 },
		methods: {
			getAllCategory() {
				// 获取所有图片分类
				this.$http.get('api/getimgcategory').then(result => {
					if (result.body.status === 0) {
						// 根据接口文档要求，手动拼接出最完整的分类列表
						result.body.message.unshift({ title: '全部', id: 0 })
						this.categoires = result.body.message
					} else {
						Toast('获取图片失败')
					}
				})
			}
		}
	}
```

```html
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in categoires" :key="item.id">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>
```

当我把这一切写好之后，嗯，数据缺失渲染出来了，但是惊喜的是，`tabar`组件又不能正常使用了，然后我就去找原因，找来找去，什么都没改，刷新了几次网页，自己就好了，我也很无奈啊

**关于图片列表分类高亮**：

此高亮非`tabar`栏组件高亮，此高亮是`mui.scroll`内部封装的高亮效果

##### 底部图片列表

###### 懒加载

[https://mint-ui.github.io/docs/#/zh-cn/lazyload](https://mint-ui.github.io/docs/#/zh-cn/lazyload)

- 使用`mint-ui`提供的组件`Lazyload`
- 根据`Lazyload`的使用文档使用

官方文档里有一点小错误，需要注意下。。。。。

![1546591084135](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546591084135.png)

**懒加载效果无法显示**

```javascript
// 这里由于按需加载Lazyload组件有点小bug
// 全部导入 mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
```

###### 图片列表页面

```html
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </li>
    </ul>
```

```scss
	.photo_list {
	    list-style: none;
	    margin: 0;
	    padding: 10px;
	    padding-bottom: 0;
	    li {
	        background-color: #ccc;
	        text-align: center;
	        margin-bottom: 10px;
	        box-shadow: 0 0 9px #999;
	        position: relative;
	        img {
	            width: 100%;
	            vertical-align: middle;
	        }
	        img[lazy="loading"] {
	            width: 40px;
	            height: 300px;
	            margin: auto;
	        }
	        .info {
	            color: white;
	            text-align: left;
	            position: absolute;
	            bottom: 0;
	            background-color: rgba(0, 0, 0, 0.4);
	            max-height: 84px;
	            .info_title {
	                font-size: 14px;
	            }
	            .info_body {
	            	font-size: 13px;
	            }
	        }
	    }
	}
```

###### 渲染图片列表数据

```javascript
	export default {
		data() {
			...
		},
		created() {
			...
			this.getPhotoListByCateId(0)
		},
		mounted() {
		    ...
		 },
		methods: {
			getAllCategory() {
				...
			},
			getPhotoListByCateId(cateId) {
				// 根据分类id获取图片列表
				this.$http.get('api/getimages/' + cateId).then(result => {
					if (result.body.status === 0) {
						this.list = result.body.message
					} else {
						Toast('获取图片失败')
					}
				})
			}
		}
	}
```

### 图片信息

点击单个图片跳转到对应图片信息展示页面

#### router-link改造

```html
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
```

#### PhotoInfo组件

创建`components/photos/PhotoInfo.vue`

```html
<template>
	<dir>
		<h3>图片详情</h3>
	</dir>
</template>

<script></script>

<style lang="scss" scoped></style>
```

#### 配置路由

```javascript
import PhotoInfo from './components/photos/PhotoInfo.vue'
{ path: '/home/photoinfo/:id', component: PhotoInfo }
```

#### 图片详情页面

##### 头部

```html
<template>
	<div class="photoinfo-container">
		<h3>{{ photoinfo.title }}</h3>
		<p class="subtitle">
			<span>发表时间: {{ photoinfo.add_time | dateFormat }}</span>
			<span>点击次数: {{ photoinfo.click }} 次</span>
		</p>
		<hr>
		...
	</div>
</template>
```

```scss
	.photoinfo-container {
		padding: 3px;
		h3 {
			color: #26a2ff;
			font-size: 15px;
			text-align: center;
			margin: 15px 0;
		}
		.subtitle {
			display: flex;
			justify-content: between;
			font-size: 13px;
		}
		...
	}
```

```javascript
	export default {
		data() {
			return {
				id: this.$route.params.id, // 从路由中获取到的图片id
				photoinfo: {} // 图片详情
			}
		},
		created() {
			this.getPhotoInfo()
		},
		methods: {
			getPhotoInfo() {
				// 获取图片详情
				this.$http.get('api/getimageInfo/' + this.id).then(result => {
					if (result.body.status === 0) {
						this.photoinfo = result.body.message[0]
					} else {
						Toast('获取图片信息失败')
					}
				})
			}
		}
	}
```

##### 缩略图

###### vue-proview

>  一个Vue集成PhotoSwipe图片预览插件

官网[vue-preview](https://github.com/LS1231/vue-preview)

- 安装

```shell
npm i vue-preview -S
```

- 导入组件并注册

```javascript
// 4.1 导入 vue-resource
import VuePreview from 'vue-preview'
// 4.2 安装 vue-resource
Vue.use(VuePreview)
```

- 渲染数据
- 注意：
  - img标签上的class不能去掉
  - 每个图片数据对象中必须有w和h属性

```javascript
	export default {
		data() {
			...
		},
		created() {
			...
			this.getThumbs()
		},
		methods: {
			...
			getThumbs() {
				// 获取缩略图
				this.$http.get('api/getthumimages/' + this.id).then(result => {
					if (result.body.status === 0) {
						// 循环每个图片数据，补全图片的宽和高  根据官方
						result.body.message.forEach(item => {
							item.w = 600
							item.h = 400
						})
						// 把完整的数据保存到 list 中
						this.list = result.body.message
					} else {
						Toast('图片获取失败')
					}
				})
			}
		},
		...
	}
```

```html
		<!-- 缩略图区域 -->
<div class="thumbs">
	<img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
</div>
```

##### 内容

```html
<!-- 内容区域 -->
<div class="content" v-html="photoinfo.content"></div>
```

```scss
	.photoinfo-container {
		...
		.content {
			font-size: 13px;
			line-height: 30px;
		}
	}
```

```scss
	.photoinfo-container {
		...
		.thumbs{
		    img{
		        margin: 10px;
		        box-shadow: 0 0 8px #999;
		    }
		}
	}
```

##### 评论子组件

- 导入评论子组件

```javascript
import comment from '../subcomments/comment.vue'
```

- 注册评论子组件

```javascript
	export default {
		...
		components: {
			// 2.注册评论子组件
			"cmt-box": comment
		}
	}
```

- 引入到页面

```html
<!-- 3.引入到页面中 -->
<cmt-box :id="id"></cmt-box>
```

这样骚骚的评论就可以出来了

### 商品购买

#### router-link改造

```html
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	<router-link to="/home/goodslist">
	      <img src="../../images/menu3.png" alt="">
	      <div class="mui-media-body">商品购买</div>
    </router-link>
</li>
```

#### GoodList组件

创建`components/goods/GoodsList.vue`

```html
<template>
	<div>
		<h3>商品购买</h3>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

#### 配置路由

```javascript
import GoodsList from './components/goods/GoodsList.vue'
{ path: '/home/goodslist', component: GoodsList }
```

#### 绘制商品购买页面

##### 静态页面

```html
<template>
  <div class="goods-list">
    
    <div class="goods-item">
      <img src="../../images/menu1.png" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="../../images/menu1.png" alt="">
      <h1 class="title">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="../../images/menu1.png" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

  </div>
</template>
```

```scss
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
  
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
    
        .info{
            background-color: #eee;
          p{
              margin: 0;
              padding: 5px;
          }
          .price{
              .now{
                  color: red;
                  font-weight: bold;
                  font-size: 16px;
              }
              .old{
                  text-decoration: line-through;
                  font-size: 12px;
                  margin-left: 10px;
              }
          }
          .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
          }
        }
    }
}
```

##### 商品列表数据渲染

```javascript
export default {
  data() {
    // data 是往自己组件内部，挂载一些私有数据的
    return {
      pageindex: 1, // 分页的页数
      goodslist: [] // 存放商品列表的数组
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // 获取商品列表
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            // this.goodslist = result.body.message;
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    ...
  }
};
```

```html
 <div class="goods-item" v-for="item in goodslist" :key="item.id" href="">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
```

##### 加载更多

```html
<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
```

```javascript
export default {
  ...
    getMore() {
      this.pageindex++ 
      this.getGoodsList() 
    },  
  ...
};
```

### 商品详情

点击商品进入对应商品详情页面

##### router-link改造

- 在网页中，有两种跳转方式：
  - 方式一：使用 a 标签 的形式叫做 标签跳转
  - 方式二：使用 window.location.href 的形式，叫做 编程式导航

标签跳转：

```html
    <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
      ...
    </router-link>
```

编程式导航：使用js的形式进行导航

```html
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
```

编程式导航实例方法：

注意事项：**把 this 打印出来看一看配合官方文档，基本就知道怎么用了，因为我发现官方文档的router没有指明来源，所以打印出来看一看**

```javascript
export default {
  ...
    goDetail(id) {
      // 使用JS的形式进行路由导航
      // 注意： 区分 this.$route 和 this.$router 这两个对象
      // 其中： this.$route 是路由【参数对象】，所有路由中的参数， params, query 都属于它
      // 其中： this.$router 是一个路由【导航对象】，用它 可以方便的 使用 JS 代码，实现路由的 前进、后退、 跳转到新的 URL 地址
      // console.log(this) // 重要的是把 this 打印出来看一看，基本就知道怎么用了
      // 1. 最简单的
      // this.$router.push("/home/goodsinfo/" + id) 
      // 2. 传递对象
      // this.$router.push({ path: "/home/goodsinfo/" + id }) 
      // 3. 传递命名的路由 此处name和路由规则处的name一致，进行关联，从而实现路由导航
      this.$router.push({ name: "goodsinfo", params: { id } }) 
    }
  }
};
```

刚好，把打印出来的`this`的一小部分截图也放在这里

![1546607881361](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546607881361.png)

其实红框选中的就是官方文档中提到的`router`

这里打开`$router.history`,可以看到这里很多我自己文件的东西，例如这里的的`options`对象是我在组件切换的时候为了组件高亮功能配置的一个选项，这里的`history.current`对象记录了当前的路由`name`和`url`路径

![1546608276006](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546608276006.png)

##### GoodsInfo组件

新建`components/goods/GoodsList.vue`

```html
<template>
	<div>
		<h1>商品详情</h1>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

##### 配置路由

标签跳转：配置路由方式

```javascript
import GoodsInfo from './components/goods/GoodsInfo.vue'
{ path: '/home/goodsinfo/:id', component: GoodsInfo }
```

编程式导航：配置路由方式

```javascript
import GoodsInfo from './components/goods/GoodsInfo.vue'
{ path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' }
```

##### 商品详情页面

######基本页面绘制

- 借助插件`mui-master\examples\hello-mui\examples\.card.html`

```html
		<!-- 商品轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信、点赞数量等
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
				</div>
			</div>
			<div class="mui-card-footer">页脚</div>
		</div>
		<!-- 商品参数区域 -->
		<div class="mui-card">
			<div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
				</div>
			</div>
			<div class="mui-card-footer">页脚</div>
		</div>
```

```scss
	.goodsinfo-container {
		background-color: #eee;
		overflow: hidden;
	}
```

######轮播图区域

这里由于在首页中也用到轮播图了，所以为了不重复性的工作，需要将轮播图抽离为一个单独的子组件，方便调用

1.  新建一个`subcomments/swiper.vue`组件

```html
<template>
	<div></div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

2. 将首页`HomeContainer.vue`中的轮播图区域剪切过来粘贴到`swiper.vue`合适位置中

```html
<template>
	<div>
		<mt-swipe :auto="1000">
		  <mt-swipe-item v-for="item in bannerList" :key="item.url">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script></script>

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
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
```

这样一个轮播图组件就只做好了

**将来谁使用轮播图组件，谁给轮播图传递bannerList，即传递轮播图数据**

```javascript
...
<script>
	export default {
		props: ["bannerList"]
	}
</script>
...
```

3. 导入组件

在合适的位置导入组件：

`HomeContainer.vue`

```javascript
// 1.1 导入子组件
import swiper from '../subcomments/swiper.vue'

export default {
	...
	// 1.2 绑定子组件
	components: {
		swiper
	}
}
```

```html
<template>
	<div>
		<!-- 轮播图区域 -->
		<!-- 1.3 放入页面 -->
		<swiper :bannerList="bannerList"></swiper>
		...
	</div>
</template>
```

`GoodsInfo.vue`

```javascript
// 1.1 导入子组件
import swiper from '../subcomments/swiper.vue'

export default {
	...
	// 1.2 绑定子组件
	components: {
		swiper
	}
}
```

```html
<template>
	<div class="goodsinfo-container">

		<!-- 商品轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!-- 轮播图区域 -->
					<!-- 1.3 放入页面 -->
					<swiper :bannerList="banner"></swiper>
				</div>
			</div>
		</div>
		...
	</div>
</template>
```

###### 小bug

1. 在`GoodsInfo.vue`页面出了个小问题，轮播图并没有显示出来

去查看轮播图组件发现，`:src`拿到的是`item.img`

![1546611127318](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546611127318.png)

而我们在接口的是这样的数据，只有`item.src`

![1546611149330](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546611149330.png)

所以对拿到的数据进行处理：

先循环轮播图数组的每一项，为 item 添加 img 属性，因为轮播图组件中只认识 item.img, 不认识 item.src

```javascript
// 循环给每一项 item.img 做 赋值处理就行
	export default {
		...
		methods: {
			getBanner() {
				this.$http.get('api/getthumimages/' + this.id).then(result => {
					if (result.body.status === 0) {
						result.body.message.forEach(item => {
							item.img = item.src
						})
						this.banner = result.body.message
					} else {
						Toast('获取商品详情失败')
					}
				})
			}
		},
		...
	}
```

2. 在商品详情页面中，轮播图的图片如果也是用宽高为100%的话，页面不好看

3. 商品详情页面的轮播期望高度是100%，但宽度为自适应，这时候会好看

4. 解决方案：从宽度解决，定义一个属性，让使用轮播图的调用者手动指定是否为100%宽度

   1.  给需要使用轮播图组件的组件的轮播图区域加一个变量`:isfull="true"`便于控制类的样式是否应用，在`HomeContainer.vue`中就可以这样写：

   ```html
   <template>
   	<div>
   		<!-- 轮播图区域 -->
   		<!-- 1.3 放入页面 -->
   		<swiper :bannerList="bannerList" :isfull="true"></swiper>
   		...
   	</div>
   </template>
   ```

   在`GoodsInfo.vue`组件的同样地方加上一个变量`:isfull="false"`便于控制类的样式是否应用

   ```html
   <template>
   	<div>
   		<!-- 轮播图区域 -->
   		<!-- 1.3 放入页面 -->
   		<swiper :bannerList="bannerList" :isfull="false"></swiper>
   		...
   	</div>
   </template>
   ```

   2. 改造`swiper.vue`

   ```html
   <template>
   	...
   		  	<img :src="item.img" alt="" :class="{'full': isfull}">
   		 ...
   </template>
   ```

   ```javascript
   	export default {
   		props: ["bannerList", "isfull"]
   	}
   ```

   ```scss
   	.mint-swipe {
   		...
   			img {
   				height: 100%;
   			}
   	}
   	.full {
   		width: 100%;
   	}
   ```

   这样就实现了，子组件根据父组件的需求来决定应用什么样的类样式，但此时还有一个问题，就是当高100%，宽度自适应时，`GoodsInfo.vue`中的轮播图会有大量留空位置

   ![1546613019634](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546613019634.png)

   **解决方案：**

   由于图片是在`.mint-swipe-item`这个类中，所以直接加个居中对齐，把原来定义的背景色（本来就不需要的）删掉

   ```scss
   	.mint-swipe {
   		...
   		.mint-swipe-item {
   			text-align: center;
   			...
   	}
   	...
   ```

**这样两个父组件中的轮播图都好看了**

######商品购买区域

1. 基本页面绘制

```html
<template>
	<div class="goodsinfo-container">

		...
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">商品名称</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价: <del>￥2399</del>&nbsp;&nbsp;销售价: <span class="now_price">￥2199</span>
					</p>
					<p>购买数量: </p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small">加入购物车</mt-button>
					</p>
				</div>
			</div>
			
		</div>
		...

	</div>
</template>
```

```scss
	.goodsinfo-container {
		...
		.now_price {
			color: red;
			font-size: 16px;
			font-weight: bold;
		}
	}
```

2. 加减数量插件

`mui-master\examples\hello-mui\examples\numberbox.html` ，由于后面加减数量插件可能不止用一次，于是封装为一个组件`components\subcomments\goodsinfo_numbox.vue`

```html
<template>
	<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" />
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

然后去`GoodsInfo.vue`导入、注册、引入页面

```javascript
	// 2.1 导入数组选择框子组件
	import number from '../subcomments/goodsinfo_numbox.vue'
	export default {
		...
		components: {
			...
			number
		}
	}
```

```html
<template>
	<div class="goodsinfo-container">

		...
		<!-- 商品购买区域 -->
		<div class="mui-card">
			...
					<p>购买数量: <number></number></p>			
			...
		</div>
		...
	</div>
</template>
```

这样就实现了基本页面，然后进行相关的js初始化插件操作，参考mui官方文档，`goodsinfo_numbox.vue`

添加代码

```javascript
	import mui from '../../lib/mui/js/mui.min.js'
	export default {
		mounted() {
			// 初始化数字选择框组件
			mui('ui-numbox').numbox()
		}
	}
```

这样就可以正常点击数字组件进行加减操作了

######商品参数区域

**静态页面**

```html
		<!-- 商品参数区域 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号: </p>
					<p>库存情况: </p>
					<p>上架时间: </p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain>图文介绍</mt-button>
				<!-- <br> 此时br不生效，说明父元素启用了br布局，需要在类中去掉 -->
				<mt-button type="danger" size="large" plain>商品评论</mt-button>
			</div>
		</div>
```

```scss
	.goodsinfo-container {
		...
		.mui-card-footer {
			display: block;
			button {
				margin: 15px 0;
			}
		}
	}
```

##### 动态数据渲染

```javascript
	export default {
		...
			getGoodsInfo() {
				// 获取商品信息
				this.$http.get('api/goods/getinfo/' + this.id).then(result => {
					if (result.body.status === 0) {
						this.goodsinfo = result.body.message[0]
					} else {
						Toast('获取商品信息失败')
					}
				})
			}
		},
		...
	}
```

```html
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">{{ goodsinfo.title }}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价: <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价: <span class="now_price">￥{{ goodsinfo.sell_price }}</span>
					</p>
					<p>购买数量: <number></number></p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>
		<!-- 商品参数区域 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号: {{ goodsinfo.goods_no }}</p>
					<p>库存情况: {{ goodsinfo.stock_quantity }} 件</p>
					<p>上架时间: {{ goodsinfo.add_time | dateFormat }}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain>图文介绍</mt-button>
				<!-- <br> 此时br不生效，说明父元素启用了br布局，需要在类中去掉 -->
				<mt-button type="danger" size="large" plain>商品评论</mt-button>
			</div>
		</div>
```

这样就实现了`GoodsInfo.vue`页面动态数据渲染

### 图文介绍

点击图文介绍进入图文介绍页面

#### 编程式跳转——图文介绍

- 在`goods`文件夹下创建`GoodsDesc.vue`

```html
<template>
	<div>
		<h3>图文介绍</h3>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

- 给图文介绍按钮添加点击事件

```html
<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
```

- 在导出的`methods`对象中加入方法`goDesc`

```javascript
goDesc(id) {
	// 点击使用编程式导航进入图文介绍页面
	this.$router.push({ name: "goodsdesc", params: { id } }) 
},
```

- 配置路由

```javascript
import GoodsDesc from './components/goods/GoodsDesc.vue'
{ path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
```

####静态页面

```html
<template>
	<div class="goodsdesc-container">
		<h3>图文介绍</h3>
	</div>
    <div class="content">内容区域</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

```scss
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
```

####数据渲染

```html
<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>

    <hr>

    <div class="content" v-html="info.content"></div>
  </div>
</template>
```

```javascript
<script>

	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				id: this.$route.params.id,
				info: {}
			}
		},
		created() {
			this.getGoodsDesc()
		},
		methods: {
			getGoodsDesc() {
				this.$http.get('api/goods/getdesc/' + this.id).then(result => {
					if (result.body.status === 0) {
						this.info = result.body.message[0]
					} else {
						Toast('获取图文详情失败')
					}
				})
			}
		},
	}
</script>
```

### 商品评论

点击商品评论进入商品评论页面

####编程式跳转——图文介绍

- 在`goods`文件夹下创建`GoodsComment.vue`

```html
<template>
	<div>
		<h3>图文介绍</h3>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
```

- 给图文介绍按钮添加点击事件

```html
<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
```

- 在导出的`methods`对象中加入方法`goDesc`

```javascript
goComment(id) {
	// 点击使用编程式导航进入商品评论页面
	this.$router.push({ name: "goodscomment", params: { id } }) 
},
```

- 配置路由

```javascript
import GoodsComment from './components/goods/GoodsComment.vue'
{ path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
```

####引入评论子组件

- 导入评论子组件

```javascript
import cmtbox from '../subcomments/comment.vue'
```

- 绑定评论子组件

```javascript
export default {
	components: {
		cmtbox
	}
}
```

- 引入到页面 
- 注意：这里要根据id去加载评论，所以要绑定id

```html
<cmtbox :id="this.$route.params.id"></cmtbox>
```

### 购物车动画

####商品详情页面购物车动画

在制作商品详情的时候，还有一个点击加入购物车按钮，有个小球掉入购物车，同时购物车数量同步等业务没有去做，这里要完成

###### 控制小球显示与隐藏

- 在data中加入`ballFlag`标识符，用来控制小球的显示和隐藏
- 定义一个切换ballFlag属性的函数，控制ballFlag为true还是false
- 为加入购物车按钮添加点击事件

```javascript
data() {
			return {
				...
				ballFlag: false // 控制小球显示和隐藏标识，默认隐藏
			}
		},
methods: {
    		...
            addToShopcar() {
				this.ballFlag = !this.ballFlag
			} , 
    		...
          }
```

###### 控制小球位移位置(半场动画)

- 为小球的div包裹transition元素
- 为该transition绑定三个半场动画事件
- 编写半场动画事件

```html
		<!-- 小球 -->
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter">
			<div class="ball" v-show="ballFlag"></div>
		</transition>
```

```javascript
methods: {
    ...
			beforeEnter(el) {
				el.style.transform = 'translate(0, 0)'
			},
			enter(el, done) {
				// 加一个 el.offsetWidth ,不然下面代码不生效 
				el.offsetWidth
				el.style.transform = 'translate(93px, 230px)'
				el.style.transition = 'all 1s cubic-bezier(.4,-0.3,1,.68)'
				done()
			},
			afterEnter(el) {
				this.ballFlag = !this.ballFlag
			}
    ...
}
```

**小bug修复**

**小球动画优化思路：**
1、分析导致动画不准确的原因，我们把小球最终的位置已经固定了，所以只要测试的时候滚动了距离或者不同分辨率，问题就显示出来了
2、 所以位移的距离不能固定，应该让他跟着滚轮的滚动或者分辨率的变化而变化

3、不管滚动条如何变化或者分辨率如何变化，最终位移的距离都是购物车数字位置的坐标减去小球初始位置的横纵坐标

4、看到github中原项目使用了`getBoundingClientRect()`去获取元素的位置，于是我给`ball`的div加了一个id选择器`ballflag`,在控制台打印出了这个div的结构，发现原型对象中是有这样一个方法的

![1546659734088](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546659734088.png)

5、接着我打印了`$('#ballflag').getBoundingClientRect()`的结构

![1546660121543](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546660121543.png)

6、可以看到这个结果是一个对象，所以位置可以通过`dom.left`和`dom.top`拿到

```javascript
// 将 enter 方法改造
			enter(el, done) {
				// 加一个 el.offsetWidth ,不然下面代码不生效 
				el.offsetWidth
				// 获取小球在页面中的位置
				const ballPosition = this.$refs.ball.getBoundingClientRect()
				// 获取购物车右上角数量标识在页面中的位置
                // 这里获取id之前，需要在App.vue对应位置，添加上该id="badge"的属性
				const badgePosition = 		document.getElementById('badge').getBoundingClientRect()
				// 求出位移
				var transX = badgePosition.left - ballPosition.left
				var transY = badgePosition.top - ballPosition.top

				el.style.transform = `translate(${transX}px, ${transY}px)`
				el.style.transition = 'all 1s cubic-bezier(.4,-0.3,1,.68)'
				done()
			}
```

#### 购物车数量标识

购物车数量标识同步变化，每当numbox的值发生变化，立即把购买数量传递给父组件

思路：

1、按钮属于goodsinfo组件，数字属于goodsinfo_numbox组件，所以涉及嵌套，无法直接在goodsinfo页面中直接获取选中的数量值

2、涉及到子组件向父组件传值（事件调用机制）

3、事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当做参数传递给这个方法

4、父组件定义接收方法

```javascript
data() {
			return {
				...
				selectedCount: 1 // 保存用户选中的商品数量，默认为 1
			}
		},
methods: {
    ...
    getSelectedCount() {
				// 当子组件把选中的数据传递给父组件的对象时，保留到data上
				// 并添加属性  @getcount="getSelectedCount" 这时候已经把方法传递给子组件了，这时候去子组件进行事件调用
				this.selectedCount = count
			},
    ...
}
```

```html
<p>购买数量: <number @getcount="getSelectedCount"></number></p>
```

5、子组件绑定监听事件，每当文本框最新的数据被修改时，通过事件调用传递给父组件

```javascript
...  
methods: {
    countChanged() {
      // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
      // console.log(this.$refs.number.value);
      this.$emit("getcount", parseInt(this.$refs.number.value))
    }
  },
      ....
```

```html
<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="number" />
```

#### 设置最大值

设置最大值为库存，涉及到父向子传值

- 父组件中绑定`:max`

```html
<p>购买数量: <number @getcount="getSelectedCount" :max="goodsinfo.market_quantity"></number></p>
```

- 子组件中用`props`接收

```javascript
props: ["max"],
```

这样测试了一下，依然能添加商品超过库存，打印出来这个`max`，发现是`undefined`，然后去去找`max`的来源，max来源于`父组件的max`，`父组件的max`来源于`goodsinfo.market_quantity`，然后去看到`goodsinfo`的来源，是来源自`methods`中一个`Promise`异步操作的方法，所以当渲染页面的时候，很可能还没有从服务器拿到`goodsinfo.market_quantity`, 所以是`undefined`

解决方案：

什么时候能拿到很关键。

所以去监听这个`max`, 通过`JSAPI`去操作最大值，不管`watch`会被触发几次，但是最后一次肯定是一个合法的`max`的`number`值

```javascript
...  
watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal)
    }
  }
...
```

## vuex购物车状态管理

vuex状态管理实现购物车数据同步，状态管理

vuex 详细安装和使用方法参见[git@github.com:ForeManWang/vuex-study.git](git@github.com:ForeManWang/vuex-study.git)

### 安装和使用

```shell
// 安装
cnpm i vuex -S
```

```javascript
// 5.1 导入 vuex
import Vuex from 'vuex'
// 5.2 注册 vuex
Vue.use(Vuex)
// 5.3 创建 vuex 实例对象
var store = new Vuex.Store({
	state: {
		// this.$route.state.***
	},
	mutations: {
		// this.$store.commit('方法名称', '按需传入唯一的参数')
	},
	getters: {
		// this.$store.getters.***
	}
})
var vm = new Vue({
	...
	// 5.4 挂载 vuex 实例对象到 vm 实例上
	store
})
```

### 加入购物车

当点击加入购物车的时候，将购物车中的数据存储到 购物车 数组中

 分析: 
	1、如果购物车中之前就已经有这个对应的商品了，那么只需要更新数量就行了
	2、如果没有则直接把商品数据，push到 car 数组中即可
	3、可以设置标识符 flag ，利用布尔值来判断找没找到的操作
	4、可先假设没有找到，则就设置flag = false

将购物车中的数据存储到 car 数组中, 在 car 中存储一些商品的对象, 可以暂时将商品对象设计为 { id: id, count: 购买数量, price: 商品单价, selected: 是否被选中(true or false) }

```javascript
var store = new Vuex.Store({
	state: {
		// this.$route.state.***
		car: [] 
	},
	mutations: {
		// this.$store.commit('方法名称', '按需传入唯一的参数')
		addToCar(state, goodsinfo) {
			// 点击加入购物车，把商品保存到 store 中的 car 上	
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
		}
	},
	getters: {
		// this.$store.getters.***
	}
})
```

去`GoodsInfo.vue`组件中传值

```javascript
			addToShopcar() {
				this.ballFlag = !this.ballFlag
				var goodsinfo_vuex = { id: this.id, count: this.selectedCount, price: this.goodsinfo.sell_price, selected: true }
				// 调用 store 中的 mutations 来加入购物车
				this.$store.commit('addToCar', goodsinfo_vuex)
			},
```

这样就点击加入购物车就可以看到效果了

![1546678257230](C:\Users\wanggongtou\Desktop\vue-shopping\assets\1546678257230.png)

### 购物车标识数量同步

购物车组件右上角标识数量需要和添加到的数量进行同步，这里使用`getters`进行数据包装

```javascript
	getters: {
		// this.$store.getters.***
		getAllCount(state) {
			var c = 0
			state.car.forEach(item => {
				c += item.count
			})
			return c
		}
	}
```

找到`App.vue`调用`getters`

```html
<span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
```

这样实现同步

**但是一刷新，购物车标识数据就没了，所以需要将数据保存到本地存储localStorage中，实现持久化存储**

- 每次刚进入网站，肯定会调用 main.js 在刚调用的时候，先从本地存储中把购物车的数据读出来，放到store中

```javascript
var car = JSON.parse(localStorage.getItem('car') || '[]')
state: {
		car: car
	},
```

- 当更新 car 之后, 把 car 数组存储到本地的 localStorage 中去, 实现持久化存储

```javascript
localStorage.setItem('car', JSON.stringify(state.car))
```

这样再加入购物车，刷新页面，购物车就不会清空了

### 购物车静态页面绘制

借助`mui`下的`card.html`中一段代码段

```html
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
```

商品列表项区域和结算区域都用的是上面的代码段

微调样式

```scss
	.shopcar-container {
		background-color: #eee;
		overflow: hidden;
	}
```

**选中和取消选中绘制，利用`mint-ui`中的组件`switch`**

由于之前是全局导入的`mint-ui`这里不需要再次导入，可以直接拿来使用

```html
<mt-switch></mt-switch>
```

数字插件，自己创建一个新的组件`shopcar_number.vue`

```html
<template>
  <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

  <!-- 分析： 子组件什么时候把 数据传递给父组件 -->
  <!--  -->
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      // 数量改变了
      // console.log(this.$refs.numbox.value);
      // 每当数量值改变，则立即把最新的数量同步到 购物车的  store 中，覆盖之前的数量值
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsid,
        count: this.$refs.numbox.value
      });
    }
  },
  props: ["initcount", "goodsid"]
};
</script>

<style lang="scss" scoped>

</style>

```

在`ShopcarContainer.vue`中引用

```javascript
	import numbox from '../subcomments/shopcar_numbox.vue'
	export default {
		components: {
			numbox
		}
	}
```

```html
<numbox></numbox>
```

```scss
<style lang="scss" scoped>
	.shopcar-container {
		background-color: #eee;
		overflow: hidden;
		.goods-list {
			.mui-card-content-inner {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			img {
				width: 60px;
				height: 60px;
			}
			h1 {
				font-size: 13px;
			}
			.info {
				display: flex;
				flex-direction: column;

				.price {
					color: red;
					font-weight: bold;
				}
			}
		}
	}
</style>
```

### 购物车动态页面

```javascript
	import numbox from '../subcomments/shopcar_numbox.vue'
	import { Toast } from 'mint-ui'
	export default {
		data() {
			return {
				goodslist: [] // 购物车所有商品数据
			}
		},
		created() {
			this.getGoodsList()
		},
		methods: {
			getGoodsList() {
				// 获取购物车商品列表
				// 1、获取到 store 中所有的商品 id
				var idArr = []
				this.$store.state.car.forEach(item => idArr.push(item.id))
				if (idArr.length <= 0) return;
				this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result => {
					if (result.body.status === 0) {
						this.goodslist = result.body.message
					} else {
						Toast('获取购物车商品列表失败')
					}
				})
			}
		},
		components: {
			numbox
		}
	}
```

```html
		<!-- 商品列表项区域 -->
		<div class="goods-list" v-for="item in goodslist" :key="item.id">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
						<img :src="item.thumb_path">
						<div class="info">
							<h1>{{ item.title }}</h1>
							<p>
								<span class="price">￥{{ item.sell_price }}</span>
								<numbox></numbox>
								<a href="">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
```

#### 本地与服务器同步

这时候只有本地有数量，而服务器中还没有数量，需要将本地存储的数量都给加载进去

> 思路：
>
> 创建新对象，循环购物车商品的数据，把每一项的id值作为新对象的属性名，每一项的count值作为新对象的值，当所有的商品循环一遍，就会得到一个对象 { 88: 2, 45: 3 } 

- 包装数据

```javascript
var store = new Vuex.Store({
	...
	getters: {
		...
		getGoodsCount(state) {
			var goodscount = {}
			state.car.forEach(item => {
				goodscount[item.id] = item.count
			})
			return goodscount
		}
	}
})
```

- 父组件给子组件传值

```javascript
props: ["initcount"]
```

- 引入页面

```html
<input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly />
```

`main.js`

```javascript
	mutations: {
		...
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
		}
	},
```

`shopcar_numbox.vue`

```javascript
    countChanged() {
      // 数量改变了
      // 每当数量改变则把最新的数量更新到购物车中
      this.$store.commit('updateGoodsNum', { id: this.goodsid, count: this.$refs.numbox.value })
    }
```

#### 购物车商品删除

**本地删除**

```javascript
		methods: {
			...
			remove(id, index) {
				// 点击删除把store中商品根据传递的id删除，同时把当前组件中的goodslist中要删除的那个商品用index来删除
				this.goodslist.splice(index, 1) // 本地的删除
			}
		},
```

**远程删除**

```javascript
mutations: {
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
		}
}
// 再去购物车组件进行远程删除的调用
		methods: {
			remove(id, index) {
				this.$store.commit('removeFormCar', id)
			}
		},
```

这样就实现了删除，并保持了本地和服务器的数据同步

### 结算区域

#### 静态页面

```html
		<!-- 结算区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner settlement">
					<div class="left">
						<p>总计(不含运费)</p>
						<p>已勾选商品 <span class="red">0</span> 件, 总价 <span class="red">￥0</span></p>
					</div>
					<mt-button type="danger">去结算</mt-button>
				</div>	
			</div>
		</div>
```

### store选中状态的商品同步到页面上

```javascript
getters: {
    	getGoodsSelected(state) {
		var isSelected = {}
		state.car.forEach(item => {
			isSelected[item.id] = item.selected
		})
		return isSelected
		}	
}
```

```html
// 引用到页面
<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
```

### store状态保存

同步商品的勾选状态到store中保存

```javascript
getters: {
    	updateGoodsSelected(state, info) {
		state.car.some(item => {
			if (item.id == info.id) {
				item.selected = info.selected
			}
		})
		// 当把最新的购物车商品选中状态存储到本地的 localStorage 中去, 实现持久化存储
		localStorage.setItem('car', JSON.stringify(state.car))
	}
}
```

在组件中调用

```javascript
methods: {
    ...
	selectedChange(id, val) {
		// 每当点击开关，把最新的状态同步到 store 中
		this.$store.commit('updateGoodsSelected', { id, selected: val })
	}
    ...
}
```

绑定到页面中

```html
<mt-switch 
	v-model="$store.getters.getGoodsSelected[item.id]" 
	@change="selectedChange(item.id, $store.getters.getGoodsSelected[item.id])">
</mt-switch>
```

这样就实现了store数据保存

### 商品勾选数量和总价计算

```javascript
getters: {
    ...
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
    ...
}
```

渲染到页面上

```html
<!-- 结算区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner settlement">
					<div class="left">
						<p>总计(不含运费)</p>
						<p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件, 总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
					</div>
					<mt-button type="danger">去结算</mt-button>
				</div>	
			</div>
		</div>
```

## 返回按钮

小功能

利用`mint-ui`的组件,放在`App.vue`的`Header`区域

```html
<span slot="left" @click="goBack" v-show="flag">
    <mt-button icon="back">返回</mt-button>
 </span>
```

实现方法

```javascript
	export default {
		data() {
			return {
				flag: false
			}
		},
		created() {
			this.flag = this.$route.path === '/home' ? false : true
		},
		methods: {
			goBack() {
				// 点击后退
				this.$router.go(-1)
			}
		},
		watch: {
			'$route.path': function (newVal) {
				if (newVal === '/home') {
					this.flag = false
				} else {
					this.flag = true
				}
			}
		}
	}
```

至此，该项目基本开发完毕

## 项目部署

部署`Apache`站点

将不必要的部署的文件`node_modules`和`dist`删除，用`webpack`打包，将打包的`dist`中的文件，放到网站根目录，就可以

### 开启Apache的gzip压缩

要让apache支持gzip功能，要用到deflate_Module和headers_Module。打开apache的配置文件httpd.conf，大约在105行左右，找到以下两行内容：（这两行不是连续在一起的）

```
#LoadModule deflate_module modules/mod_deflate.so
#LoadModule headers_module modules/mod_headers.so
```

然后将其前面的“#”注释删掉，表示开启gzip压缩功能。开启以后还需要进行相关配置。在httpd.conf文件的最后添加以下内容即可：

```
<IfModule deflate_module>
    #必须的，就像一个开关一样，告诉apache对传输到浏览器的内容进行压缩
    SetOutputFilter DEFLATE
    DeflateCompressionLevel 9
</IfModule>
```

最少需要加上以上内容，才可以生gzip功能生效。由于没有做其它的额外配置，所以其它相关的配置均使用Apache的默认设置。这里说一下参数“DeflateCompressionLevel”，它表示压缩级别，值从1到9，值越大表示压缩的越厉害。

### 使用ngrok将本机映射为一个外网的Web服务器

注意：由于默认使用的美国的服务器进行中间转接，所以访问速度炒鸡慢，访问时可启用FQ软件，提高网页打开速度！

## 手机调试

- 手机和电脑在同一局域网中

- 打开自己项目中 `package.json`文件，在`dev`脚本中添加`--host`指令，把当前电脑的`WIFI IP`地址设置为指令的值

- `cmd`终端中运行`ipconfig`查看无线网`IP`地址

  



























































































#### 






























































