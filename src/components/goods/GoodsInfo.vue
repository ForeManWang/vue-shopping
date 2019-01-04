<template>
	<div class="goodsinfo-container">

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
				goodsinfo: {} // 获取到的商品信息
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
	}
</style>