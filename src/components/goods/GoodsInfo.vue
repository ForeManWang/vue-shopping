<template>
	<div class="goodsinfo-container">
		<!-- 小球 -->
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter">
			<div class="ball" v-show="ballFlag" ref="ball" id="ballflag"></div>
		</transition>
		<!-- 商品轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!-- 轮播图区域 -->
					<!-- 1.3 放入页面 -->
					<swiper :bannerList="banner" :isfull="false"></swiper>
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">{{ goodsinfo.title }}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价: <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价: <span class="now_price">￥{{ goodsinfo.sell_price }}</span>
					</p>
					<p>购买数量: <number @getcount="getSelectedCount" :max="goodsinfo.market_quantity"></number></p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
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
				<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
				<!-- <br> 此时br不生效，说明父元素启用了br布局，需要在类中去掉 -->
				<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
			</div>
		</div>

	</div>
</template>

<script>

	import { Toast } from 'mint-ui'
	// 1.1 导入子组件
	import swiper from '../subcomments/swiper.vue'
	// 2.1 导入数组选择框子组件
	import number from '../subcomments/goodsinfo_numbox.vue'

	export default {
		data() {
			return {
				id: this.$route.params.id, // 将路由参数中的id挂在到data上，方便后期调用
				banner: [],  // 轮播图的数据
				goodsinfo: {}, // 获取到的商品信息
				ballFlag: false, // 控制小球显示和隐藏标识，默认隐藏
				selectedCount: 1 // 保存用户选中的商品数量，默认为 1
			}
		},
		created() {
			this.getBanner()
			this.getGoodsInfo()
		},
		methods: {
			getBanner() {
				this.$http.get('api/getthumimages/' + this.id).then(result => {
					if (result.body.status === 0) {
						result.body.message.forEach(item => {
							item.img = item.src
						})
						this.banner = result.body.message
					} else {
						Toast('获取商品图片失败')
					}
				})
			},
			getGoodsInfo() {
				// 获取商品信息
				this.$http.get('api/goods/getinfo/' + this.id).then(result => {
					if (result.body.status === 0) {
						this.goodsinfo = result.body.message[0]
					} else {
						Toast('获取商品信息失败')
					}
				})
			},
			goDesc(id) {
				// 点击使用编程式导航进入图文介绍页面
				this.$router.push({ name: "goodsdesc", params: { id } }) 
			},
			goComment(id) {
				// 点击使用编程式导航进入商品评论页面
				this.$router.push({ name: "goodscomment", params: { id } }) 
			},
			addToShopcar() {
				this.ballFlag = !this.ballFlag
			},
			beforeEnter(el) {
				el.style.transform = 'translate(0, 0)'
			},
			enter(el, done) {
				// 加一个 el.offsetWidth ,不然下面代码不生效 
				el.offsetWidth
				// 获取小球在页面中的位置
				const ballPosition = this.$refs.ball.getBoundingClientRect()
				// 获取购物车右上角数量标识在页面中的位置
				const badgePosition = document.getElementById('badge').getBoundingClientRect()
				// 求出位移
				var transX = badgePosition.left - ballPosition.left
				var transY = badgePosition.top - ballPosition.top

				el.style.transform = `translate(${transX}px, ${transY}px)`
				el.style.transition = 'all 0.6s cubic-bezier(.4,-0.3,1,.68)'
				done()
			},
			afterEnter(el) {
				this.ballFlag = !this.ballFlag
			},
			getSelectedCount(count) {
				// 当子组件把选中的数据传递给父组件的对象时，保留到data上
				// 并添加属性  @getcount="getSelectedCount" 这时候已经把方法传递给子组件了，这时候去子组件进行传值
				this.selectedCount = count
				console.log("父组件拿到的数量值为： " + this.selectedCount)
			}
		},
		components: {
			swiper,
			number
		}
	}
</script>

<style lang="scss" scoped>
	.goodsinfo-container {
		background-color: #eee;
		overflow: hidden;
		.now_price {
			color: red;
			font-size: 16px;
			font-weight: bold;
		}
		.mui-card-footer {
			display: block;
			button {
				margin: 15px 0;
			}
		}
		.ball {
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background-color: red;
			position: absolute;
			top: 390px;
			left: 144px;
			z-index: 88;
		}
	}
</style>