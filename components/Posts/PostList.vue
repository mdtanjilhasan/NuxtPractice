<template>
    <section class="featured-posts">
      <PostPreview
        v-for="post in posts"
        :key="post.postId"
        :is-admin="isAdmin"
        :postId="post.postId"
        :title="post.title"
        :previewText="post.previewText"
        :thumbnail="post.thumbnail"
      />
    </section>
    
        <!-- thumbnail="http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg" -->
</template>
<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components:{
    PostPreview
  },
  props:{
    isAdmin:{
      type: Boolean,
      default: false
    },
    posts:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>