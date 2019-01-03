<template>
	<div>
		<div class="newsinfo-container">
			<h3 class="title">{{ newsinfo.title }}</h3>
			<p class="subtitle">
				<span>{{ newsinfo.add_time | dateFormat }}</span>
				<span>点击: {{ newsinfo.click }} 次</span>
			</p>
			<hr>
			<!-- 内容区域 -->
			<div class="content" v-html="newsinfo.content"></div>
			<!-- 评论子组件区域 -->
			<comment-box :id="this.id"></comment-box>
		</div>	
	</div>
</template>


<script>

	// 1、导入评论子组件
	import comment from '../subcomments/comment.vue'

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
		},
		// 2、注册评论组件
		components: {
			'comment-box': comment
		}
	}
</script>


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