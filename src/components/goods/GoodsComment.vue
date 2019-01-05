<template>
  <div>
  	<cmtbox :id="this.$route.params.id"></cmtbox>
  </div>
</template>

<script>

import cmtbox from '../subcomments/comment.vue'

export default {
	data() {
		id: this.$route.params.id
	},
	components: {
		cmtbox
	}
}
</script>

<style lang="scss" scoped>

</style>
