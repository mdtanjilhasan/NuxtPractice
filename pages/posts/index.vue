<template>
    <div class="post-page">
        <PostList :posts="loadedPosts"/>
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
export default {
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts;
    }
  },
  head:{
    title : 'Posts Page'
  }
}
</script>