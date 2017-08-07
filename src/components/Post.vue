<template>
  <div class="post">
    <post-body></post-body>
  </div>
</template>

<script>
  import PostBody from './PostBody'

  export default {
    name: 'post',
    components: { PostBody }
  }
</script>
