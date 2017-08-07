<template>
  <div class="comment-box">
    <ul>
      <li v-for="comment in comments">
        {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'comment-box',
    data: () => ({
      comments: [
        {
          text: 'hello git'
        },
        {
          text: 'hello vuejs'
        }
      ]
    })
  }
</script>

<style scoped>
  .comment-box {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    width: 80%;
    margin: 30px auto;
    padding: 20px;
    line-height: 1.8;
   }
</style>
