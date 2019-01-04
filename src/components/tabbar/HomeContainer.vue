<template>
	<div>
		<!-- 轮播图区域 -->
		<!-- 1.3 放入页面 -->
		<swiper :bannerList="bannerList" :isfull="true"></swiper>
		<!-- 九宫格改造为六宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
	      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	        <router-link to="/home/newslist">
	              <img src="../../images/menu1.png" alt="">
	              <div class="mui-media-body">新闻资讯</div></router-link></li>
	      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	      	<router-link to="/home/photolist">
	              <img src="../../images/menu2.png" alt="">
	              <div class="mui-media-body">图片分享</div></router-link></li>
	      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	      	<router-link to="/home/goodslist">
	              <img src="../../images/menu3.png" alt="">
	              <div class="mui-media-body">商品购买</div></router-link></li>
	      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	      	<router-link to="/home/goodslist">
	              <img src="../../images/menu4.png" alt="">
	              <div class="mui-media-body">留言反馈</div></router-link></li>
	      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	      	<router-link to="/home/photolist">
	              <img src="../../images/menu5.png" alt="">
	              <div class="mui-media-body">视频专区</div></router-link></li>
	      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	      	<router-link to="/home/photolist">
	              <img src="../../images/menu6.png" alt="">
	              <div class="mui-media-body">联系我们</div>
	        </router-link></li>
	    </ul> 
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	// 1.1 导入子组件
	import swiper from '../subcomments/swiper.vue'

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
				this.$http.get("api/getlunbo").then(result => {
					if (result.body.status === 0) {
						this.bannerList = result.body.message
					} else {
						Toast('加载轮播图失败')
					}
				})
			}
		},
		// 1.2 绑定子组件
		components: {
			swiper
		}
	}
</script>

<style lang="scss" scoped>
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
</style>