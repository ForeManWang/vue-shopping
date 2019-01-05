<template>
	<div class="shopcar-container">

		<!-- 商品列表项区域 -->
		<div class="goods-list">
			<div class="mui-card"  v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch 
							v-model="$store.getters.getGoodsSelected[item.id]" 
							@change="selectedChange(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
						<img :src="item.thumb_path">
						<div class="info">
							<h1>{{ item.title }}</h1>
							<p>
								<span class="price">￥{{ item.sell_price }}</span>
								<numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
								<a href="#" @click.prevent="remove(item.id, i)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

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

	</div>
</template>

<script>
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
			},
			remove(id, index) {
				// 点击删除把store中商品根据传递的id删除，同时把当前组件中的goodslist中要删除的那个商品用index来删除
				this.goodslist.splice(index, 1) // 本地的删除
				this.$store.commit('removeFormCar', id)
			},
			selectedChange(id, val) {
				// 每当点击开关，把最新的状态同步到 store 中
				this.$store.commit('updateGoodsSelected', { id, selected: val })
			}
		},
		components: {
			numbox
		}
	}
</script>

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
		.settlement {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.red {
				color: red;
				font-size: 16px;
				font-weight: bold;
			}
		}
	}
</style>