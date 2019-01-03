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



#### 






























































