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



















## 手机调试

- 手机和电脑在同一局域网中

- 打开自己项目中 `package.json`文件，在`dev`脚本中添加`--host`指令，把当前电脑的`WIFI IP`地址设置为指令的值

- `cmd`终端中运行`ipconfig`查看无线网`IP`地址

  



























































































#### 






























































