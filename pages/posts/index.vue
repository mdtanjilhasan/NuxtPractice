<template>
    <div class="post-page">
        <PostList/>
    </div>
</template>
<style scoped>
.post-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
import PostList from '~/components/Posts/PostList'
export default {
  components:{
    PostList
  }
}
</script>