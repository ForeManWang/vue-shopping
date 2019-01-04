<template>
	<div class="photoinfo-container">
		<h3>{{ photoinfo.title }}</h3>
		<p class="subtitle">
			<span>发表时间: {{ photoinfo.add_time | dateFormat }}</span>
			<span>点击次数: {{ photoinfo.click }} 次</span>
		</p>
		<hr>

		<!-- 缩略图区域 -->
		<div class="thumbs">
	      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
	    </div>
		<!-- 内容区域 -->
		<div class="content" v-html="photoinfo.content"></div>

		<!-- 评论子组件 -->
		<!-- 3.引入到页面中 -->
		<cmt-box :id="id"></cmt-box>
	</div>
</template>

<script>
	// 1.导入评论子组件
	import comment from '../subcomments/comment.vue'

	import { Toast } from 'mint-ui' 

	export default {
		data() {
			return {
				id: this.$route.params.id, // 从路由中获取到的图片id
				photoinfo: {}, // 图片详情
				list: [] // 缩略图数组
			}
		},
		created() {
			this.getPhotoInfo()
			this.getThumbs()
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
			},
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
		components: {
			// 2.注册评论子组件
			"cmt-box": comment
		}
	}
</script>

<style lang="scss" scoped>
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
		.content {
			font-size: 13px;
			line-height: 30px;
		}
		.thumbs{
		    img{
		        margin: 10px;
		        box-shadow: 0 0 8px #999;
		    }
		}
	}
</style>