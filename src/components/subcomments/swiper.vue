<template>
	<div>
		<mt-swipe :auto="1000">
		  <mt-swipe-item v-for="item in bannerList" :key="item.url">
		  	<img :src="item.img" alt="" :class="{'full': isfull}">
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		props: ["bannerList", "isfull"]
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 200px;
		.mint-swipe-item {
			text-align: center;
			img {
				height: 100%;
			}
		}
	}
	.full {
		width: 100%;
	}
</style>