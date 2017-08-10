<template>
  <div class="comment-box">
    <div class="form">
      <input type="text" id="commentForm" />
      <button v-on:click="addComment" type="submit">发布</button>
    </div>
    <ul>
      <li v-for="comment in reversedComments">
        {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  import * as types from '../store/mutation-types'
  export default {
    name: 'comment-box',
    computed: {
      reversedComments: function () {
        return this.comments.slice().reverse()
      },
      comments: function () {
        return this.$store.state.comment.all
      }
    },
    methods: {
      addComment: function () {
        const input = document.getElementById('commentForm')
        this.$store.commit(types.ADD_COMMENT, { text: input.value })
        input.value = ''
      }
    }
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
   li {
     border-bottom: 1px solid rgba(0, 0, 0, .2);
     margin-bottom: 10px;
   }

   .form {
     display: flex;
     margin-bottom: 10px;
   }
   button {
     background-color: deeppink;
     color: white;
     border: 0;
     outline: 0;
     line-height: 20px;
     padding: 5px 20px;
     margin: 0 0 0 10px;
   }

   button:hover {
     cursor: pointer;
   }

   input {
     height: 30px;
     line-height: 30px;
     text-indent: 5px;
     display: flex;
     flex-grow: 1;
   }
</style>
