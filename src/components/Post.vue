<template>
  <div v-if="isEmpty">
    加载中...
  </div>
  <div v-else>
    <div class="post">
      <div class="upper">
        <post-body :postId="postId"></post-body>
      </div>
      <div class="bottom">
        <comment-box></comment-box>
      </div>
    </div>
  </div>
</template>

<script>
  import PostBody from './PostBody'
  import CommentBox from './CommentBox'

  export default {
    name: 'post',
    components: { PostBody, CommentBox },
    computed: {
      postId: function () {
        return this.$route.params.id
      },
      isEmpty: function () {
        return this.$store.state.comment.all.length === 0
      }
    },
    created () {
      this.$store.dispatch('getAllPosts')
    }
  }
</script>

<style scoped>
.upper {
  background-color: #00bcd4;
  min-height: 200px;
  display: flex;
}
.bottom {
  display: flex;
  background-color: #fafafa;
  min-height: 200px;
}
</style>
