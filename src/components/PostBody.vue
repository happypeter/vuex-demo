<template>
  <div class="post-body">
    {{ commentNo }} 评论
  </div>
</template>

<script>
  export default {
    name: 'post-body',
    props: ['postId'],
    computed: {
      commentNo: function () {
        return this.$store.state.comment.all.length
      }
    }
  }
</script>


<style scoped>
  .post-body {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    width: 80%;
    margin: 30px auto;
    padding: 20px;
    line-height: 1.8;
   }
</style>
