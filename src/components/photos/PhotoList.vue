<template>
	<div>
		<!-- 顶部滑动条区域 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in categoires" :key="item.id" @tap="getPhotoListByCateId(item.id)">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>

		<!-- 图片列表区域 -->
		<ul class="photo_list">
	      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
	        <img v-lazy="item.img_url">
	        <div class="info">
	          <h1 class="info_title">{{ item.title }}</h1>
	          <div class="info_body">{{ item.zhaiyao }}</div>
	        </div>
	      </router-link>
	    </ul>
	</div>

</template>

<script>

	import mui from '../../lib/mui/js/mui.min.js'
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				categoires: [], // 所有分类列表数组
				list: [] // 图片列表数组
			}
		},
		created() {
			this.getAllCategory()
			// 默认进入页面主动请求全部图片列表数据
			this.getPhotoListByCateId(0)
		},
		mounted() {
		    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
		    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
		    // 2. 初始化滑动控件
		    mui(".mui-scroll-wrapper").scroll({
		      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		    })
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
</script>

<style lang="scss" scoped>
	* {
	  touch-action: pan-y;
	}

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
	


</style>