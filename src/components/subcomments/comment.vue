<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容,最多输入120字" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">第{{ i+1 }}楼&nbsp;&nbsp;用户: {{ item.uer_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，什么都没说' : item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        pageIndex: 1, // 默认展示第一页数据
        comments: [], // 存储所有的评论数据
        msg: '' // 发表评论操作，评论输入的内容，双向数据绑定
      }
    },
    created() {
      this.getComments()
    },
    methods: {
      getComments() {
        // 获取评论
        this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message 这种直接覆盖，如果在加载更多中会覆盖掉前面的数据
            // 每单获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
            this.comments = this.comments.concat(result.body.message) 
          } else {
            Toast('评论数据加载失败')
          }
        })
      },
      getMore() {
        // 加载更多
        this.pageIndex++
        this.getComments()
      },
      postComment() {
        if (this.msg.trim().length === 0) {
          Toast('评论内容不能为空')
        }
        this.$http
          .post('api/postcomment/' + this.$route.params.id, {
            content: this.msg.trim()
          })
          .then(function (result) {
            if (result.body.status === 0) {
              var cmt = { user_name: '匿名用户', add_time: Date.now(), content: this.msg.trim() }
              this.comments.unshift(cmt)
              this.msg = ''
            } else {
              Toast('获取评论失败')
            }
          })
        }
    },
    props: ["id"]
  }
</script>

<style lang="scss" scoped>
  .cmt-container {
    h3 {
      font-size: 18px;
    }
    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0;
    }
    .cmt-list {
      margin: 5px 0;
      .cmt-item {
        font-size: 13px;
        .cmt-title {
          line-height: 30px;
          background-color: #ccc;
        }
        .cmt-body {
          line-height: 35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>