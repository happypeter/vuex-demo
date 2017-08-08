<template>
  <div class="post">
    <div class="upper">
      <post-body v-bind:postId="myId"></post-body>
    </div>
    <div class="bottom">
      <comment-box></comment-box>
    </div>
  </div>
</template>

<script>
  import PostBody from './PostBody'
  import CommentBox from './CommentBox'

  export default {
    name: 'post',
    components: { PostBody, CommentBox },
    data: function () {
      return {
        myId: '1256'
      }
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
